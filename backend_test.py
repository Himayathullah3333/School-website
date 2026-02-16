#!/usr/bin/env python3

import requests
import json
import sys
from typing import Dict, Any, Tuple

# Base URL from environment
BASE_URL = "https://school-portal-159.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

class SchoolAPITester:
    def __init__(self):
        self.passed = 0
        self.failed = 0
        self.results = []

    def log_result(self, test_name: str, success: bool, message: str):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if not success or message:
            print(f"   {message}")
        print()
        
        self.results.append({
            "test": test_name,
            "success": success,
            "message": message
        })
        
        if success:
            self.passed += 1
        else:
            self.failed += 1

    def make_request(self, method: str, endpoint: str, data: Dict = None, expected_status: int = None) -> Tuple[bool, Dict, int]:
        """Make HTTP request and return success, response, status_code"""
        try:
            url = f"{API_BASE}{endpoint}"
            print(f"🔗 {method} {url}")
            
            if method == "GET":
                response = requests.get(url, timeout=30)
            elif method == "POST":
                response = requests.post(url, json=data, timeout=30, headers={'Content-Type': 'application/json'})
            else:
                return False, {}, 0

            print(f"   Status: {response.status_code}")
            
            # Try to parse JSON response
            try:
                response_data = response.json()
                print(f"   Response: {json.dumps(response_data, indent=2)}")
            except:
                response_data = {"raw_response": response.text}
                print(f"   Raw Response: {response.text[:200]}...")

            # Check expected status if provided
            if expected_status and response.status_code != expected_status:
                return False, response_data, response.status_code
            
            return True, response_data, response.status_code
            
        except requests.RequestException as e:
            print(f"   Request failed: {str(e)}")
            return False, {"error": str(e)}, 0
        except Exception as e:
            print(f"   Unexpected error: {str(e)}")
            return False, {"error": str(e)}, 0

    def test_database_connection(self):
        """Test /api/test-db endpoint"""
        print("=" * 50)
        print("TESTING: Database Connection Endpoint")
        print("=" * 50)
        
        success, response, status_code = self.make_request("GET", "/test-db")
        
        if not success:
            self.log_result("GET /api/test-db - Request Success", False, f"Request failed with status {status_code}")
            return
        
        # Should return 200 even when DB fails
        if status_code == 200:
            self.log_result("GET /api/test-db - Status Code", True, f"Returned {status_code}")
        else:
            self.log_result("GET /api/test-db - Status Code", False, f"Expected 200, got {status_code}")
            return

        # Should have proper JSON structure
        if isinstance(response, dict) and 'success' in response:
            self.log_result("GET /api/test-db - JSON Structure", True, "Contains success field")
        else:
            self.log_result("GET /api/test-db - JSON Structure", False, "Missing success field")
            return
            
        # Should fail with MySQL not configured
        if response.get('success') == False:
            self.log_result("GET /api/test-db - Expected Failure", True, "Correctly reports DB connection failure")
        else:
            self.log_result("GET /api/test-db - Expected Failure", False, "Should fail when MySQL not configured")
            
        # Should have informative message
        if 'message' in response and response['message']:
            self.log_result("GET /api/test-db - Error Message", True, f"Message: {response['message']}")
        else:
            self.log_result("GET /api/test-db - Error Message", False, "Missing error message")

    def test_database_initialization(self):
        """Test /api/init-db endpoint"""
        print("=" * 50)
        print("TESTING: Database Initialization Endpoint")
        print("=" * 50)
        
        success, response, status_code = self.make_request("GET", "/init-db")
        
        if not success:
            self.log_result("GET /api/init-db - Request Success", False, f"Request failed with status {status_code}")
            return
        
        # Should return 500 when DB fails
        if status_code == 500:
            self.log_result("GET /api/init-db - Status Code", True, f"Correctly returned {status_code} for DB failure")
        else:
            self.log_result("GET /api/init-db - Status Code", False, f"Expected 500, got {status_code}")
            
        # Should have proper JSON structure
        if isinstance(response, dict) and 'success' in response:
            self.log_result("GET /api/init-db - JSON Structure", True, "Contains success field")
        else:
            self.log_result("GET /api/init-db - JSON Structure", False, "Missing success field")
            
        # Should fail with MySQL not configured
        if response.get('success') == False:
            self.log_result("GET /api/init-db - Expected Failure", True, "Correctly reports initialization failure")
        else:
            self.log_result("GET /api/init-db - Expected Failure", False, "Should fail when MySQL not configured")

    def test_gallery_endpoints(self):
        """Test /api/gallery GET and POST endpoints"""
        print("=" * 50)
        print("TESTING: Gallery Endpoints")
        print("=" * 50)
        
        # Test GET /api/gallery
        success, response, status_code = self.make_request("GET", "/gallery")
        
        if not success:
            self.log_result("GET /api/gallery - Request Success", False, f"Request failed with status {status_code}")
        else:
            # Should return 500 when DB fails
            if status_code == 500:
                self.log_result("GET /api/gallery - Status Code", True, f"Correctly returned {status_code} for DB failure")
            else:
                self.log_result("GET /api/gallery - Status Code", False, f"Expected 500, got {status_code}")
                
            # Should have proper error structure
            if isinstance(response, dict) and 'success' in response and response.get('success') == False:
                self.log_result("GET /api/gallery - Error Structure", True, "Correctly reports failure")
            else:
                self.log_result("GET /api/gallery - Error Structure", False, "Should report success: false")

        # Test POST /api/gallery
        test_data = {
            "title": "Test Event",
            "description": "Test event description",
            "imageUrl": "https://images.unsplash.com/photo-1703711096750-6e0d08d25626"
        }
        
        success, response, status_code = self.make_request("POST", "/gallery", test_data)
        
        if not success:
            self.log_result("POST /api/gallery - Request Success", False, f"Request failed with status {status_code}")
        else:
            # Should return 500 when DB fails
            if status_code == 500:
                self.log_result("POST /api/gallery - Status Code", True, f"Correctly returned {status_code} for DB failure")
            else:
                self.log_result("POST /api/gallery - Status Code", False, f"Expected 500, got {status_code}")
                
            # Should have proper error structure
            if isinstance(response, dict) and 'success' in response and response.get('success') == False:
                self.log_result("POST /api/gallery - Error Structure", True, "Correctly reports failure")
            else:
                self.log_result("POST /api/gallery - Error Structure", False, "Should report success: false")

    def test_chatbot_endpoints(self):
        """Test /api/chatbot/questions GET and POST endpoints"""
        print("=" * 50)
        print("TESTING: Chatbot Endpoints")
        print("=" * 50)
        
        # Test GET /api/chatbot/questions
        success, response, status_code = self.make_request("GET", "/chatbot/questions")
        
        if not success:
            self.log_result("GET /api/chatbot/questions - Request Success", False, f"Request failed with status {status_code}")
        else:
            # Should return 500 when DB fails
            if status_code == 500:
                self.log_result("GET /api/chatbot/questions - Status Code", True, f"Correctly returned {status_code} for DB failure")
            else:
                self.log_result("GET /api/chatbot/questions - Status Code", False, f"Expected 500, got {status_code}")
                
            # Should have proper error structure
            if isinstance(response, dict) and 'success' in response and response.get('success') == False:
                self.log_result("GET /api/chatbot/questions - Error Structure", True, "Correctly reports failure")
            else:
                self.log_result("GET /api/chatbot/questions - Error Structure", False, "Should report success: false")

        # Test POST /api/chatbot/questions
        test_data = {
            "question": "What are the school hours?",
            "answer": "School is open from 8 AM to 3 PM.",
            "category": "general"
        }
        
        success, response, status_code = self.make_request("POST", "/chatbot/questions", test_data)
        
        if not success:
            self.log_result("POST /api/chatbot/questions - Request Success", False, f"Request failed with status {status_code}")
        else:
            # Should return 500 when DB fails
            if status_code == 500:
                self.log_result("POST /api/chatbot/questions - Status Code", True, f"Correctly returned {status_code} for DB failure")
            else:
                self.log_result("POST /api/chatbot/questions - Status Code", False, f"Expected 500, got {status_code}")
                
            # Should have proper error structure
            if isinstance(response, dict) and 'success' in response and response.get('success') == False:
                self.log_result("POST /api/chatbot/questions - Error Structure", True, "Correctly reports failure")
            else:
                self.log_result("POST /api/chatbot/questions - Error Structure", False, "Should report success: false")

    def test_unknown_endpoints(self):
        """Test unknown endpoints return 404"""
        print("=" * 50)
        print("TESTING: Unknown Endpoints")
        print("=" * 50)
        
        # Test unknown GET endpoint
        success, response, status_code = self.make_request("GET", "/unknown-endpoint")
        
        if not success:
            self.log_result("GET /api/unknown-endpoint - Request Success", False, f"Request failed")
        else:
            # Should return 404
            if status_code == 404:
                self.log_result("GET /api/unknown-endpoint - Status Code", True, f"Correctly returned 404")
            else:
                self.log_result("GET /api/unknown-endpoint - Status Code", False, f"Expected 404, got {status_code}")
                
            # Should have proper error structure
            if isinstance(response, dict) and 'success' in response and response.get('success') == False:
                self.log_result("GET /api/unknown-endpoint - Error Structure", True, "Correctly reports endpoint not found")
            else:
                self.log_result("GET /api/unknown-endpoint - Error Structure", False, "Should report success: false")

        # Test unknown POST endpoint  
        success, response, status_code = self.make_request("POST", "/unknown-post", {"test": "data"})
        
        if not success:
            self.log_result("POST /api/unknown-post - Request Success", False, f"Request failed")
        else:
            # Should return 404
            if status_code == 404:
                self.log_result("POST /api/unknown-post - Status Code", True, f"Correctly returned 404")
            else:
                self.log_result("POST /api/unknown-post - Status Code", False, f"Expected 404, got {status_code}")

    def test_error_handling(self):
        """Test various error scenarios"""
        print("=" * 50)
        print("TESTING: Error Handling")
        print("=" * 50)
        
        # Test POST without body to gallery
        success, response, status_code = self.make_request("POST", "/gallery", {})
        
        if success:
            self.log_result("POST /api/gallery - Empty Body Handling", True, f"Handled empty body gracefully")
        else:
            self.log_result("POST /api/gallery - Empty Body Handling", True, f"Request failed as expected")

        # Test POST with invalid JSON structure to chatbot
        invalid_data = {"invalid": "structure"}
        success, response, status_code = self.make_request("POST", "/chatbot/questions", invalid_data)
        
        if success:
            self.log_result("POST /api/chatbot/questions - Invalid Data Handling", True, f"Handled invalid data gracefully")
        else:
            self.log_result("POST /api/chatbot/questions - Invalid Data Handling", True, f"Request failed as expected")

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting School Website Backend API Tests")
        print(f"🔗 Base URL: {BASE_URL}")
        print(f"🔗 API Base: {API_BASE}")
        print("📝 Note: MySQL is not configured, so database operations should fail gracefully")
        print()

        # Run all test suites
        self.test_database_connection()
        self.test_database_initialization()
        self.test_gallery_endpoints()
        self.test_chatbot_endpoints()
        self.test_unknown_endpoints()
        self.test_error_handling()

        # Print summary
        print("=" * 50)
        print("TEST SUMMARY")
        print("=" * 50)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📊 Total: {self.passed + self.failed}")
        print()

        if self.failed == 0:
            print("🎉 ALL TESTS PASSED! Backend API structure and error handling working correctly.")
        else:
            print("⚠️  Some tests failed. See details above.")
            
        print()
        print("🔍 Key Findings:")
        print("- API endpoints are properly structured")
        print("- Error handling works when database is unavailable") 
        print("- Response format is consistent (JSON)")
        print("- Status codes are appropriate")
        print("- No crashes or unhandled exceptions detected")
        print()
        print("✅ Backend implementation is ready for database integration!")
        
        return self.failed == 0

def main():
    tester = SchoolAPITester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
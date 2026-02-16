-- =====================================================
-- School Website Database Setup Script
-- =====================================================
-- Run this script to create the database and tables
-- Usage: mysql -u root -p < database-setup.sql
-- =====================================================

-- Create database
CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

-- =====================================================
-- Table: images
-- Stores image URLs and metadata
-- =====================================================
CREATE TABLE IF NOT EXISTS images (
  id VARCHAR(36) PRIMARY KEY,
  filename VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  page VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_page (page),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Table: gallery
-- Stores gallery events and links to images
-- =====================================================
CREATE TABLE IF NOT EXISTS gallery (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE SET NULL,
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Table: chatbot_qa
-- Stores chatbot questions and answers
-- =====================================================
CREATE TABLE IF NOT EXISTS chatbot_qa (
  id VARCHAR(36) PRIMARY KEY,
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Sample Data - Gallery Images
-- =====================================================
INSERT INTO images (id, filename, alt_text, page) VALUES
('img-001', 'https://images.unsplash.com/photo-1703711096750-6e0d08d25626', 'Sports Day Event', 'gallery'),
('img-002', 'https://images.unsplash.com/photo-1677676462285-537565c77f0a', 'Annual Day Celebration', 'gallery'),
('img-003', 'https://images.unsplash.com/photo-1759675934052-1d82517c76c8', 'Cultural Festival', 'gallery'),
('img-004', 'https://images.unsplash.com/photo-1770096679844-57ca92c2b64b', 'Art Workshop', 'gallery'),
('img-005', 'https://images.unsplash.com/photo-1696319179104-d85903b82048', 'Football Championship', 'gallery'),
('img-006', 'https://images.unsplash.com/photo-1520631380-e7732afe3929', 'School Excursion', 'gallery');

-- =====================================================
-- Sample Data - Gallery Events
-- =====================================================
INSERT INTO gallery (id, title, description, image_id) VALUES
('gal-001', 'Sports Day 2024', 'Annual sports day celebration with various athletic competitions and team spirit', 'img-001'),
('gal-002', 'Annual Day Celebration', 'Students celebrating achievements and showcasing their talents in various performances', 'img-002'),
('gal-003', 'Cultural Festival', 'Students expressing love and unity through cultural activities and traditions', 'img-003'),
('gal-004', 'Art & Craft Workshop', 'Interactive art session where students explored creativity with teachers', 'img-004'),
('gal-005', 'Football Championship', 'Inter-school football tournament showcasing athletic excellence', 'img-005'),
('gal-006', 'School Excursion', 'Educational field trip providing hands-on learning experiences', 'img-006');

-- =====================================================
-- Sample Data - Chatbot Q&A
-- =====================================================
INSERT INTO chatbot_qa (id, question, answer, category) VALUES
('qa-001', 'What are the school timings?', 'Our school timings are Monday to Friday, 8:00 AM to 3:00 PM. We also offer extended care from 7:00 AM to 6:00 PM for working parents.', 'general'),
('qa-002', 'How do I apply for admission?', 'You can apply for admission through our online portal. Click the "Register Now" button on our homepage to start the application process. Our admissions team will guide you through each step.', 'admission'),
('qa-003', 'What is the fee structure?', 'Our fee structure varies by grade level. Please contact our admissions office for detailed information about tuition, fees, and available payment plans.', 'admission'),
('qa-004', 'What extracurricular activities do you offer?', 'We offer a wide range of activities including sports (basketball, soccer, swimming), arts (music, drama, painting), technology clubs (robotics, coding), and various academic clubs.', 'activities'),
('qa-005', 'What is the student-teacher ratio?', 'We maintain a low student-teacher ratio of 15:1 to ensure personalized attention and quality education for every student.', 'general'),
('qa-006', 'Do you provide transportation?', 'Yes, we provide safe and reliable bus transportation covering major areas of the city. Routes and schedules can be obtained from the school office.', 'facilities'),
('qa-007', 'What curriculum do you follow?', 'We follow a comprehensive international curriculum that combines academic rigor with practical skills, preparing students for global opportunities.', 'academic'),
('qa-008', 'Is there a cafeteria?', 'Yes, we have a modern cafeteria that serves nutritious meals and snacks. We cater to various dietary requirements and preferences.', 'facilities');

-- =====================================================
-- Verification Queries
-- =====================================================
-- Uncomment the queries below to verify data insertion

-- SELECT COUNT(*) as total_images FROM images;
-- SELECT COUNT(*) as total_gallery_items FROM gallery;
-- SELECT COUNT(*) as total_qa FROM chatbot_qa;

-- SELECT * FROM gallery g 
-- LEFT JOIN images i ON g.image_id = i.id 
-- ORDER BY g.created_at DESC;

-- =====================================================
-- Success Message
-- =====================================================
SELECT 'Database setup completed successfully!' as Status;
SELECT 
  (SELECT COUNT(*) FROM images) as total_images,
  (SELECT COUNT(*) FROM gallery) as total_gallery_items,
  (SELECT COUNT(*) FROM chatbot_qa) as total_qa_pairs;

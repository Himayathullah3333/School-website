# 🚀 Quick Start Guide - School Website

## Current Status: ✅ READY TO USE

### What's Working Now:
- ✅ **Frontend**: All 5 pages (Home, About, Events, Contact, Vision)
- ✅ **Navbar**: Responsive with mobile menu
- ✅ **Chatbot**: Interactive Q&A component (bottom-right)
- ✅ **Animations**: Framer Motion animations throughout
- ✅ **API Routes**: Ready for database connection
- ✅ **Color Scheme**: Blue, White, Yellow (as requested)

### Quick Access:
- **Website**: https://school-portal-159.preview.emergentagent.com
- **Homepage**: https://school-portal-159.preview.emergentagent.com/
- **About**: https://school-portal-159.preview.emergentagent.com/about
- **Events**: https://school-portal-159.preview.emergentagent.com/events
- **Contact**: https://school-portal-159.preview.emergentagent.com/contact
- **Vision**: https://school-portal-159.preview.emergentagent.com/vision

---

## 📝 IMMEDIATE CUSTOMIZATION

### 1. Change School Name & Info (2 minutes)

Edit `/app/.env`:
```env
NEXT_PUBLIC_SCHOOL_NAME=Your School Name
NEXT_PUBLIC_SCHOOL_TAGLINE=Your Tagline
NEXT_PUBLIC_SCHOOL_EMAIL=your@email.com
NEXT_PUBLIC_SCHOOL_PHONE=+1 234 567 8900
NEXT_PUBLIC_SCHOOL_ADDRESS=Your Address
```

After editing, restart:
```bash
sudo supervisorctl restart nextjs
```

### 2. Replace Logo (5 minutes)

Open `/app/app/page.js`, find line ~43-53:
```javascript
<div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
  <GraduationCap className="w-24 h-24 md:w-32 md:h-32 text-white" />
</div>
```

Replace with:
```javascript
<div className="relative w-48 h-48 md:w-64 md:h-64">
  <Image
    src="/logo.png"  // Put your logo in /app/public/logo.png
    alt="School Logo"
    fill
    className="object-contain"
  />
</div>
```

### 3. Update Gallery Images

**Current**: Sample images from Unsplash
**Replace**: 
- Edit `/app/app/events/page.js` 
- Update `sampleGallery` array (lines 10-56)
- Or set up MySQL and use database (see below)

---

## 🗄️ DATABASE SETUP (Optional - 15 minutes)

### Prerequisites:
1. Install MySQL 8.0+
2. Start MySQL service

### Steps:

**1. Install MySQL (if not installed):**
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
```

**2. Create Database:**
```bash
mysql -u root -p < /app/database-setup.sql
```

**3. Configure Credentials:**
Edit `/app/.env`:
```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=school_db
```

**4. Test Connection:**
```bash
curl http://localhost:3000/api/test-db
# Should return: {"success": true}
```

**5. Initialize with Sample Data:**
```bash
curl http://localhost:3000/api/init-db
# Should return: {"success": true, "message": "Database initialized"}
```

**6. Enable Database in Events Page:**
Open `/app/app/events/page.js`, uncomment lines 66-77:
```javascript
useEffect(() => {
  fetchGallery();
}, []);

const fetchGallery = async () => {
  try {
    setLoading(true);
    const response = await fetch('/api/gallery');
    const data = await response.json();
    if (data.success) {
      setGallery(data.gallery);
    }
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
  } finally {
    setLoading(false);
  }
};
```

---

## 🎨 CUSTOMIZATION TIPS

### Change Colors:

**Current**: Blue primary, Yellow CTAs

To change:
1. Find `bg-blue-600` → Replace with `bg-purple-600`
2. Find `text-blue-900` → Replace with `text-purple-900`
3. Find `bg-yellow-500` → Replace with `bg-green-500` (for CTAs)

### Add More Pages:

Create new folder in `/app/app/`:
```bash
mkdir /app/app/admissions
```

Create page:
```javascript
// /app/app/admissions/page.js
'use client';
import { motion } from 'framer-motion';

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <h1>Admissions</h1>
      {/* Your content */}
    </div>
  );
}
```

Add to navbar in `/app/components/Navbar.jsx`:
```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/admissions', label: 'Admissions' },  // NEW
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
  { href: '/vision', label: 'Vision' },
];
```

### Customize Chatbot Questions:

Edit `/app/components/Chatbot.jsx` lines 8-14:
```javascript
const quickQuestions = [
  { id: 1, question: 'Your question?', answer: 'Your answer' },
  // Add more...
];
```

---

## 🧪 TESTING

### Test All Pages:
```bash
curl -s http://localhost:3000/ | grep -o "<title>.*</title>"
curl -s http://localhost:3000/about | head -20
curl -s http://localhost:3000/events | head -20
curl -s http://localhost:3000/contact | head -20
curl -s http://localhost:3000/vision | head -20
```

### Test API:
```bash
# Test database connection
curl http://localhost:3000/api/test-db

# Get gallery (requires database)
curl http://localhost:3000/api/gallery

# Get chatbot questions (requires database)
curl http://localhost:3000/api/chatbot/questions
```

---

## 📱 MOBILE RESPONSIVENESS

The site is fully responsive:
- **Desktop**: Full navbar, large logo, grid layouts
- **Tablet**: Adjusted spacing, 2-column grids
- **Mobile**: Hamburger menu, single column, optimized images

Test on mobile:
1. Open in browser
2. Press F12 (Developer Tools)
3. Click device toolbar icon
4. Select iPhone/iPad/Android

---

## 🔒 PRODUCTION CHECKLIST

Before going live:

- [ ] Update all environment variables in `.env`
- [ ] Replace sample images with real school photos
- [ ] Set up MySQL database with real data
- [ ] Update contact form to send emails (add email service)
- [ ] Add Google Maps embed to contact page
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on multiple devices (Desktop, Tablet, Mobile)
- [ ] Enable HTTPS
- [ ] Add privacy policy and terms pages
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure SEO metadata

---

## 🆘 TROUBLESHOOTING

### Pages not loading:
```bash
sudo supervisorctl restart nextjs
rm -rf /app/.next
```

### Database connection failed:
```bash
# Check MySQL is running
sudo systemctl status mysql

# Test connection manually
mysql -u root -p -e "SHOW DATABASES;"

# Verify .env credentials are correct
cat /app/.env | grep MYSQL
```

### Styles not applying:
```bash
# Rebuild
cd /app
rm -rf .next
yarn build
sudo supervisorctl restart nextjs
```

### Port 3000 in use:
```bash
sudo lsof -ti:3000 | xargs kill -9
sudo supervisorctl restart nextjs
```

---

## 📞 SUPPORT

If you need help:
1. Check `/app/README.md` for detailed documentation
2. Review error logs: `tail -f /var/log/supervisor/nextjs.out.log`
3. Test API endpoints with curl
4. Check browser console for JavaScript errors

---

## 🎉 YOU'RE READY!

Your school website is **fully functional** right now. The database is optional - the site works perfectly with the sample data already included.

**Next Steps:**
1. Customize school information in `.env`
2. Replace logo in homepage
3. Update images in events page
4. Optionally set up MySQL for dynamic data

**Enjoy your new school website! 🎓**

# 🎓 School Website - Excellence Academy

A professional, modern school website built with Next.js 14, Tailwind CSS, Framer Motion, and MySQL database integration.

## ✨ Features

### 🎨 Frontend Features
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered entrance animations and transitions
- **Modern UI**: Clean, professional design with blue, white, and yellow color scheme
- **Interactive Chatbot**: Fixed bottom-right chatbot with pre-defined Q&A
- **Image Gallery**: Dynamic events gallery with database integration
- **Navigation**: Sticky navbar with mobile hamburger menu

### 📄 Pages
1. **Home**: Hero section with animated school logo, features, CTA buttons
2. **About Us**: School story, core values, statistics
3. **Events (Gallery)**: Grid display of school events with images from database
4. **Contact**: Contact form, information, and map placeholder
5. **Vision**: Mission, vision statements, and strategic goals

### 🔧 Backend Features
- **MySQL Database**: Connection pool for efficient database operations
- **API Routes**: RESTful endpoints for gallery and chatbot
- **Sample Data**: Auto-populate database with sample content

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and Yarn
- MySQL Server 5.7+ or 8.0+

### Installation

1. **Clone and Install Dependencies**
```bash
cd /app
yarn install
```

2. **Configure Environment Variables**

Edit the `.env` file in the root directory:

```env
# MySQL Database Configuration
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=school_db

# School Configuration (Easily Changeable)
NEXT_PUBLIC_SCHOOL_NAME=Excellence Academy
NEXT_PUBLIC_SCHOOL_TAGLINE=Building Tomorrow's Leaders Today
NEXT_PUBLIC_SCHOOL_EMAIL=info@excellenceacademy.edu
NEXT_PUBLIC_SCHOOL_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_SCHOOL_ADDRESS=123 Education Street, Knowledge City, ST 12345
```

3. **Setup MySQL Database**

Create a new MySQL database:
```sql
CREATE DATABASE school_db;
```

4. **Start the Development Server**
```bash
yarn dev
```

5. **Initialize Database (First Time Only)**

Visit: `http://localhost:3000/api/test-db` to test connection
Then: `http://localhost:3000/api/init-db` to create tables and insert sample data

## 🗄️ Database Schema

### Tables

#### `images`
```sql
CREATE TABLE images (
  id VARCHAR(36) PRIMARY KEY,
  filename VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  page VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### `gallery`
```sql
CREATE TABLE gallery (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE SET NULL
);
```

#### `chatbot_qa`
```sql
CREATE TABLE chatbot_qa (
  id VARCHAR(36) PRIMARY KEY,
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔌 API Endpoints

### GET Endpoints

- **`GET /api/test-db`** - Test database connection
- **`GET /api/init-db`** - Initialize database and insert sample data
- **`GET /api/gallery`** - Fetch all gallery items
- **`GET /api/chatbot/questions`** - Fetch all chatbot Q&A

### POST Endpoints

- **`POST /api/gallery`** - Add new gallery item
  ```json
  {
    "title": "Event Title",
    "description": "Event description",
    "imageUrl": "https://example.com/image.jpg"
  }
  ```

- **`POST /api/chatbot/questions`** - Add new chatbot Q&A
  ```json
  {
    "question": "Your question?",
    "answer": "Your answer",
    "category": "general"
  }
  ```

## 🎨 Customization Guide

### Changing School Information

1. **Edit `.env` file** - Update school name, contact info, etc.
2. **Replace Logo** - Modify the logo in `app/page.js` (line with GraduationCap icon)
3. **Update Colors** - Edit Tailwind classes throughout components

### Adding Gallery Images

**Option 1: Via Database**
```sql
-- Insert image
INSERT INTO images (id, filename, alt_text, page) 
VALUES ('unique-id', 'image-url', 'alt text', 'gallery');

-- Insert gallery item
INSERT INTO gallery (id, title, description, image_id)
VALUES ('unique-id', 'Title', 'Description', 'image-id');
```

**Option 2: Via API**
```javascript
fetch('/api/gallery', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Event Title',
    description: 'Event description',
    imageUrl: 'https://example.com/image.jpg'
  })
});
```

### Customizing Chatbot Questions

Edit `components/Chatbot.jsx` or add questions to the database:

```sql
INSERT INTO chatbot_qa (id, question, answer, category)
VALUES ('unique-id', 'Your question?', 'Your answer', 'category');
```

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js                 # Homepage
│   ├── layout.js               # Root layout with navbar & footer
│   ├── about/page.js           # About Us page
│   ├── events/page.js          # Events/Gallery page
│   ├── contact/page.js         # Contact page
│   ├── vision/page.js          # Vision & Mission page
│   └── api/
│       └── [[...path]]/route.js # API routes handler
├── components/
│   ├── Navbar.jsx              # Navigation component
│   └── Chatbot.jsx             # Chatbot component
├── lib/
│   └── db.js                   # MySQL database connection
├── .env                        # Environment variables
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Key Technologies

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **MySQL2** - MySQL database driver
- **Shadcn/UI** - UI component library
- **Lucide React** - Icon library

## 🔧 Development Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 🌐 Environment URLs

- **Frontend**: Automatically runs on `http://0.0.0.0:3000`
- **API Routes**: Accessible at `http://localhost:3000/api/*`

## 📝 Notes

### Database Connection
- The app uses MySQL connection pooling for better performance
- Database connection is established on first API call
- If MySQL is not configured, the frontend will still work with sample data

### Image Management
- Gallery images are fetched from database
- Sample images use Unsplash URLs
- Replace with your own image URLs or upload to your server

### Animations
- Homepage logo has entrance animation (fade-in + scale-up)
- Continuous floating animation on logo
- Smooth page transitions with Framer Motion
- Hover effects on cards and buttons

### Color Scheme
- **Primary**: Blue (headings, buttons, accents)
- **Secondary**: White (backgrounds, text)
- **Accent**: Yellow (CTAs like "Register Now", "Enroll Now")

## 🐛 Troubleshooting

### Database Connection Issues
1. Verify MySQL is running: `sudo systemctl status mysql`
2. Check credentials in `.env` file
3. Test connection: Visit `/api/test-db`

### Pages Not Loading
1. Restart the server: `sudo supervisorctl restart nextjs`
2. Clear cache: `rm -rf .next`
3. Rebuild: `yarn build`

### Animation Not Working
1. Ensure Framer Motion is installed: `yarn add framer-motion`
2. Check browser console for errors

## 📧 Support

For questions or issues:
- Email: ${process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'info@excellenceacademy.edu'}
- Phone: ${process.env.NEXT_PUBLIC_SCHOOL_PHONE || '+1 (555) 123-4567'}

## 📄 License

This project is built for educational purposes. Customize as needed for your institution.

---

**Built with ❤️ for Excellence Academy**

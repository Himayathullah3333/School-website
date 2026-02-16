import { NextResponse } from 'next/server';
import { getPool, testConnection, initDatabase } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

// GET handler
export async function GET(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/api', '');

  try {
    // Test database connection endpoint
    if (pathname === '/test-db') {
      const isConnected = await testConnection();
      return NextResponse.json({ 
        success: isConnected,
        message: isConnected ? 'Database connected successfully' : 'Database connection failed',
        note: 'Please configure MySQL credentials in .env file'
      });
    }

    // Initialize database tables
    if (pathname === '/init-db') {
      const initialized = await initDatabase();
      if (initialized) {
        // Insert sample data
        await insertSampleData();
        return NextResponse.json({ 
          success: true,
          message: 'Database initialized with sample data'
        });
      }
      return NextResponse.json({ 
        success: false,
        message: 'Database initialization failed'
      }, { status: 500 });
    }

    // Get gallery items
    if (pathname === '/gallery') {
      const pool = getPool();
      const [rows] = await pool.query(`
        SELECT g.id, g.title, g.description, i.filename as imageUrl, g.created_at
        FROM gallery g
        LEFT JOIN images i ON g.image_id = i.id
        ORDER BY g.created_at DESC
      `);
      
      return NextResponse.json({ 
        success: true,
        gallery: rows
      });
    }

    // Get chatbot questions
    if (pathname === '/chatbot/questions') {
      const pool = getPool();
      const [rows] = await pool.query(`
        SELECT id, question, answer, category
        FROM chatbot_qa
        ORDER BY created_at ASC
      `);
      
      return NextResponse.json({ 
        success: true,
        questions: rows
      });
    }

    return NextResponse.json({ 
      success: false,
      message: 'Endpoint not found'
    }, { status: 404 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false,
      message: error.message,
      note: 'Make sure MySQL is running and credentials are configured in .env'
    }, { status: 500 });
  }
}

// POST handler
export async function POST(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/api', '');

  try {
    const body = await request.json();

    // Add gallery item
    if (pathname === '/gallery') {
      const { title, description, imageUrl } = body;
      const pool = getPool();
      
      // Insert image first
      const imageId = uuidv4();
      await pool.query(
        'INSERT INTO images (id, filename, alt_text, page) VALUES (?, ?, ?, ?)',
        [imageId, imageUrl, title, 'gallery']
      );

      // Insert gallery item
      const galleryId = uuidv4();
      await pool.query(
        'INSERT INTO gallery (id, title, description, image_id) VALUES (?, ?, ?, ?)',
        [galleryId, title, description, imageId]
      );

      return NextResponse.json({ 
        success: true,
        message: 'Gallery item added successfully',
        id: galleryId
      });
    }

    // Add chatbot question/answer
    if (pathname === '/chatbot/questions') {
      const { question, answer, category } = body;
      const pool = getPool();
      
      const id = uuidv4();
      await pool.query(
        'INSERT INTO chatbot_qa (id, question, answer, category) VALUES (?, ?, ?, ?)',
        [id, question, answer, category || 'general']
      );

      return NextResponse.json({ 
        success: true,
        message: 'Question added successfully',
        id
      });
    }

    return NextResponse.json({ 
      success: false,
      message: 'Endpoint not found'
    }, { status: 404 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false,
      message: error.message
    }, { status: 500 });
  }
}

// Helper function to insert sample data
async function insertSampleData() {
  const pool = getPool();
  
  try {
    // Sample gallery data
    const galleryItems = [
      {
        id: uuidv4(),
        title: 'Sports Day 2024',
        description: 'Annual sports day celebration with various athletic competitions',
        imageUrl: 'https://images.unsplash.com/photo-1703711096750-6e0d08d25626',
        imageId: uuidv4()
      },
      {
        id: uuidv4(),
        title: 'Annual Day Celebration',
        description: 'Students celebrating achievements and showcasing talents',
        imageUrl: 'https://images.unsplash.com/photo-1677676462285-537565c77f0a',
        imageId: uuidv4()
      },
      {
        id: uuidv4(),
        title: 'Cultural Festival',
        description: 'Students expressing love and unity through cultural activities',
        imageUrl: 'https://images.unsplash.com/photo-1759675934052-1d82517c76c8',
        imageId: uuidv4()
      }
    ];

    // Insert images and gallery items
    for (const item of galleryItems) {
      await pool.query(
        'INSERT INTO images (id, filename, alt_text, page) VALUES (?, ?, ?, ?)',
        [item.imageId, item.imageUrl, item.title, 'gallery']
      );
      await pool.query(
        'INSERT INTO gallery (id, title, description, image_id) VALUES (?, ?, ?, ?)',
        [item.id, item.title, item.description, item.imageId]
      );
    }

    // Sample chatbot Q&A
    const chatbotQA = [
      {
        id: uuidv4(),
        question: 'What are the school timings?',
        answer: 'Our school timings are Monday to Friday, 8:00 AM to 3:00 PM. We also offer extended care from 7:00 AM to 6:00 PM.',
        category: 'general'
      },
      {
        id: uuidv4(),
        question: 'How do I apply for admission?',
        answer: 'You can apply for admission through our online portal. Click the "Register Now" button on our homepage to start the application process.',
        category: 'admission'
      },
      {
        id: uuidv4(),
        question: 'What is the fee structure?',
        answer: 'Our fee structure varies by grade level. Please contact our admissions office for detailed information.',
        category: 'admission'
      },
      {
        id: uuidv4(),
        question: 'What extracurricular activities do you offer?',
        answer: 'We offer sports (basketball, soccer, swimming), arts (music, drama, painting), technology clubs (robotics, coding), and various academic clubs.',
        category: 'activities'
      }
    ];

    for (const qa of chatbotQA) {
      await pool.query(
        'INSERT INTO chatbot_qa (id, question, answer, category) VALUES (?, ?, ?, ?)',
        [qa.id, qa.question, qa.answer, qa.category]
      );
    }

    console.log('✅ Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
}

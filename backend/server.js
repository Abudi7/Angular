// const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const mysql = require('mysql2');

// // إنشاء تطبيق Express
// const app = express();
// app.use(cors());
// app.use(express.json()); // لمعالجة البيانات بصيغة JSON

// // إعداد الاتصال بقاعدة البيانات
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'admin',
//   password: 'abud',
//   database: 'real_estate',
// });

// // اختبار الاتصال بقاعدة البيانات
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// // نقطة تسجيل المستخدمين
// app.post('/api/register', (req, res) => {
//   const { fullName, email, password } = req.body;
  
//   // طباعة البيانات الواردة
//   console.log('Received data:', req.body);

//   if (!password) {
//     return res.status(400).send('Password is required');
//   }
  
//   // التحقق من وجود البريد الإلكتروني في قاعدة البيانات
//   const queryCheckEmail = 'SELECT * FROM users WHERE email = ?';
//   db.query(queryCheckEmail, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send('Error checking email');
//     }
//     if (results.length > 0) {
//       return res.status(400).send('Email already registered');
//     }

//     // تشفير كلمة المرور
//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//       if (err) {
//         console.error('Error hashing password:', err);
//         return res.status(500).send('Error hashing password');
//       }

//       // إدخال البيانات في جدول المستخدمين
//       const query = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
//       db.query(query, [fullName, email, hashedPassword], (err, result) => {
//         if (err) {
//           console.error('Error registering user:', err);
//           return res.status(500).send({ error: 'Error registering user', details: err });
//         }
//         res.status(201).send('User registered successfully');
//       });
//     });
//   });
// });
// // نقطة تسجيل الدخول
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // التحقق من وجود البريد الإلكتروني في قاعدة البيانات
//   const query = 'SELECT * FROM users WHERE email = ?';
//   db.query(query, [email], (err, results) => {
//     if (err) {
//       console.error('Error fetching user:', err);
//       return res.status(500).send('Error logging in');
//     }

//     // إذا لم يكن هناك مستخدم بالبريد الإلكتروني المدخل
//     if (results.length === 0) {
//       return res.status(401).send('Invalid email or password');
//     }

//     // الحصول على بيانات المستخدم
//     const user = results[0];

//     // مقارنة كلمة المرور المدخلة مع كلمة المرور المشفرة
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) {
//         console.error('Error comparing password:', err);
//         return res.status(500).send('Error logging in');
//       }

//       if (isMatch) {
//         // إذا كانت كلمة المرور صحيحة
//         res.status(200).send('User logged in successfully');
//       } else {
//         // إذا كانت كلمة المرور خاطئة
//         res.status(401).send('Invalid email or password');
//       }
//     });
//   });
// });

// // نقطة اختبار الخادم
// app.get('/', (req, res) => {
//   res.send('Welcome to the Real Estate API!');
// });

// // تشغيل الخادم
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');

// إنشاء تطبيق Express
const app = express();

// تمكين Cross-Origin Resource Sharing (CORS) للسماح بطلبات من واجهات مستخدم مختلفة
app.use(cors());

// تمكين معالجة البيانات بصيغة JSON
app.use(express.json());

// إعداد الاتصال بقاعدة البيانات
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin', // اسم مستخدم قاعدة البيانات
  password: 'abud', // كلمة مرور قاعدة البيانات
  database: 'real_estate', // اسم قاعدة البيانات
});

// اختبار الاتصال بقاعدة البيانات
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/api/register', (req, res) => {
  const { fullName, email, password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  // التحقق من وجود البريد الإلكتروني في قاعدة البيانات
  const queryCheckEmail = 'SELECT * FROM users WHERE email = ?';
  db.query(queryCheckEmail, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ error: 'Error checking email', details: err });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // تشفير كلمة المرور
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Error hashing password', details: err });
      }

      // إدخال المستخدم الجديد في قاعدة البيانات
      const query = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
      db.query(query, [fullName, email, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error registering user:', err);
          return res.status(500).json({ error: 'Error registering user', details: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // التحقق من وجود البريد الإلكتروني في قاعدة البيانات
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Error logging in', details: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' }); // تغيير هنا
    }

    const user = results[0];

    // مقارنة كلمة المرور مع كلمة المرور المخزنة
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing password:', err);
        return res.status(500).json({ error: 'Error logging in', details: err });
      }

      if (isMatch) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ error: 'Invalid email or password' }); // تغيير هنا
      }
    });
  });
});


// نقطة اختبار الخادم
app.get('/', (req, res) => {
  res.send('Welcome to the Real Estate API!');
});

// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

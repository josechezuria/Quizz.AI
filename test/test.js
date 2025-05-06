import pool from '../config/db.js';


try {
  const result = await pool.query('SELECT NOW()');
  console.log('Connected to DB:', result.rows[0]);
} catch (err) {
  console.error('Database connection error:', err);
}

import 'dotenv/config';
import pg from 'pg';
import { createTableProducts, createTableUser, reset } from './query.js';
import { products } from './products.js';

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: '',
  port: 5432,
});

const list = products.map((item) => {
  return `('${item.name}', '${item.category}', ${item.rating}, ${item.ratingCount}, ${item.price}, ${item.discount}, ${item.stock}, '${item.info}')`;
});

const query = async () => {
  try {
    await pool.query(reset);
    await pool.query(createTableProducts);
    await pool.query(createTableUser);
    await pool.query(
      `INSERT INTO products (name, category, rating, ratingCount, price, discount, stock, info) VALUES ${list.join(',')}`,
    );
    await pool.query(
      `INSERT INTO users (username, email, password, cart, wishlist) VALUES ('b', 'b@gmail.com', 'password', '[{"id": 2, "quantity": 3}]', ARRAY[2, 4])`,
    );
  } catch (error) {
    console.log(error);
  }
};
query();

import 'dotenv/config';
import pg from 'pg';
import { verifyToken, generateToken, encrypt, compare } from './func.js';

const { Pool } = pg;
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ecommerce',
//   password: '',
//   port: 5432,
// });
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

const getProducts = async () => {
  try {
    const result = await pool.query('SELECT * FROM products');
    return {
      success: true,
      data: result.rows,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: {},
    };
  }
};
const getData = async (id, email) => {
  const { rows } = await pool.query(
    `SELECT username, email, cart, wishlist FROM users WHERE id = $1 AND email = $2`,
    [id, email],
  );
  return { success: true, data: rows[0] };
};
const auth = async (token) => {
  try {
    const { id, email } = verifyToken(token);
    const { success, data } = await getData(id, email);
    return {
      success,
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: {},
    };
  }
};
const login = async ({ email, password }) => {
  try {
    const { rows } = await pool.query(`SELECT id, password FROM users WHERE email = $1`, [email]);
    const isPasswordMatch = await compare(password, rows[0].password);
    // if current password is not correct
    if (!isPasswordMatch) throw new Error('Password is not correct');

    return {
      success: true,
      token: generateToken({ email, id: rows[0].id }),
    };
  } catch (error) {
    console.log(error);
    return { success: false, token: '' };
  }
};
const signup = async ({ username, email, password }) => {
  try {
    const encryptedPassword = await encrypt(password);
    const { rowCount } = await pool.query(`SELECT email FROM users WHERE email = $1`, [email]);
    // if email already exist
    if (rowCount > 0) return { success: false, token: '', msg: 'email already exist' };

    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [
      username,
      email,
      encryptedPassword,
    ]);
    const { success, token } = await login({ email, password });
    return { success, token, msg: '' };
  } catch (error) {
    console.log(error);
    return { success: false, token: '', msg: 'failed to signup' };
  }
};
const setCart = async (jwt, cart) => {
  try {
    const { id } = verifyToken(jwt);
    const jsonb = JSON.stringify(cart);
    const { rowCount } = await pool.query(`UPDATE users SET cart = $1 WHERE id = $2`, [jsonb, id]);

    return rowCount > 0;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const setWishlist = async (jwt, wishlist) => {
  try {
    const { id } = verifyToken(jwt);
    // const jsonb = JSON.stringify(wishlist);
    const { rowCount } = await pool.query(`UPDATE users SET wishlist = $1 WHERE id = $2`, [
      wishlist,
      id,
    ]);

    return rowCount > 0;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const setPassword = async (jwt, { password, newPassword }) => {
  try {
    if (!newPassword) return 'New password is required';
    if (newPassword.length < 6) return 'New password must be at least 5 characters';
    if (newPassword === password) return 'New password must be different from current password';

    const { id } = verifyToken(jwt);
    const { rows } = await pool.query(`SELECT password FROM users WHERE id = $1`, [id]);
    // console.log('debug', rows)
    const isPasswordMatch = await compare(password, rows[0].password);
    // if current password is not correct
    if (!isPasswordMatch) return 'Current password is not correct';
    // set new password
    const encryptedNewPassword = await encrypt(newPassword);
    await pool.query('UPDATE users SET password = $2 WHERE id = $1', [id, encryptedNewPassword]);

    return 'success';
  } catch (error) {
    console.log(error);
    // await pool.query('ROLLBACK');
    return 'fail';
  }
};

const setProfile = async (jwt, { username, email }) => {
  try {
    const { id } = verifyToken(jwt);
    await pool.query('BEGIN');
    await pool.query(`UPDATE users SET username = $1 WHERE id = $2`, [username, id]);
    await pool.query(`UPDATE users SET email = $1 WHERE id = $2`, [email, id]);
    await pool.query('COMMIT');

    return { success: true, token: generateToken({ id, email }) };
  } catch (error) {
    console.log(error);
    await pool.query('ROLLBACK');

    return { success: false, token: '' };
  }
};
const removeAccount = async (jwt, { password }) => {
  try {
    const { id, email } = verifyToken(jwt);
    const { success } = await login({ email, password });
    console.log('disini', success)

    if (!success) return false;
    await pool.query('DELETE FROM users WHERE id = $1 AND email = $2', [id, email]);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

export {
  getProducts,
  auth,
  login,
  signup,
  setCart,
  setWishlist,
  setPassword,
  setProfile,
  removeAccount,
};

import express from 'express';
import { join } from 'path';
import {
  getProducts,
  login,
  signup,
  setCart,
  auth,
  setWishlist,
  setPassword,
  setProfile,
  removeAccount,
} from './server/psql.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import cors from 'cors';

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('dist'));

// app.use(
//   cors({
//     origin: true, // Ganti dengan asal klien kamu
//     credentials: true, // Mengizinkan cookie // remove this line
//   }),
// );
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/auth', async (req, res) => {
  const result = await auth(req.cookies.jwt);
  res.json(result);
});
app.post('/api/login', async (req, res) => {
  const { success, token } = await login(req.body);
  if (success) res.cookie('jwt', token, { maxAge: 30 * 24 * 3600000, httpOnly: true, path: '/' });
  res.json(success);
});
app.post('/api/logout', async (_, res) => {
  res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, path: '/' });
  res.json(true);
});
app.post('/api/signup', async (req, res) => {
  const { success, token, msg } = await signup(req.body);
  if (success) res.cookie('jwt', token, { maxAge: 30 * 24 * 3600000, httpOnly: true, path: '/' });
  res.json({ success, msg });
});
app.post('/api/cart', async (req, res) => {
  const result = await setCart(req.cookies.jwt, req.body);
  res.json(result);
});
app.post('/api/wishlist', async (req, res) => {
  const result = await setWishlist(req.cookies.jwt, req.body);
  res.json(result);
});
app.get('/api/products', async (_, res) => {
  const result = await getProducts();
  res.json(result);
});
app.post('/api/setPassword', async (req, res) => {
  const result = await setPassword(req.cookies.jwt, req.body);
  res.json(result);
});
app.post('/api/setProfile', async (req, res) => {
  const { success, token } = await setProfile(req.cookies.jwt, req.body);
  if (success) res.cookie('jwt', token, { maxAge: 30 * 24 * 3600000, httpOnly: true, path: '/' });
  res.json(success);
});
app.post('/api/removeAccount', async (req, res) => {
  const result = await removeAccount(req.cookies.jwt, req.body);
  res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, path: '/' });
  res.json(result);
});

app.get('*', (_, res) => {
  res.sendFile(join(process.cwd(), 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

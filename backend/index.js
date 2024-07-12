import express from 'express';
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
} from './api/psql.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: true, // Ganti dengan asal klien kamu
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/auth', async (req, res) => {
  const result = await auth(req.body.token);
  res.json(result);
});
app.post('/api/login', async (req, res) => {
  const result = await login(req.body);
  res.json(result);
});
app.post('/api/logout', async (_, res) => {
  res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, path: '/' });
  res.json(true);
});
app.post('/api/signup', async (req, res) => {
  const { success, token, msg } = await signup(req.body);
  res.json({ success, token, msg });
});
app.post('/api/cart', async (req, res) => {
  const result = await setCart(req.body.token, req.body.cart);
  res.json(result);
});
app.post('/api/wishlist', async (req, res) => {
  const result = await setWishlist(req.body.token, req.body.wishlist);
  res.json(result);
});
app.get('/api/products', async (_, res) => {
  const result = await getProducts();
  res.json(result);
});
app.post('/api/setPassword', async (req, res) => {
  const result = await setPassword(req.body.token, req.body);
  res.json(result);
});
app.post('/api/setProfile', async (req, res) => {
  const { success, token } = await setProfile(req.body.token, req.body);
  if (success) console.log('requested');
  res.json({ success, token });
});
app.post('/api/removeAccount', async (req, res) => {
  const result = await removeAccount(req.body.token, req.body);
  res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, path: '/' });
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

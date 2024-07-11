import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@ui/App.css';

import Layout from './ui/layout/Layout';
import NotFound from './ui/components/NotFound';
import Home from './routes/Home';
import Login from './routes/login/Login';
import Contact from './routes/contact/Contact';
import About from './routes/about/About';
import Cart from './routes/cart/Cart';
import Wishlist from './routes/wishlist/Wishlist';
import Product from './routes/product/Product';
import Category from './routes/category/Category';
import Account from './routes/account/Account';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/category/:ids" element={<Category />} />
      </Route>
      <Route element={<Layout rightHeader={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>,
  // </React.StrictMode>,
);

const source = 'https://dreylium-ecommerce-api.vercel.app';

const fetchProducts = async (setProducts: ContextProductsD['setProducts']) => {
  const result = await fetch(`${source}/api/products`, {
    method: 'get',
  });
  const { success, data } = await result.json();
  if (success) setProducts([...data]);
  return true;
};

const fetchAuth = async (setClient: ContextClientD['setClient']) => {
  const response = await fetch(`${source}/api/auth`, {
    method: 'POST',
    // credentials: 'include', // Mengirim cookie
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: localStorage.getItem('token') }),
  });
  const { success, data } = await response.json();
  if (success) insertData(setClient, data);
  return true;
};

const insertData = (setClient: ContextClientD['setClient'], data: Client) => {
  if (data)
    setClient((prevState) => ({
      ...prevState,
      login: true,
      username: data.username,
      email: data.email,
      cart: data.cart,
      wishlist: data.wishlist,
    }));
};

const fetchLogin = async (email: string, password: string) => {
  const response = await fetch(`${source}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const { success, token } = await response.json();

  if (success) {
    localStorage.setItem('token', token);
    window.location.href = '/';
    return true;
  }
  return false;
};
const fetchLogout = async () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};
const fetchSignup = async (username: string, email: string, password: string) => {
  const response = await fetch(`${source}/api/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const { success, msg, token } = await response.json();
  if (success) {
    localStorage.setItem('token', token);
    window.location.href = '/';
    return { success, msg };
  }
  return { success, msg };
};

const fetchCart = async (cart: Client['cart']) => {
  const result = await fetch(`${source}/api/cart`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart, token: localStorage.getItem('token') }),
  });
  return await result.json();
};
const fetchWishlist = async (wishlist: Client['wishlist']) => {
  const result = await fetch(`${source}/api/wishlist`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wishlist, token: localStorage.getItem('token') }),
  });
  return await result.json();
};
const fetchSetProfile = async (username: string, email: string) => {
  const result = await fetch(`${source}/api/setProfile`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, token: localStorage.getItem('token') }),
  });
  const { success, token } = await result.json();
  localStorage.setItem('token', token);
  return success;
};
const fetchSetPassword = async (password: string, newPassword: string) => {
  const result = await fetch(`${source}/api/setPassword`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, newPassword, token: localStorage.getItem('token') }),
  });
  return await result.text();
};
const fetchRemoveAccount = async (password: string) => {
  const result = await fetch(`${source}/api/removeAccount`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token: localStorage.getItem('token') }),
  });
  const success = await result.json();
  if (success) window.location.href = '/';
  else alert('remove account failed');
};

export {
  fetchProducts,
  fetchLogin,
  fetchLogout,
  fetchSignup,
  fetchCart,
  fetchAuth,
  fetchWishlist,
  fetchSetPassword,
  fetchSetProfile,
  fetchRemoveAccount,
};

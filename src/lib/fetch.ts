const fetchProducts = async (setProducts: ContextProductsD['setProducts']) => {
  const result = await fetch('/api/products', {
    method: 'get',
  });
  const { success, data } = await result.json();
  if (success) {
    setProducts([...data]);
    return true;
  } else return false;
};

const fetchAuth = async (setClient: ContextClientD['setClient']) => {
  const response = await fetch('/api/auth', {
    method: 'POST',
    credentials: 'include', // Mengirim cookie
  });
  const { success, data } = await response.json();
  if (success) {
    console.log('login successfull', success, data);
    insertData(setClient, data);
    return true;
  } else {
    // alert('login failed');
    return false;
  }
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
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify({ email, password }),
  });

  const success = await response.json();

  if (success) {
    window.location.href = '/';
    return '';
  }
  return 'Email or password is incorrect';
};
const fetchLogout = async () => {
  const response = await fetch('/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
  });

  const success = await response.json();
  if (success) window.location.href = '/login';
  else alert('logout failed');
};
const fetchSignup = async (username: string, email: string, password: string) => {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify({ username, email, password }),
  });

  const result = await response.json();
  if (result.success) {
    window.location.href = '/';
    return '';
  }
  return result;
};

const fetchCart = async (data: Client['cart']) => {
  const result = await fetch('/api/cart', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify(data),
  });
  return await result.json();
};
const fetchWishlist = async (data: Client['wishlist']) => {
  const result = await fetch('/api/wishlist', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify(data),
  });
  return await result.json();
};
const fetchSetProfile = async (username: string, email: string) => {
  const result = await fetch('/api/setProfile', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify({ username, email }),
  });
  return await result.json();
};
const fetchSetPassword = async (password: string, newPassword: string) => {
  const result = await fetch('/api/setPassword', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify({ password, newPassword }),
  });
  return await result.text();
};
const fetchRemoveAccount = async (password: string) => {
  const result = await fetch('/api/removeAccount', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Mengirim cookie
    body: JSON.stringify({ password }),
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

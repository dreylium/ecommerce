const reset = 'DROP TABLE products, users';

const createTableProducts = `
  CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(25) NOT NULL,
  rating NUMERIC(3, 1) NOT NULL,
  ratingCount INT NOT NULL,
  price INT NOT NULL,
  discount SMALLINT NOT NULL,
  stock INT NOT NULL,
  info VARCHAR(255)
);
`;
const createTableUser = `
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(60) NOT NULL,
  cart JSONB DEFAULT '[]',
  wishlist INT[] DEFAULT '{}'
);
`;
export { reset, createTableProducts, createTableUser };

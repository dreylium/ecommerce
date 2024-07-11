import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (data) => {
  return jwt.sign(data, 'heheThisIsEcommerE222', { expiresIn: '30d' });
};
const verifyToken = (token) => {
  return jwt.verify(token, 'heheThisIsEcommerE222');
};
const encrypt = async (password) => {
  return await bcrypt.hash(password, 10);
};
const compare = async (password, encrypted) => {
  return await bcrypt.compare(password, encrypted);
};

export { generateToken, verifyToken, encrypt, compare };

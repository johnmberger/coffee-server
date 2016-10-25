const jwt = require('jwt-simple');
const secret = process.env.SECRET_KEY;

function encodeToken(payload) {
  return jwt.encode(payload, secret);
}

function decodeToken(token) {
  return jwt.decode(token, secret);
}

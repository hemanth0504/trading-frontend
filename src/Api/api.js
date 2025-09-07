import axios from 'axios';

// Reads API base URL from .env, fallback to localhost for dev
const trading_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5454";

const trading = axios.create({
  baseURL: trading_BASE_URL,
});

const token = localStorage.getItem('jwt');
if (token) {
  trading.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

trading.defaults.headers.post['Content-Type'] = 'application/json';

export default trading;

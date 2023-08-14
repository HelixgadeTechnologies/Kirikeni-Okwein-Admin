import axios from 'axios';

// Create a custom Axios instance with your base URL
const instance = axios.create({
  baseURL: 'https://kirikeni-okwein-backend-odjjtw2uh-baazar.vercel.app/api/v1/'
});

export default instance;

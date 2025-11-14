import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menambahkan token secara dinamis
api.interceptors.request.use(
  (config) => {
    // Ambil token dari .env atau localStorage
    const envToken = import.meta.env.VITE_API_TOKEN;
    const userToken = localStorage.getItem("access_token"); // misal nanti login
    const token = userToken || envToken;

    if (token) {
      // Token sudah includes "Bearer" jika dari env, atau dari localStorage setelah login
      if (token.startsWith("Bearer ")) {
        config.headers.Authorization = token;
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (import.meta.env.DEV) {
      console.log("🔐 Token dikirim:", token ? token.slice(0, 25) + "..." : "(tidak ada)");
      console.log("🌐 Base URL:", import.meta.env.VITE_API_BASE_URL);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

import { defineStore } from 'pinia';
import authServices from '~/services/authServices';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('authStore', () => {
  const user = reactive({
    email: '',
    username: '',
    password: '',
    role: '',
    id: '',
  });

  const isAuthenticated = ref(false);

  const getUserInfo = computed(() => {
    return isAuthenticated.value ? user : null;
  });

  const isAdmin = computed(() => {
    return isAuthenticated.value && user.role === 'admin';
  });

  function decodeToken(token: string) {
    if (!token || token.split('.').length !== 3) return null;

    const payload = token?.split('.')[1];
    if (!payload) return null;

    const decoded = JSON.parse(atob(payload));
    return {
      email: decoded.email,
      username: decoded.username,
      role: decoded.role,
      id: decoded.id,
    };
  }

  function initialize() {
    try {
      const token = Cookies.get('token');
      if (token) {
        const userData = decodeToken(token);
        if (userData) {
          Object.assign(user, userData);
          isAuthenticated.value = true;
        } else {
          clearAuthData();
        }
      } else {
        clearAuthData();
      }
    } catch (err) {
      console.log('Error decoding token', err);
      clearAuthData();
    }
  }

  async function register(userData: {
    email: string;
    username: string;
    password: string;
  }) {
    try {
      await authServices.register(userData);
      console.log('User registered successfully'); // Replace with your desired success message
    } catch (err) {
      return {
        success: false,
        message: err,
      };
    }
  }

  async function login(formObj: { username: string; password: string }) {
    try {
      const { token, user: userData } = await authServices.login(formObj);
      Object.assign(user, userData);
      isAuthenticated.value = true;

      Cookies.set('token', token, { expires: 7 });
      console.log('User logged in successfully'); // Replace with your desired success message
    } catch (err) {
      return {
        success: false,
        message: err,
      };
    }
  }

  function clearAuthData() {
    Object.assign(user, {
      email: '',
      username: '',
      password: '',
      role: '',
      id: '',
    });
    isAuthenticated.value = false;
    Cookies.remove('token');
  }

  function logout() {
    clearAuthData();
    console.log('User logged out successfully'); // Replace with your desired success message
  }

  return {
    user,
    isAuthenticated,
    getUserInfo,
    isAdmin,
    initialize,
    register,
    login,
    logout,
  };
});

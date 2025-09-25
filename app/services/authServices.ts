export default {
  async login(userData: { username: string; password: string }) {
    try {
      const $api = useNuxtApp().$api;
      const response = await $api.post('/login', {
        username: userData.username,
        password: userData.password,
      });
      if (response.data) {
        console.log(response.data);
        return response.data;
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.log('Error Fetching data', error);
      throw error;
    }
  },

  async register(userData: {
    email: string;
    username: string;
    password: string;
  }) {
    try {
      const $api = useNuxtApp().$api;
      const response = await $api.post('/register', {
        email: userData.email,
        username: userData.username,
        password: userData.password,
      });
      if (response.data) {
        console.log(response.data);
        return response.data;
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.log('Error Fetching data', error);
      throw error;
    }
  },
};

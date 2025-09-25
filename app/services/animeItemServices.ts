export default {
  async getAnimeItems() {
    try {
      const $api = useNuxtApp().$api;
      const response = await $api.get('/animes');
      if (response.data) {
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

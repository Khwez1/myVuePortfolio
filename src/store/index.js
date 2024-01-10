import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: 
  {
    resumeData: {},
  },
  getters: 
  {
    currentYear: () => {
      return new Date().getFullYear();
    },
    getResumeData: state => state.resumeData,
  },
  mutations: 
  {
    setResumeData(state, data) {
      state.resumeData = data;
    },
  },
  actions: 
  {
    async fetchResumeData({ commit }) {
      try {
        const response = await axios.get('/public/index.json');
        commit('setResumeData', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  modules: 
  {
    
  }
})

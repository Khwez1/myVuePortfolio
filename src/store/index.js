import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: 
  {
    resumeData: [],
    testimonialData: null,
  },
  getters: 
  {
    currentYear: () => {
      return new Date().getFullYear();
    },
    getResumeData: state => state.resumeData,
    getTestimonialData: state => state.testimonialData
  },
  mutations: 
  {
    setResumeData(state, data) {
      state.resumeData = data;
    },
    setTestimonialData(state, data){
      state.testimonialData = data
    }
  },
  actions: 
  {
    async fetchResumeData({ commit })
    {
      try {
        const response = await axios.get('index.json');
        commit('setResumeData', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchTestimonialData({commit})
    {
      try {
        const response = await axios.get('index.json');
        commit('setTestimonialData',response.data.Testimonial);
        console.log(response.data.Testimonial);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
  },
  modules: 
  {

  }
})

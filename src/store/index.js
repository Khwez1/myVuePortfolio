import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: 
  {
    resumeData: [],
    resumeData2: [],
    testimonialData: null,
  },
  getters: 
  {
    currentYear: () => {
      return new Date().getFullYear();
    },
    getResumeData: state => state.resumeData,
    getResume2Data: state => state.resumeData2,
    getTestimonialData: state => state.testimonialData
  },
  mutations: 
  {
    setResumeData(state, data) {
      state.resumeData = data;
    },
    setResume2Data(state, data) {
      state.resumeData2 = data;
    },
    setTestimonialData(state, data) {
      state.testimonialData = data
    }
  },
  actions: 
  {
    async fetchResumeData({ commit })
    {
      try {
        const response = await axios.get('index.json');
        commit('setResumeData', response.data.Resume);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchResume2Data({ commit })
    {
      try {
        const response = await axios.get('index.json');
        commit('setResume2Data', response.data.Resume2);
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

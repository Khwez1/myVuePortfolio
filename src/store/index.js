import { createStore } from 'vuex'
import axios from 'axios';
const dataAPI = 'https://khwez1.github.io/vueData/';

export default createStore({
  state: 
  {
    resumeData: [],
    resumeData2: [],
    testimonialData: null,
    projectData: [],
    projectData2: [],
  },
  getters: 
  {
    currentYear: () => {
      return new Date().getFullYear();
    },
    getResumeData: state => state.resumeData,
    getResume2Data: state => state.resumeData2,
    getTestimonialData: state => state.testimonialData,
    getProjectData: state => state.projectData,
    getProjectData2: state => state.projectData2
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
    },
    setProjectData(state, data) {
      state.projectData = data
    },
    setProjectData2(state, data) {
      state.projectData2 = data
    }
  },
  actions: 
  {
    async fetchResumeData({ commit })
    {
      try {
        const response = await axios.get(dataAPI);
        commit('setResumeData', response.data.Resume);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchResume2Data({ commit })
    {
      try {
        const response = await axios.get(dataAPI);
        commit('setResume2Data', response.data.Resume2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchTestimonialData({commit})
    {
      try {
        const response = await axios.get(dataAPI);
        commit('setTestimonialData', response.data.Testimonial);
        console.log(response.data.Testimonial);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    },
    async fetchProjectData({commit})
    {
      try{
        const response = await axios.get(dataAPI);
        commit('setProjectData', response.data.Project);
      }catch(error){
        console.log('Error fetching data:', error);
      }
    },
    async fetchProjectData2({commit})
    {
      try{
        const response = await axios.get(dataAPI);
        commit('setProjectData2', response.data.Project2);
      }catch(error){
        console.log('Error fetching data:', error);
      }
    }
  },
  modules: 
  {

  }
})

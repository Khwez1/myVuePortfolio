import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: 
  {
    resumeData: [],
    resumeData2: [],
    testimonialData: null,
    projectData: [],
    project2Data: []
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
    getProject2Data: state => state.project2Data
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
    setProject2Data(state, data) {
      state.project2Data = data
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
        commit('setTestimonialData', response.data.Testimonial);
        console.log(response.data.Testimonial);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    },
    async fetchProjectData({commit})
    {
      try{
        const response = await axios.get('index.json');
        commit('setProjectData', response.data.Project);
      }catch(error){
        console.log('Error fetching data:', error);
      }
    },
    async fetchProject2Data({commit})
    {
      try{
        const response = await axios.get('index.json');
        commit('setProject2Data', response.data.Project2);
      }catch(error){
        console.log('Error fetching data:', error);
      }
    }
  },
  modules: 
  {

  }
})

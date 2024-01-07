import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import ContactView from '../views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: TestimonialView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

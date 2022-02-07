import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paper from '../views/paper.vue'
import Submission from '../views/submission.vue'
import Workshop from '../views/workshop.vue'
import committee from '../views/committee.vue'
import speaker from '../views/KeynoteSpeakers.vue'
import publication from '../views/publication.vue'
import contact from '../views/contact.vue'
import organizer from '../views/organizer.vue'
import agenda from '../views/Agenda.vue'
import venue from '../views/venue.vue'
import workshops from '../views/workshops.vue'
import Download from '../views/download.vue'
import Registration from '../views/Registration.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/paper',
    name: 'Paper',
    component: Paper
  },
  {
    path: '/submission',
    name: 'submission',
    component: Submission
  },
  {
    path: '/Workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/committee',
    name: 'committee',
    component: committee
  },
  {
    path: '/speaker',
    name: 'speaker',
    component: speaker
  },
  {
    path: '/publication',
    name: 'publication',
    component: publication
  }, 
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/organizer',
    name: 'organizer',
    component: organizer
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: agenda
  },
  {
    path: '/venue',
    name: 'venue',
    component: venue
  },
  {
    path: '/workshops',
    name: 'workshops',
    component: workshops
  },
  {
    path: '/Download',
    name: 'Download',
    component: Download
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
]

const router = new VueRouter({
  routes
})

export default router

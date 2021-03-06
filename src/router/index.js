import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Team from '../components/Team'
import Upload from '../components/Upload'
import Course from '../components/Course'
import Login from '../components/Auth'
import User from '../components/User'
import Post from '../components/Post'
import PageNotFound from '../components/404'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/post', name: 'Post', component: Post },
    { path: '/team', name: 'Team', component: Team },
    { path: '/upload', name: 'Upload', component: Upload },
    { path: '/course', name: 'Course', component: Course },
    { path: '/auth', name: 'Login', component: Login },
    { path: '/user', name: 'User', component: User },
    { path: `*`, component: PageNotFound }
  ]
})

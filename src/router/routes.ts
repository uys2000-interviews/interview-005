import { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/frontend',
    name: 'frontend',
    component: () => import("@/views/FrontendView.vue")
  },
  {
    path: '/backend',
    name: 'backend',
    component: () => import("@/views/BackendView.vue")
  },
  {
    path: '/backenddocs',
    name: 'backenddocs',
    component: () => import("@/views/BackendDocsView.vue")
  },
  {
    path: '/backenddocstest',
    name: 'backenddocstest',
    component: () => import("@/views/BackendDocsTestView.vue")
  },
  {
    path: '/research',
    name: 'research',
    component: () => import("@/views/ResearchView.vue")
  }
]
export default routes
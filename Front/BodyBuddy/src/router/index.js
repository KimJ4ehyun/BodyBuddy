import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import JoinView from '@/views/JoinView.vue'

import RoutineBoardView from '@/views/RoutineBoardView.vue'
import BoardList from '@/components/routineBoard/BoardList.vue'
import BoardDetail from '@/components/routineBoard/BoardDetail.vue'

import MyPageView from '@/views/MyPageView.vue'
import myRoutine from '@/components/myPage/myRoutine.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },

    // ----예림 추가------
    {
      path: '/board',
      name: 'routineBoard',
      component: RoutineBoardView,
      children: [
        {
          path: '',
          name: 'routineList',
          component: BoardList
        },
        {
          path: ':routineId',
          name: 'boardDetail',
          component: BoardDetail
        }
      ]
    },
    {
      path: '/mypage',
      name: 'myPage',
      component: MyPageView,
      children: [
        {
          path: '',
          name: 'myRoutineList',
          component: myRoutine
        }
      ]
    }
  ]
})

export default router

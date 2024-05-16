import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import JoinView from '@/views/JoinView.vue'
import PopupNickname from '@/components/popup/PopupNickname.vue'
import PopupUserId from '@/components/popup/PopupUserId.vue'

import RoutineBoardView from '@/views/RoutineBoardView.vue'
import BoardList from '@/components/routineBoard/BoardList.vue'
import BoardDetail from '@/components/routineBoard/BoardDetail.vue'

import MyPageView from '@/views/MyPageView.vue'
import myRoutine from '@/components/myPage/myRoutine.vue'
import MyRoutineDetail from '@/components/myPage/MyRoutineDetail.vue'
import LikeList from '@/components/myPage/LikeList.vue'

import ReviewList from '@/components/review/ReviewDetail.vue'

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
      component: JoinView,
    },
    {
      path: '/PopupNickname',
      name: 'PopupNickname',
      component: PopupNickname
    },
    {
      path: '/PopupUserId',
      name: 'PopupUserId',
      component: PopupUserId
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
        },
      ]
    },
    {
      path: '/mypage',
      name: 'myPage',
      component: MyPageView,
      children: [
        {
          path: '/my-routine',
          name: 'myRoutineList',
          component: myRoutine,
          children: [
            {
              path: ':routineId',
              name: 'myRoutine',
              component: MyRoutineDetail
            }
          ]
        },
        {
          path: 'like',
          name: 'like',
          component: LikeList,
        }
      ]
    }
  ]
})

export default router

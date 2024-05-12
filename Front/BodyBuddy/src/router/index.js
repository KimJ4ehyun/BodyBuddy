import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import JoinView from '@/views/JoinView.vue'
import RoutineBoardView from '@/views/RoutineBoardView.vue'
import BoardList from '@/components/routineBoard/BoardList.vue'
import PopupNickname from '@/components/popup/PopupNickname.vue'
import PopupUserId from '@/components/popup/PopupUserId.vue'

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
      ]
    }
  ]
})

// // Navigation Guards를 사용하여 특정 경로에서 헤더와 푸터를 숨김
// router.beforeEach((to, from, next) => {
//   const hideHeaderFooterRoutes = ['/PopupNicknameView', '/PopupUserIdView']; // 헤더와 푸터를 숨길 경로
//   if (hideHeaderFooterRoutes.includes(to.path)) {
//     store.dispatch('hideHeaderFooter'); // Vuex를 사용하여 상태 변경
//   } else {
//     store.dispatch('showHeaderFooter'); // Vuex를 사용하여 상태 변경
//   }
//   next();
// });


export default router

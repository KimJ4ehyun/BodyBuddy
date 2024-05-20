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
  import MyRoutineRegist from '@/components/myPage/MyRoutineRegist.vue'
  import UserInfoEdit from '@/components/myPage/UserInfoEdit.vue'

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
        // myPage 관련된 것만 로그인이 필요하게 했음
        meta: { requiresAuth: true },
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
              },
            ]
          },
          {
            path: 'regist',
            name: 'myRoutineRegist',
            component: MyRoutineRegist
          },
          {
            path: 'like',
            name: 'like',
            component: LikeList,
          },
          {
            path: '/users/edit',
            name: 'userInfoEdit',
            component: UserInfoEdit,
          },
        ]
      },
      // 홈페이지에 없는 경로에 접근할 시에 로그인 페이지로 이동
      {
        path: '/:catchAll(.*)',
        redirect: '/login',
      }
    ]
  })

  // Front단 Interceptor 처리
  // sessionStorage에 id, nickname이 없으면 로그인 안된 것으로 처리
  // myPage 밑에 것들만 처리
  router.beforeEach((to, from, next) => {
    const loggedIn = sessionStorage.getItem('userId') && sessionStorage.getItem('nickname'); 

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
  });

  export default router

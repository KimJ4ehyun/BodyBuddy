<template>

    <!-- ======예림 수정 (css)======== -->
    <div id="headerBox">
        <header>
            <div id="logo">
                로고
            </div>
            <div id="nav">
                <RouterLink :to="{ name: 'home'}">Home</RouterLink> |
                <RouterLink :to="{ name: 'routineList'}">루틴게시판</RouterLink>
            </div>
            <div id="user">
                <RouterLink :to="{ name: 'myRoutineList' }">😃</RouterLink> | 
                <!-- 재현 수정 
                    로그인 상태에서 로그아웃, 마이페이지
                    로그아웃 상태에서 로그인, 회원가입이 보이게 함 -->
                <RouterLink v-if="!isLoginFlag" :to="{ name: 'login' }">Login</RouterLink>
                <a v-else id="logoutBtn" @click="logout">Logout</a> |
                <RouterLink v-if="!isLoginFlag" :to="{ name: 'join' }">Sign Up</RouterLink>
                <!-- 재현 수정 MyPage 아이콘 -->
                <RouterLink v-else :to="{ name: 'myPage'}"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </RouterLink>
            </div>
        </header>
    </div>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useUserStore } from '@/stores/user'
  import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

  let isLoginFlag = ref(false)
  const isLogin = function(){
    const nickname = sessionStorage.getItem("nickname")
    const userId = sessionStorage.getItem("userId")
    if(userId && nickname) isLoginFlag.value = true
    else isLoginFlag.value = false
  }

  const logout = function(){
    isLoginFlag.value = false
    store.logout()
  }

// 라우트 업데이트 전에 실행될 콜백 함수 등록
router.beforeEach((to, from, next) => {
    isLogin()
    next()
})

onMounted(() => {
    isLogin()
})
  </script>
  
  <style scoped>

  

        /* ========= 예림 수정 ========== */
        #headerBox {
            width: 100%;
            height: 50px;
            border: 1px solid lightgray;
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
        }
        header {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        header #logo {
            margin-left: 10px;
        }
        header #nav {
            text-align: center;
            margin: 0 auto;
        }
        header #user {
            margin-right: 10px;
        }
        /* ========= 재현 수정 ========== */
        a {
            text-decoration-line: none;
            color: black;
            cursor: pointer;    
        }

  </style>
  
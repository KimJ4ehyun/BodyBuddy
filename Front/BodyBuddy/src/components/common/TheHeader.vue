<template>

    <!-- ======예림 수정 (css)======== -->
    <div id="headerBox">
        <header>
            <div id="logo">
                로고
            </div>
            <div id="nav">
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink :to="{ name: 'routineList'}">루틴게시판</RouterLink>
            </div>
            <div id="user">
                <RouterLink :to="{ name: 'myRoutineList' }">😃</RouterLink> | 
                <RouterLink v-if="!isLoginFlag" :to="{ name: 'login' }">로그인</RouterLink>
                <span v-else @click="logout">로그아웃</span> |
                <RouterLink :to="{ name: 'join' }">회원가입</RouterLink>
            </div>
        </header>
    </div>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useUserStore } from '@/stores/user'
  const store = useUserStore()
  let isLoginFlag = ref(false)
  const isLogin = function(){
    const nickname = sessionStorage.getItem("nickname")
    const userId = sessionStorage.getItem("userId")
    if(userId && nickname) isLoginFlag.value = true
  }

  const logout = function(){
    isLoginFlag.value = false
    store.logout()
  }
  
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

  </style>
  
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useMyPageStore } from '@/stores/myPage'
import axios from 'axios'
import router from '@/router'

axios.defaults.withCredentials = true;
const REST_USER_API = `http://localhost:8080/users`

export const useUserStore = defineStore('user', () => {
  
  const joinInfo = reactive({
    nickname: '',
    userId: '',
  })

  const loginInfo = reactive({
    nickname: '',
    userId: '',
  })

  
  
  const join = function (user) {
    axios({
      url: `${REST_USER_API}/join`,
      method: 'POST',
      data: user
    })
    .then(() => {
      alert("회원가입 성공");
      router.push({name: 'login'})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const login = (async (user) => {
    await axios({
      url: `${REST_USER_API}/login`,
      method: 'POST',
      data: user
    })
    .then((response) => {
      sessionStorage.setItem('userId', response.data.userId)
      sessionStorage.setItem('nickname', response.data.nickname)
      
      loginInfo.userId = response.data.userId;
      loginInfo.nickname = response.data.nickname;

      const myPageStore = useMyPageStore();
      myPageStore.myRoutineList = myPageStore.getMyRoutines()
      // myPageStore.myRoutine = myPageStore.getMyRoutine()

      alert("로그인 성공");
      router.push({name: 'home'})
    })
    .catch((error) => {
      console.log(error)
      alert("아이디 또는 비밀번호가 일치하지 않습니다");
    })
  })

  const logout = (async () => {
    await axios({
      url: `${REST_USER_API}/logout`,
      method: 'POST'
    })
    .then(() => {
      sessionStorage.removeItem("nickname");
      sessionStorage.removeItem("userId");

      loginInfo.userId = ''
      loginInfo.nickname = ''

      const myPageStore = useMyPageStore();
      myPageStore.myRoutineList = {};
      myPageStore.myRoutine = []

      alert("로그아웃 성공");
      router.push({name: 'home'})
    })
    .catch(() => {
      router.push({name: 'home'})
    })
  })

  const checkDuplicateUserId = function(userId){
    return axios({
      url: `${REST_USER_API}/check-duplicate-id`,
      method: 'POST',
      params: {userId: userId}
    })
    .then((response) => {
      return response.data
      
    })
    .catch(() => {})
  }

  const checkDuplicateNickname = function(nickname){
    return axios({
      url: `${REST_USER_API}/check-duplicate-nickname`,
      method: 'POST',
      params: {nickname: nickname}
    })
    .then((response) => {
      return response.data
    })
    .catch(() => {})
  }

  const storeNickname = function(nickname){
    joinInfo.nickname = nickname
  }

  const storeUserId = function(userId){
    joinInfo.userId = userId
  }

  return { 
    joinInfo,
    loginInfo,
    join, 
    login, 
    logout,
    checkDuplicateUserId, 
    checkDuplicateNickname,
    storeNickname,
    storeUserId,
  }
},
{
  persist: true
}
)

import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_USER_API = `http://localhost:8080/users`

export const useUserStore = defineStore('user', () => {
  
  const state = reactive({
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

  const loginId = ref('')
  const login = function (user) {
    axios({
      url: `${REST_USER_API}/login`,
      method: 'POST',
      data: user
    })
    .then(() => {
      alert("로그인 성공");
      loginId.value = user.userId;
      router.push({name: 'home'})
    })
    .catch(() => {
      alert("아이디 또는 비밀번호가 일치하지 않습니다");
    })
  }

  const checkDuplicateUserId = function(userId){
    return axios({
      url: `${REST_USER_API}/check-duplicate-id`,
      method: 'POST',
      params: {userId: userId}
    })
    .then((response) => {
      return response.data
      
    })
    .catch((response) => {
      return response.data
    })
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
    .catch((response) => {
      return response.data
    })
  }

  const storeNickname = function(nickname){
    state.nickname = nickname
  }

  const storeUserId = function(userId){
    state.userId = userId
  }

  return { 
    state,
    join, 
    login, 
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

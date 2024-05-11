import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_USER_API = `http://localhost:8080/users`

export const useUserStore = defineStore('user', () => {
  
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

  const login = function (user) {
    axios({
      url: `${REST_USER_API}/login`,
      method: 'POST',
      data: user
    })
    .then(() => {
      router.push({name: 'home'})
      console.log("로그인 성공")
    })
  }

  const checkDuplicateUserId = function(userId){
    axios({
      url: `${REST_USER_API}/check-duplicate-id`,
      method: 'POST',
      params: {userId: userId}
    })
    .then((response) => {
      console.log(response.data)
      return response.data
      
    })
    .catch((response) => {
      console.log(response.data)
      return response.data
    })
  }

  const checkDuplicateNickname = function(nickname){
    axios({
      url: `${REST_USER_API}/check-duplicate-nickname`,
      method: 'POST',
      params: {nickname: nickname}
    })
    .then((response) => {
      console.log(response.data)
      return response.data
      
    })
    .catch((response) => {
      console.log(response.data)
      return response.data
    })
  }

  return { 
    join, 
    login, 
    checkDuplicateUserId, 
    checkDuplicateNickname, 
  }
})

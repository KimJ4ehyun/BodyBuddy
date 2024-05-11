<template>
    <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink :to="{ name: 'login' }">로그인</RouterLink> |
        <RouterLink :to="{ name: 'join' }">회원가입</RouterLink> 
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>
  
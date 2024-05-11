<template>
  <div class="container">
    <h4>로그인</h4>
      <div>
        <label for="userId">ID</label>
        <br>
        <input type="text" id="userId" v-model="user.userId" placeholder="특수문자 제외 2~8자">
      </div>
      <br>
      <div>
        <label for="password">Password</label>
        <br>
        <input type="text" id="password" v-model="user.password" placeholder="특수문자 제외 2~8자">
      </div>
      <br>
      <div>
        <button @click="login">로그인</button>
      </div>
      <br>
      <div>
        <RouterLink :to="{ name: 'join' }">회원가입</RouterLink>
      </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/user';
  import { ref } from 'vue';

  const store = useUserStore()

  const user = ref({
    userId: '',
    password: ''
  })

  const login = function () {
    store.login(user.value)
  }
</script>

<style scoped>
.container{
  text-align: center;
}

input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
  }

label {
  display: inline-block;
  text-align: center;
}
</style>

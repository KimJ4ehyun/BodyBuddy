<template>
  <div class="loginContainer">
    <h4>로그인</h4>
      <br>
      <div class="form-floating mb-3">
        <input type="text" id="userId" class="form-control" v-model="user.userId">
        <label for="userId">ID</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" id="password" class="form-control" v-model="user.password" @keyup.enter="login">
        <label for="password">Password</label>
      </div>
      <br>
      <div>
        <button type="button" @click="login">로그인</button>
      </div>
      <br>
      <div>
        <p style="color: #9F9F9F">아직 회원이 아닌가요?</p>
        <RouterLink :to="{ name: 'join' }" class="router-link-button">회원가입</RouterLink>
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
.loginContainer {
  text-align: center;
  border-radius: 10px; /* 모서리를 둥글게 만듭니다. */
  padding: 20px; /* 내부 여백을 추가하여 내용이 모서리에 가깝게 표시되지 않도록 합니다. */
  border: 1px solid #7FABB2; /* 테두리를 생성하고 색상을 지정합니다. */
  margin: 50px auto;
  width: 50%;
} 



button, .router-link-button {
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #7FABB2;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: auto; /* 버튼의 가로 너비를 자동으로 설정하여 내용에 따라 크기가 조절되도록 함 */
}

button:hover, .router-link-button:hover{
  background-color: #A9DDDE; /* 마우스 호버 시 배경색 변경 */
}

.router-link-button{
  margin-top: 0;
}
.loginContainer div p {
  margin-bottom: 5px;
}
</style>

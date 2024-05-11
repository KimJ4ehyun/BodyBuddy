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
        <p style="color: #7FABB2">아직 회원이 아닌가요?</p>
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
.container {
  text-align: center;
  border-radius: 10px; /* 모서리를 둥글게 만듭니다. */
  padding: 20px; /* 내부 여백을 추가하여 내용이 모서리에 가깝게 표시되지 않도록 합니다. */
  border: 1px solid #7FABB2; /* 테두리를 생성하고 색상을 지정합니다. */
  margin: 50px 100px 50px;
}

input {
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #9f9f9f; /* 테두리를 1픽셀 실선으로 지정하고 회색(#9f9f9f)으로 색상을 설정합니다. */
}

label {
  display: inline-block;
  text-align: center;
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
</style>

<template>
    <div class="container">
        <h4>회원가입</h4>
        <div>
            <label for="name">name</label>
            <br>
            <input type="text" id="name" v-model="user.name" placeholder="이름">
        </div>
        <br>
        <div>
            <label for="userId">ID</label>
            <br>
            <input type="text" id="userId" v-model="user.userId" placeholder="알파벳 소문자, 숫자 6~12자">
            <button @click="checkDuplicateUserId">중복 확인</button>
        </div>
        <br>
        <div class="nickname-container">
            <label for="nickname">닉네임</label>
            <br>
            <input type="text" id="nickname" @blur="nicknameValid(user.nickname)" v-model="user.nickname" placeholder="특수문자 제외 2~8자">
            <button @click="checkDuplicateNickname">중복확인</button>
        </div>
        <div v-if="nicknameFlag === 0">
          <small class="color-red">닉네임을 입력해주세요.</small>
        </div>
        <div v-else-if="nicknameFlag === 1">
          <small class="color-red">이미 사용 중인 닉네임입니다.</small>
         </div>
        <div v-else-if="nicknameFlag === 2">
          <small class="color-red">닉네임 형식이 맞지 않습니다.</small>
        </div>
        <div v-else-if="nicknameFlag === 3">
         <small class="color-green">사용 가능한 닉네임입니다.</small>
        </div>
        <br>
        <div>
            <label for="password">Password</label>
            <br>
            <input type="password" id="password" v-model="user.password" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
        </div>
        <br>
        <div>
            <label for="passwordCheck">Password Check</label>
            <br>
            <input type="password" id="passwordCheck" v-model="user.passwordCheck" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
        </div>
        <br>
        <div>
            <label for="email">Email address</label>
            <br>
            <input type="text" id="email" v-model="user.email" placeholder="Abc@def.com">
        </div>
        <br>
        <div>
            <button @click="join">가입하기</button>
        </div>           
    </div>  
</template>
  
<script setup>
  import { useUserStore } from '@/stores/user';
  import { ref } from 'vue';

  const store = useUserStore()


  const user = ref({
    name: '',
    userId: '',
    nickname: '',
    password: '',
    email: '',
  })

  const join = function () {
    store.join(user.value)
  }

  let nicknameFlag = 0
  const nicknameValid = function(nickname){
    if (store.checkDuplicateNickname(nickname)){
        nicknameFlag = 1
    }
    else if (/^[가-힣a-zA-Z0-9]{2,8}$/.test(nickname)) {
        nicknameFlag = 3
    } 
    else {
        nicknameFlag = 2
    }
  }
  
</script>
  
<style scoped>
  .container {
    text-align: center;
  }

  input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
  }

</style>
  
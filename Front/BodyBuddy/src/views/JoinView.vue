<template>
  <div class="container">
    <h4>회원가입</h4>
      <div class="item">
        <div>
          <label for="name">name</label>
          <br>
          <input type="text" id="name" @input="nameValid(user.name)" v-model="user.name" placeholder="이름">
        </div>
      <div v-if="nameFlag === 0">
          <span>&nbsp;</span>
        </div>
        <div v-else-if="nameFlag === 1">
          <small class="color-green">사용 가능한 이름입니다.</small>
        </div>
        <div v-else-if="nameFlag === 2">
         <small class="color-red">이름을 입력해주세요.</small>
        </div>
      </div>
      <div class="item">
       <div>
          <label for="userId">ID</label>
          <br>
          <input type="text" id="userId" @input="userIdValid(user.userId)" v-model="user.userId" placeholder="알파벳 소문자, 숫자 6~12자">
          <button @click="openPopupUserId" id="duplicateBtn">중복 확인</button>
        </div>
      <div v-if="userIdFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="userIdFlag === 1">
        <small class="color-green">사용 가능한 아이디입니다.</small>
      </div>
      <div v-else-if="userIdFlag === 2">
        <small class="color-red">닉네임을 입력해주세요.</small>
      </div>
      <div v-else-if="userIdFlag === 3">
       <small class="color-red">아이디는 알파벳 소문자, 숫자 6~12자로 입력해주세요.</small>
      </div>
      <div v-else-if="userIdFlag === 4">
       <small class="color-red">이미 사용 중인 아이디입니다.</small>
      </div>
    </div>
    <div class="item">
      <div>
          <label for="nickname">Nickname</label>
          <br>
          <input type="text" id="nickname" @input="nicknameValid(user.nickname)" v-model="user.nickname" placeholder="특수문자 제외 2~8자">
          <button @click="openPopupNickname" id="duplicateBtn">중복 확인</button>
      </div>
      <div v-if="nicknameFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="nicknameFlag === 1">
        <small class="color-green">사용 가능한 닉네임입니다.</small>
      </div>
      <div v-else-if="nicknameFlag === 2">
        <small class="color-red">닉네임을 입력해주세요.</small>
      </div>
      <div v-else-if="nicknameFlag === 3">
       <small class="color-red">닉네임은 특수문자 제외 2~8자로 입력해주세요.</small>
      </div>
      <div v-else-if="nicknameFlag === 4">
       <small class="color-red">이미 사용 중인 닉네임입니다.</small>
      </div>
    </div>
    <div class="item">
      <div>
          <label for="password">Password</label>
          <br>
          <input type="password" id="password" @input="passwordValid(user.password, user.passwordCheck)" v-model="user.password" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
      </div>
      <div v-if="passwordFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="passwordFlag === 1">
        <small class="color-green">사용 가능한 비밀번호입니다.</small>
      </div>
      <div v-else-if="passwordFlag === 2">
        <small class="color-red">비밀번호를 입력해주세요.</small>
      </div>
      <div v-else-if="passwordFlag === 3">
       <small class="color-red">비밀번호는 알파벳 대소문자, 숫자, 특수문자를 8~16자로 입력해주세요.</small>
      </div>
    </div>
    <div class="item">
      <div>
          <label for="passwordCheck">Password Check</label>
          <br>
          <input type="password" id="passwordCheck" @input="passwordValid(user.password, user.passwordCheck)" v-model="user.passwordCheck" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
      </div>
      <div v-if="passwordCheckFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="passwordCheckFlag === 1">
        <small class="color-green">비밀번호와 일치합니다.</small>
      </div>
      <div v-else-if="passwordCheckFlag === 2">
       <small class="color-red">비밀번호를 입력해주세요.</small>
      </div>
      <div v-else-if="passwordCheckFlag === 3">
        <small class="color-red">비밀번호가 일치하지 않습니다.</small>
      </div>
    </div>
    <div class="item">
      <div>
          <label for="email">Email address</label>
          <br>
          <input type="text" id="email" @input="emailValid(user.email)" v-model="user.email" placeholder="Abc@def.com">
      </div>
      <div v-if="emailFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="emailFlag === 1">
        <small class="color-green">사용 가능한 이메일입니다다.</small>
      </div>
      <div v-else-if="emailFlag === 2">
       <small class="color-red">이메일을 입력해주세요.</small>
      </div>
      <div v-else-if="emailFlag === 3">
        <small class="color-red">올바르지 않은 이메일 형식입니다.</small>
      </div>
    </div> 
      <div>
          <button @click="join" :disabled="nameFlag !== 1 || userIdFlag !== 1 || nicknameFlag !== 1 || passwordFlag !== 1 || passwordCheckFlag !== 1 || emailFlag !== 1">가입하기</button>
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

let nameFlag = ref(0)
let userIdFlag = ref(0)
let nicknameFlag = ref(0)
let passwordFlag = ref(0)
let passwordCheckFlag = ref(0)
let emailFlag = ref(0)

const nameValid = function(name){
  if (!name) {
    nameFlag.value = 2
  } 
  else {
    nameFlag.value = 1
  }
}

const userIdValid = function(userId){
  if (store.checkDuplicateUserId(userId)){
    userIdFlag.value = 4
  }
  else if (/^[a-zA-Z0-9]{6,12}$/.test(userId)) {
    userIdFlag.value = 1
  } 
  else if(!userId){
    userIdFlag.value = 2
  }
  else {
    userIdFlag.value = 3
  }
}

const nicknameValid = function(nickname){
  if (store.checkDuplicateNickname(nickname)){
    nicknameFlag.value = 4
  }
  else if (/^[가-힣a-zA-Z0-9]{2,8}$/.test(nickname)) {
    nicknameFlag.value = 1
  } 
  else if(!nickname){
    nicknameFlag.value = 2
  }
  else {
    nicknameFlag.value = 3
  }
}

const passwordValid = function(password, passwordCheck){
  if (/^[a-zA-Za-z0-9!@#$%^&*()._-]{8,16}$/.test(password)){
    passwordFlag.value = 1
  }
  else if(!password){
    passwordFlag.value = 2
  }
  else {
    passwordFlag.value = 3
  }
  
  if (password === passwordCheck){
    passwordCheckFlag.value = 1
  }
  else if(!passwordCheck){
    passwordCheckFlag.value = 2
  }
  else{
    passwordCheckFlag.value = 3
  }
}

const emailValid = function(email){
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    emailFlag.value = 1
  }
  else if(!email){
    emailFlag.value = 2
  }
  else{
    emailFlag.value = 3
  }
}

const openPopupUserId = function() {
  // 팝업 창 크기 및 위치 설정
  const width = 690;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  // 팝업 창 열기
  const popup = window.open('/PopupUserId', '_blank', `width=${width},height=${height},top=${top},left=${left}`);

}

const openPopupNickname = function() {
  // 팝업 창 크기 및 위치 설정
  const width = 600;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  // 팝업 창 열기
  const popup = window.open('/PopupNickname', '_blank', `width=${width},height=${height},top=${top},left=${left}`);

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
  margin-bottom: 10px; /* 입력 요소 간의 간격 조절 */
  border: 1px solid #9f9f9f; 
}

button {
  margin-left: 10px;
  margin-top: 10px; /* 버튼 위쪽 여백 추가 */
  padding: 5px 10px; /* 버튼 내부 여백 추가 */
  border-radius: 5px; /* 버튼 둥글게 만들기 */
  background-color: #7FABB2; /* 버튼 배경색 */
  color: white; /* 버튼 텍스트 색상 */
  border: none; /* 테두리 없애기 */
  cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 상태 표시 */
}

button:disabled {
    cursor: not-allowed; /* 비활성화된 상태일 때 마우스 커서를 금지 표시로 변경 */
}

button:hover {
  background-color: #A9DDDE; /* 마우스 호버 시 배경색 변경 */
}

#duplicateBtn{
  background-color: #A9DDDE;
}

.color-red{
  color: red;
}

.color-green{
  color:green;
}

.color-black{
  color:black;
}

</style>

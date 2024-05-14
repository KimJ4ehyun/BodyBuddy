<template>
  <div class="container">
    <h4>회원가입</h4>
      <div class="item">
        <div class="form-floating mb-3"> 
          <input type="email" id="name" class="form-control" @input="nameValid(user.name)" v-model="user.name" placeholder="이름">
          <label for="name">name</label>
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
        <div class="form-floating mb-3">
          <input type="text" id="userId" class="form-control" v-model="store.joinInfo.userId" placeholder="알파벳 소문자, 숫자 6~12자" disabled>
          <label for="userId">ID</label>
          <button @click="openPopupUserId">중복 확인</button>
        </div>
          <div v-if="store.joinInfo.userId">
          <small class="color-green">사용 가능한 아이디입니다.</small>
        </div>
        <div v-else>
          <span>&nbsp;</span>
        </div>
      </div>
    <div class="item">
      <div class="form-floating mb-3">
        <input type="text" id="nickname" class="form-control" v-model="store.joinInfo.nickname" placeholder="특수문자 제외 2~8자" disabled>
        <label for="nickname">Nickname</label>
        <button @click="openPopupNickname">중복 확인</button>
      </div>
      <div v-if="store.joinInfo.nickname">
        <small class="color-green">사용 가능한 닉네임입니다.</small>
      </div>
      <div v-else>
        <span>&nbsp;</span>
      </div>
    </div>
    <div class="item">
      <div class="form-floating mb-3">
        <input type="password" id="password" class="form-control" @input="passwordValid(user.password, user.passwordCheck)" v-model="user.password" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
        <label for="password">Password</label>
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
      <div class="form-floating mb-3">
        <input type="password" id="passwordCheck" class="form-control" @input="passwordValid(user.password, user.passwordCheck)" v-model="user.passwordCheck" placeholder="알파벳 대소문자, 숫자, 특수문자 8~16자">
        <label for="passwordCheck">Password Check</label>
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
      <div class="form-floating mb-3">
        <input type="text" id="email" class="form-control" @input="emailValid(user.email)" v-model="user.email" placeholder="Abc@def.com">
        <label for="email">Email address</label>
      </div>
      <div v-if="emailFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="emailFlag === 1">
        <small class="color-green">사용 가능한 이메일입니다.</small>
      </div>
      <div v-else-if="emailFlag === 2">
       <small class="color-red">이메일을 입력해주세요.</small>
      </div>
      <div v-else-if="emailFlag === 3">
        <small class="color-red">올바르지 않은 이메일 형식입니다.</small>
      </div>
    </div> 
      <div>
          <button @click="join" :disabled="nameFlag !== 1 || !store.joinInfo.userId || !store.joinInfo.nickname || passwordFlag !== 1 || passwordCheckFlag !== 1 || emailFlag !== 1">가입하기</button>
      </div>          
  </div>  
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { ref, watch } from 'vue';

const store = useUserStore()

const user = ref({
  name: '',
  userId: '',
  nickname: '',
  password: '',
  email: '',
})

// 저장소의 nickname, userId가 변할 시에 해당 값을 user객체의 nickname 또는 userId에 넣어준다
watch(() => store.joinInfo.nickname, (newValue) => {
    user.value.nickname = newValue;
});

watch(() => store.joinInfo.userId, (newValue) => {
    user.value.userId = newValue;
});

// 회원가입 및 회원가입 완료 후에 저장 값을 비운다
const join = function () {
  store.join(user.value)
  store.joinInfo.nickname = ''
  store.joinInfo.userId=''
}

// flag에 따라 출력되는 메시지가 다르게 설정
let nameFlag = ref(0)
let passwordFlag = ref(0)
let passwordCheckFlag = ref(0)
let emailFlag = ref(0)

const nameValid = function(name){
  // !를 사용하여 해당 변수가 null인지 확인
  if (!name) {
    nameFlag.value = 2
  } 
  else {
    nameFlag.value = 1
  }
}

const passwordValid = function(password, passwordCheck){
  // 비밀번호가 정규표현식에 맞는 형태인지 확인
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
  const width = 500;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  // 팝업 창 열기, index.js에서 설정해놓은 Router로 이동
  const popup = window.open('/PopupUserId', '_blank', `width=${width},height=${height},top=${top},left=${left}`);

}

const openPopupNickname = function() {
  // 팝업 창 크기 및 위치 설정
  const width = 500;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  // 팝업 창 열기, index.js에서 설정해놓은 Router로 이동
  const popup = window.open('/PopupNickname', '_blank', `width=${width},height=${height},top=${top},left=${left}`);
  
}

// 저장소(store)가 갱신되었다면 새로고침 없이 현재 페이지의 userId, nickname에 값을 추가하기 위해서 사용
window.addEventListener('message', (event) => {
  if (event.data.type === 'userIdUpdate') {
    store.storeUserId(event.data.userId);
  }

  if (event.data.type === 'nicknameUpdate') {
    store.storeNickname(event.data.nickname);
  }
});

// 페이지를 벗어날 때 저장소에 저장된 값 초기화
window.addEventListener('beforeunload', () => {
  store.joinInfo.nickname = '';
  store.joinInfo.userId = '';
});

// 뒤로가기 버튼을 클릭할 때 저장소에 저장된 값 초기화
window.addEventListener('popstate', () => {
  store.joinInfo.nickname = '';
  store.joinInfo.userId = '';
});

</script>

<style scoped>

h4 {
  margin-top: 30px;
  margin-bottom: 30px;
}
.container {
  text-align: center;
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

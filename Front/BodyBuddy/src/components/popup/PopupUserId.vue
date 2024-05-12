<template>
    <div class="item">
      <div>
        <p>아이디는 알파벳 소문자, 숫자 6~12자로 입력해주세요.</p>
          <label for="userId">ID</label>
          <br>
          <input type="text" id="userId" @input="userIdValid(user.userId)" v-model="user.userId" placeholder="알파벳 소문자, 숫자 6~12자">
          <button @click="store.checkDuplicateUserId(user.userId)" :disabled="userIdFlag !== 1">중복 확인</button>
        </div>
      <div v-if="userIdFlag === 0">
        <span>&nbsp;</span>
      </div>
      <div v-else-if="userIdFlag === 1">
        <small class="color-green">사용 가능한 아이디입니다.</small>
      </div>
      <div v-else-if="userIdFlag === 2">
        <small class="color-red">아이디를 입력해주세요.</small>
      </div>
      <div v-else-if="userIdFlag === 3">
       <small class="color-red">아이디는 알파벳 소문자, 숫자 6~12자로 입력해주세요.</small>
      </div>
      <div v-else-if="userIdFlag === 4">
       <small class="color-red">이미 사용 중인 아이디입니다.</small>
      </div>
    </div>
</template>

<script setup>
 import { useUserStore } from '@/stores/user';
  import { ref } from 'vue';

  const store = useUserStore()

  const user = ref({
    userId: '',
  })

  const userIdFlag = ref(0)
  const userIdValid = function(userId){
  if (/^[a-zA-Z0-9]{6,12}$/.test(userId)) {
    userIdFlag.value = 1
  } 
  else if(!userId){
    userIdFlag.value = 2
  }
  else {
    userIdFlag.value = 3
  }
}

</script>

<style scoped>
  .item {
    text-align: center;
  }
    /* 팝업 내 버튼 스타일 */
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

  input {
    width: 200px;
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
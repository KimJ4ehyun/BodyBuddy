<template>
    <div>               
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
            &nbsp;{{ reviewOne.nickname }}
        </p>
        <p>{{ reviewOne.content }}</p>
        <span class="reviewDate">{{ reviewOne.date }}</span>&nbsp;
        <span>🤍</span>&nbsp;
        <button type="button" id="delBtn" v-if="sameUser(reviewOne.userId)" @click="deleteReview(reviewOne.reviewId, reviewOne.routineId)" class="btn btn-primary btn-sm">삭제</button>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const { reviewOne } = defineProps(['reviewOne']);   

    import { useReviewStore } from '@/stores/review'
    const store = useReviewStore()

    const sameUser = function(userId) {
        const sessionUser = sessionStorage.getItem('userId')
        if(sessionUser === userId) return true
        return false
    }

    const deleteReview = function(reviewId, routineId){
        store.reviewDelete(reviewId, routineId)
            .then(() => {
                // 갱신하기
                store.getReviewList(routineId)
            })
            .catch(error => {
                console.log(error)
            });
    }
    
</script>

<style scoped>
  .reviewDate {
    font-size: 0.8em;
    color: gray;
  }

  p, span {
    margin-bottom: 0.5em;
    font-size: 0.9em;
  }

  #delBtn {
    background-color: #7FABB2; /* 버튼 배경색 */
    color: white; /* 버튼 텍스트 색상 */
    border: none; /* 테두리 없애기 */
    cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 상태 표시 */
    /* width: 40px;   
    height: 20px;   
    font-size: 10px; */
  }

  button:hover {
    background-color: #A9DDDE; /* 마우스 호버 시 배경색 변경 */
  }
</style>
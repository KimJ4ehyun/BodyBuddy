<template>
    <div>
        <br>
        <p>리뷰 목록</p>
        <div class="review-list">
            <div
                v-for="review in store.reviewList"
                :key="review.reviewId"
            >
                <ReviewDetail :review-one="review" @delete-success="handleDeleteSuccess(routineId)"/>
                <span>&nbsp;</span>
            </div>
        </div>
        <span>&nbsp;</span>
        <div class="row">
            <div class="col-md-8">
                <input type="text" id="inputReview" v-model="review.content" class="form-control" placeholder="리뷰를 입력해주세요.">
            </div>
            <div class="col-md-4">
                <button type="button" @click="reviewRegist(review.content)" class="btn btn-primary">등록</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ReviewDetail from '@/components/review/ReviewDetail.vue'
    import { useReviewStore } from '@/stores/review'
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const store = useReviewStore()
    const route = useRoute();
    
    const review = ref({
        routineId: '',
        userId: '',
        nickname: '',
        content: ''
    })

    const reviewRegist = function(content){
        const routineId = route.params.routineId
        if(content) {
            store.reviewRegist(review.value, routineId)
            .then(() => {
                // 리뷰 등록 후에 리뷰 목록을 다시 불러와서 화면 갱신
                store.getReviewList(routineId);
                review.value.content = '';
            })
        }
        else alert('내용을 입력해주세요')
        review.value.content = '';
    }

    onMounted(() => {
        const routineId = route.params.routineId
        store.getReviewList(routineId)
    })


</script>

<style scoped>

.review-list {
  max-height: 400px; /* 원하는 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤바 추가 */
  padding: 10px; /* 선택사항: 패딩 추가 */
}

button {
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

/* 반응형 높이 설정 */
@media (max-width: 1200px) {
  .review-list {
    max-height: 300px;
  }
}

@media (max-width: 992px) {
  .review-list {
    max-height: 250px;
  }
}

@media (max-width: 768px) {
  .review-list {
    max-height: 200px;
  }
}

@media (max-width: 576px) {
  .review-list {
    max-height: 150px;
  }
}
</style>
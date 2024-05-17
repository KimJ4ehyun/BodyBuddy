<template>
    <p class="contents">     
        <span>
            {{ boardOne.routineId }}
        </span>           
        <span class="rTitle">
            <RouterLink :to="`/board/${boardOne.routineId}`">{{ boardOne.routineTitle }}</RouterLink>
        </span>
        <span class="rWriter">{{ boardOne.userId }}</span>
        <span class="rDate">{{ boardOne.date }}</span>
        <span class="rReview"></span>
    </p>
    <span class="heart" @click="checkWish()">
         <!-- 찜 목록에 있으면 파란 하트, 없으면 흰 하트 -->
         <span v-if="isWished">💙</span>
        <span v-else>🤍</span>
    </span>

</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { useUserStore } from '@/stores/user';
    import { useWishStore } from '@/stores/wish';
    import { computed, onMounted } from 'vue';

    const store = useBoardStore()
    const wishStore = useWishStore()
    const userStore = useUserStore()

    const { boardOne } = defineProps({
        boardOne: Object
    })

    // console.log(props)

    // 하트 클릭하면 찜하기 상태 변경
    //  찜한 아이템인지 확인하는 computed 속성
     const isWished = computed(() => {
        return wishStore.wishList.some(item =>
            item.routineId === boardOne.routineId && item.userId === userStore.loginInfo.userId
        );
    });

    // console.log(props.routineId)
    // console.log(isWished)

    // 클릭 이벤트 핸들러
    const checkWish = (() => {
        if (isWished) {
            wishStore.delWish(boardOne.routineId);
        } else {
            wishStore.addWish(boardOne.routineId);
        }
    })
   
    
</script>

<style scoped>
    .contents {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0;
    }

    .contents span {
        margin-bottom: 10px;
    }
    .rTitle {
        font-weight: bold;
        font-size: 1.4em;
    }
    .rDate {
        font-size: 0.9em;
    }
    
    .heart {
        width: 10%;
        font-size: 1.2em;
        text-align: right;
    }
    .heart:hover {
        cursor: pointer;
    }
</style>
<template>
    <div class="likeContainer">
        <!-- <h4>찜 목록</h4> -->
        <div v-if="isLoading">
           
            <div class="likeBox" v-for="wish in wRoutines" :key="wish.wishId">
                <BoardListOne :board-one="wish.boardInfo" />
                <button class="addBtn">내 루틴에 추가</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BoardListOne from '@/components/routineBoard/BoardListOne.vue'
    import { useBoardStore } from '@/stores/board';
    import { useWishStore } from '@/stores/wish';
    import { onMounted, ref, computed } from 'vue'


    const store = useWishStore()
    const boardStore = useBoardStore()

    // console.log(store.wishList)
    // onMounted (() => {
    //     store.getwishList()
    // })

    // onMounted(async () => {
    //     await Promise.all(store.wishList.map(async wish => {
    //         await boardStore.getBoard(wish.routineId);
    //         wish.boardInfo = boardStore.board;  // 각 wish에 board 정보 추가
    //     }));
    // });

    const wRoutines = ref([])
    const isLoading = ref(false);

    // 찜한 루틴 정보를 가져오는 함수
    const isWish = (async () => {
          // boardList를 새로 가져오는 함수 호출
        wRoutines.value = store.wishList.map(wish => {
            const boardInfo = boardStore.boardList.find(board => board.routineId === wish.routineId);
            return {
                ...wish,
                boardInfo: boardInfo  // `boardInfo`를 `wish` 객체에 추가
            };
        }).filter(wish => wish.boardInfo);  // `boardInfo`가 있는 `wish`만 필터링
    });

    onMounted(async () => {
        await boardStore.getBoardList();
        await isWish();  // 초기 데이터 로드
        console.log(wRoutines.value)
        isLoading.value = true;  // 로딩 상태 업데이트
    });


</script>

<style scoped>
    .likeContainer {
        /* border: 1px solid gray; */
        width: 70%;
        margin: 60px auto;
    }

    .likeBox {
        /* border: 1px solid lightblue; */
        width: 70%;
        margin: 20px auto;
        padding: 20px 30px;
        background-color: #F0F6F6;
    }
    
    .likeBox .addBtn {
        width: 110px;
        height: 30px;
        margin-left: 10px;
        border: 1px solid #7FABB2;
        background-color: #7FABB2;
        color: white;
        border-radius: 5px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>
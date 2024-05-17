<template>
    <div class="likeContainer">
        <h4>찜 목록</h4>
        <div class="likeBox" v-for="wish in store.wishList" :key="wish.wishId">
            <!-- <BoardListOne :board-one="wish.boardInfo" /> -->
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

    console.log(store.wishList)
    // onMounted (() => {
    //     store.getwishList()
    // })

    // onMounted(async () => {
    //     await Promise.all(store.wishList.map(async wish => {
    //         await boardStore.getBoard(wish.routineId);
    //         wish.boardInfo = boardStore.board;  // 각 wish에 board 정보 추가
    //     }));
    // });

</script>

<style scoped>
    .likeContainer {
        border: 1px solid gray;
        width: 70%;
        margin: 50px auto;
    }

    .likeBox {
        border: 1px solid lightblue;
        
    }
</style>
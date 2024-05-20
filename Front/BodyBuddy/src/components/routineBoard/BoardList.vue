<template>
    <div>
        <div id="container">
            <div class="boardBox" 
                v-for="(routine, index) in paginatedBoardList"
                :key="routine.routineId"
            >
                <BoardListOne :board-one="routine" />
            </div>
        </div>

        <div class="pagination">
            <button @click="prevPage" :style="{ visibility: (store.currentPage === 0) ? 'hidden' : 'visible' }" class="btn btn-primary">Prev</button>
            <button 
                v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                @click="gotoPage(pageNumber - 1)"
                :class="{ active: store.currentPage === pageNumber - 1 }"
                class="btn btn-primary"
            >
                {{ pageNumber }}
            </button>
            <button @click="nextPage" :style="{ visibility: (store.currentPage === totalPages - 1 || totalPages === 0) ? 'hidden' : 'visible' }" class="btn btn-primary">Next</button>
        </div>
    </div>
</template>

<script setup>
    import BoardListOne from '@/components/routineBoard/BoardListOne.vue'
    import { useBoardStore } from '@/stores/board'
    import { onMounted, ref, computed } from 'vue';

    const store = useBoardStore()
    const pageSize = 3;

    const paginatedBoardList = computed(() => {
        const start = store.currentPage * pageSize;
        const end = start + pageSize;
        return store.boardList.slice(start, end);
    });

    const totalPages = computed(() => Math.ceil(store.boardList.length / pageSize));

    onMounted(() => {
        store.getBoardList()
    });

    const prevPage = () => {
        if (store.currentPage.value > 0) {
            store.currentPage.value--;
        }
    };

    const nextPage = () => {
        if (store.currentPage.value < totalPages.value - 1) {
            store.currentPage.value++;
        }
    };

    // const firstPage = () => {
    //     currentPage.value = 0;
    // };

    // const lastPage = () => {
    //     currentPage.value = totalPages.value - 1;
    // };

    const gotoPage = (page) => {
        store.currentPage = page;
    };
</script>

<style scoped>
    #container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 40px;
    }

    .boardBox {
        background-color: #F0F6F6;
        width: 60%;
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        padding: 10px 20px;

    }

    .pagination {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }

    .pagination button {
        margin: 0 5px;
        color: black;
        background-color: #EEFEFF;
        transition: background-color 0.3s; /* 색상 변경을 부드럽게 처리 */
        border: none;
    }

    .pagination button.active {
        color: white;
        background-color: #7FABB2;
        transition: background-color 0.3s; /* 색상 변경을 부드럽게 처리 */
        border: none;
    }

    .pagination button:active, button:hover {
        color: white;
        background-color: #7FABB2;
        transition: background-color 0.3s; /* 색상 변경을 부드럽게 처리 */
        border: none;
    }
</style>
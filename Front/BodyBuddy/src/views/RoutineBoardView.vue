<template>
    <div class="routineHeader">
        <h1>Routine 배너</h1>
    </div>
    <div class="searchBar">
        <input type="text" class="search" placeholder="Search" v-model="keyword" @keyup.enter="search">
        <button class="searchBtn" @click="search">검색</button>
    </div>
    <RouterView />
</template>

<script setup>
    import { useBoardStore } from '@/stores/board';
    import { ref } from 'vue'

    const keyword = ref('')

    const store = useBoardStore()

    const search = (() => {
        store.getBoardList(keyword.value)
    })

</script>

<style scoped>
    .routineHeader {
        border: 1px solid lightgray;
        height: 200px;
        text-align: center;
    }
    .searchBar {
        border: 1px solid lightblue;
        background-color: #7FABB2;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .searchBar .search {
        margin-right: 10px;
        width: 20%;
        padding: 3px 10px;
        font-size: 0.9em;
        border-radius: 5px;
        border: 1px solid lightgray;
    }
    .searchBar .searchBtn {
        background-color: #EEFEFF;
        border: 1px solid #EEFEFF;
        border-radius: 5px;
        font-size: 0.9em;
        width: 50px;
        height: 30px;
        font-weight: bold;
    }

</style>
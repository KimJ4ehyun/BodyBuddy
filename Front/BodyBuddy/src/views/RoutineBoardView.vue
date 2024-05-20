<template>
    <div class="routineHeader">
        <img src="@/assets/img/banner4.jpg">
        <div class="category">
            <span class="categoryA">Routines</span>
            <span class="categoryB">Home &nbsp; > &nbsp; Routines</span>
        </div>
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
        store.currentPage = 0
        store.getBoardList(keyword.value)
    })

</script>

<style scoped>
    * {
        font-family: 'SUITE-Regular';
    }
    .routineHeader {
        /* border: 1px solid lightgray; */
        width: 100%;
        height: 250px;
        text-align: center;
        font-family: 'SUITE-Regular';
        font-weight: 700;
        position: relative;
    }
    .routineHeader img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .routineHeader .category {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }
    .routineHeader .category .categoryA {
        font-size: 2em;
    }

    .routineHeader .category .categoryB {
        font-size: 0.8em;
    }

    .searchBar {
        /* border: 1px solid lightblue; */
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
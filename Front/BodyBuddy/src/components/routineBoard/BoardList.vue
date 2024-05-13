<template>
    <div>
        <h2>BoardList</h2>

        <div id="container">
            <div class="boardBox" 
                v-for="routine in store.boardList"
                :key="routine.routineId"
            >
                <BoardListOne :board-one="routine" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import BoardListOne from '@/components/routineBoard/BoardListOne.vue'
    import { useBoardStore } from '@/stores/board'
    import { onMounted } from 'vue';

    const store = useBoardStore()

    onMounted(() => {
        store.getBoardList()
    })


</script>

<style scoped>
    #container {
        /* border: 1px solid lightgray; */
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #container .boardBox {
        /* border: 1px solid lightgray; */
        background-color: #F0F6F6;
        width: 60%;
        display: flex;
        flext-direction: row;
        margin: 20px auto;
        padding: 10px 20px;
    }

    
    
</style>
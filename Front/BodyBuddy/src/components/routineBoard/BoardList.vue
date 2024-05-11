<template>
    <div>
        <h2>BoardList</h2>

        <div id="container">
            <div class="boardBox" 
                v-for="routine in boardList"
                :key="routine.routineId">
                <span>{{ routine.routineTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { onMounted } from 'vue';

    const store = useBoardStore()

    onMounted(() => {
        store.getBoardList()
    })


</script>

<style scoped>
    #container {
        border: 1px solid lightgray;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: row wrap;
        justify-content: space-around;
    }

    #container .boardBox {
        border: 1px solid blue;
        width: 40%;

    }
</style>
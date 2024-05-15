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
    <span class="heart">🤍</span>

</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { onMounted } from 'vue';

    const store = useBoardStore()

    defineProps({
        boardOne: Object
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
</style>
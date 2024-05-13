<template>
    <div>
        <h3>Board Detail</h3>

        <div>
            <!-- {{ store.board }} -->
            <!-- {{ store.board }} -->
            <span v-for="one in store.board.routine" :key="one.routineId">
                {{ one }}
            </span>
            <!-- {{ store.board.exList }} -->
            <!-- {{ store.board.routine('routineTitle') }} -->

            <!-- {{ routineTitle }} -->
            
        </div>

    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import axios from 'axios'

    const store = useBoardStore()


    const route = useRoute()
    // const router = useRouter()

    const routineTitle = ref('')
    onMounted(async () => {
        console.log(route.params.routineId)
        store.getBoard(route.params.routineId)
        console.log(store.board.routine)
        // console.log(store.board.value.routine.routineTitle)
        // routineTitle.value = store.board.routine.routineTitle
    })

    

</script>

<style scoped>

</style>
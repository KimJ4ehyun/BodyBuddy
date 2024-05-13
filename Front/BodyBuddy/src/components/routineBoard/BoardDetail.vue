<template>
    <div>
        <h3>Board Detail</h3>

        <div>
            {{ store.board.routineTitle }}
        </div>

    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const store = useBoardStore()

    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
        store.getBoard(route.params.rountineId)
    })

</script>

<style scoped>

</style>
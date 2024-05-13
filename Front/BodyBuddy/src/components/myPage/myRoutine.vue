<template>
    <div>
        <h3>My Routine</h3>

        <div>
            <div v-for="myRoutine in store.myRoutineList" :key="myRoutine.routineId">
                <span>{{ myRoutine.routineTitle }}</span>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup>

    import { useMyPageStore } from '@/stores/myPage'
    import { useUserStore } from '@/stores/user'
    import { onMounted } from 'vue';

    const store = useMyPageStore()
    const userStore = useUserStore()

    onMounted(() => {
        store.getMyRoutines(userStore.loginId)
    })

</script>

<style scoped>

</style>
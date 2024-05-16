<template>
    <div>
        <div class="myR" v-if="myLoaded">
            {{ store.myRoutine.routine.routineTitle }}
        </div>
    </div>
</template>

<script setup>
    import { useMyPageStore } from '@/stores/myPage'
    import { onMounted, ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const store = useMyPageStore()

    const route = useRoute()
    const router = useRouter()

    const myLoaded = ref(false)

    const routine = ref({})
    onMounted(async () => {
        await store.getMyRoutine(route.params.routineId)
        myLoaded.value = true

        routine.value = store.myRoutine.routine

        console.log(routine.value)
    })

    console.log(routine.value)

    // 라우트 파라미터 변경 감지
    watch(() => route.params.routineId, async (newRoutineId) => {
        await store.getMyRoutine(newRoutineId);
    }, { immediate: true });
</script>

<style scoped>


</style>
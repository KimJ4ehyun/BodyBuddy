<template>
    <!-- <h3>My Routine</h3> -->
    
    <!-- side bar-->

    <main>
        <div class="bar">
            <span v-for="myRoutine in store.myRoutineList" :key="myRoutine.routineId">
                <RouterLink :to="`/my-routine/${myRoutine.routineId}`">
                    {{ myRoutine.routineTitle }} | 
                </RouterLink>
            </span>
        </div>
        <div class="myBox">
            <RouterView />
        </div>
        <!-- <div class="myR">
            <span v-for="myRoutine in store.myRoutineList" :key="myRoutine.routineId">
                {{ myRoutine.routineTitle }}
            </span>
        </div> -->
        <!-- <MyRoutineDetail /> -->

    </main>
</template>

<script setup>
    import MyRoutineDetail from '@/components/myPage/MyRoutineDetail.vue'
    import { useMyPageStore } from '@/stores/myPage'
    import { useUserStore } from '@/stores/user'
    import { onMounted } from 'vue';

    const store = useMyPageStore()
    const userStore = useUserStore()

    onMounted(() => {
        store.getMyRoutines()
    })

    console.log(userStore.loginInfo)

</script>

<style scoped>
    main .bar {
        border: 1px solid lightgray;
        width: 60%;
        margin: 10px auto;
    }
    .myBox {
        border: 1px solid lightgray;
        width: 60%;
        margin: 10px auto;
    }
</style>
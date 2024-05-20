<template>
    <div>
        <div class="myR" v-if="myLoaded">
            <!-- {{ store.myRoutine.routine.routineTitle }} -->
            <div class="timetable">
                <TimeTable :exercises="exercises" /> 
            </div>
            <div class="info">
                <span class="rTitle">
                    {{ store.myRoutine.routine.routineTitle }}
                </span>
                <span class="rDate">{{ store.myRoutine.routine.date }}</span>
                <span class="rDesc">{{ store.myRoutine.routine.description }}</span>
                <!-- 나중에 type 수정하기 -->
                <div class="btns">
                    <button class="btn btn-sm deleteBtn" type="button" @click="store.deleteRoutine(route.params.routineId)">삭제</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TimeTable from '@/components/routineBoard/TimeTable.vue'
    import { useMyPageStore } from '@/stores/myPage'
    import { onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const store = useMyPageStore()

    const route = useRoute()

    const myLoaded = ref(false)

    const routine = ref({})

    const exercises = ref([])

    // const rId = ref('')

    onMounted(async () => {
        await loadRoutineData(route.params.routineId);
    });


    const loadRoutineData = async (routineId) => {
        myLoaded.value = false;  // 데이터 로딩 시작
        await store.getMyRoutine(routineId);
        routine.value = store.myRoutine.routine

        exercises.value = store.myRoutine.exList

        myLoaded.value = true;  // 데이터 로딩 완료
    };

    
    // 라우트 파라미터 변경 감지
    watch(() => route.params.routineId, async (newRoutineId, oldRoutineId) => {
        if (newRoutineId !== oldRoutineId) {
            await loadRoutineData(newRoutineId);
        }
    }, { immediate: true });

    console.log(routine.value)

</script>

<style scoped>
    .timetable {
        /* border: 1px solid skyblue; */
        width: 80%;
        margin: 10px auto;
    }

    .myR .info {
        /* border: 1px solid skyblue; */
        width: 80%;
        height: auto;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .myR .info span {
        margin-bottom: 5px;
    }

    .myR .info .rTitle {
        font-size: 1.5em;
        font-weight: bold;
    }

    .myR .info .rDate {
        font-size: 0.9em;
        color: gray;
    }
    .myR .info .rDesc {
        font-size: 1.2em;
    }
    .myR .info .btns {
        align-self: flex-end; /* 자체적으로 하단 정렬 */
        margin-left: auto;
        margin-top: 10px;
    }
    .myR .info .btns .updateBtn {
        background-color: #7FABB2;
        color: white;
        margin-right: 10px;
    }
    .myR .info .btns .deleteBtn {
        background-color: #A9DDDE;
        color: white;
    }
</style>
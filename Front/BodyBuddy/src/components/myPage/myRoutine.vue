<template>
    <!-- <h3>My Routine</h3> -->
    
    <!-- side bar-->

    <main>
        <div class="bar" v-if="store.myRoutineList.length > 0">
            <span v-for="myRoutine in store.myRoutineList" :key="myRoutine.routineId">
                <RouterLink :to="`/my-routine/${myRoutine.routineId}`">
                    {{ myRoutine.routineTitle }} &nbsp;
                </RouterLink>
            </span>
            <!-- 예림 수정 ----- -->
            <!-- 루틴 등록하기 누르면 바로 루틴이 생성되버리니까 그냥 나가도 '제목없음'루틴이 만들어져서
                일단 확인하는 alert창 띄우고 들어가게 처리했음. 그래도 등록안하고 나가도 만들어지긴 함..ㅠ -->
            <div class="btn-class">
                <button @click="confirmAddRoutine" type="button" class="regBtn">루틴 등록하기</button>
            </div>
        </div>
        <div class="bar noRoutine" v-else>
            <div class="btn-class">
                <button type="button" @click="confirmAddRoutine" class="regBtn">루틴 등록하기</button>
            </div>
            <hr>
            내 루틴이 없습니다.
        </div>
        <hr>
        <div class="myBox">
            <RouterView />
        </div>

    </main>
</template>

<script setup>
    import { useMyPageStore } from '@/stores/myPage'
    import { useUserStore } from '@/stores/user'
    import { onMounted, nextTick } from 'vue';
    import { useRouter } from 'vue-router'


    const store = useMyPageStore()
    const userStore = useUserStore()
    const router = useRouter()

    onMounted(() => {
        store.getMyRoutines()
        if (store.myRoutineList.length > 0) {
            // 첫 번째 루틴의 상세 페이지로 리다이렉트
            nextTick(() => {
                router.push(`/my-routine/${store.myRoutineList[0].routineId}`);
            })
        }
    })

    const confirmAddRoutine = () => {
        router.push(`/mypage/regist`)
    }

</script>

<style scoped>
    main {
        width: 75%;
        margin-top: 60px;
    }
    main .bar {
        /* border: 1px solid lightgray; */
        width: 70%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    main hr {
        width: 70%;
        margin: 0 auto;
    }

    main .noRoutine {
        width: 70%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* border: 1px solid gray; */
        height: 100px;
        align-items: center;
    }

    main .noRoutine hr {
        width: 100%;
    }
    
    main .bar a {
        color: #9F9F9F;
        text-decoration: none;
        font-weight: bold;
    }
    
    main .bar a.router-link-exact-active {
        color: #324B4F;
    }

    .myBox {
        /* border: 1px solid lightgray; */
        width: 70%;
        margin: 20px auto;
    }
    .bar .btn-class {
        margin-left: auto;
        /* border: 1px solid gray; */
    }
    .bar .regBtn {
        width: 110px;
        height: 30px;
        background-color: #7FABB2;
        border: 1px solid #7FABB2;
        border-radius: 5px;
        font-size: 0.8em;
        font-weight: bold;
        color: white;
        margin-top: 5px;
    }

    
</style>
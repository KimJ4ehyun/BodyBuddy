<template>
    <div>
        <h3>Board Detail</h3>

        <div class="detailContainer">
            <div class="detailBox" v-if="boardLoaded">
                <div class="timetable">
                    <!-- <div class="thead">
                        <div class="day">
                            <div class="empty"></div>
                            <span>월</span>
                            <span>화</span>
                            <span>수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                            <span>일</span>
                        </div>
                    </div> -->
                    <!-- <div class="timeBox">
                        <div class="time">
                            <span>오전</span>
                            <span>오후</span>
                            <span>저녁</span>
                        </div>
                        <div class="timeInfo">
                            <div class="thead">
                                <div class="day">
                                    <span>월</span>
                                    <span>화</span>
                                    <span>수</span>
                                    <span>목</span>
                                    <span>금</span>
                                    <span>토</span>
                                    <span>일</span>
                                </div>
                            </div>
                            <div class="tbody">
                                <div class="one">f</div>
                            </div>
                        </div>
                    </div> -->
                    <table class="table table-bordered">
                        <tr>
                            <th></th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                            <th>일</th>
                        </tr>
                        <tbody v-for="ex in store.board.exList" :key="ex.routineId">
                            <tr>
                                <td>오전</td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '월', '오전')}"
                                    :style="{ backgroundColor: isExist(ex.dayOfTheWeek, ex.time, '월', '오전') ? randomBrightColor() : '' }"
                                >
                                </td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '화', '오전')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '수', '오전')}"
                                    :style="{ backgroundColor: isExist(ex.dayOfTheWeek, ex.time, '수', '오전') ? randomBrightColor() : '' }"
                                >
                                </td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '목', '오전')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '금', '오전')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '토', '오전')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '일', '오전')}"></td>
                            </tr>
                            <tr>
                                <td>오후</td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '월', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '화', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '수', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '목', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '금', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '토', '오후')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '일', '오후')}"></td>
                            </tr>
                            <tr>
                                <td>저녁</td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '월', '저녁')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '화', '저녁')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '수', '저녁')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '목', '저녁')}"
                                    :style="{ backgroundColor: isExist(ex.dayOfTheWeek, ex.time, '목', '저녁') ? randomBrightColor() : '' }"
                                >
                                </td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '금', '저녁')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '토', '저녁')}"></td>
                                <td :class="{'isExist': isExist(ex.dayOfTheWeek, ex.time, '일', '저녁')}"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="info">
                    <span class="rTitle">
                        {{ store.board.routine.routineTitle }}
                        <span class="heart">🤍</span>
                    </span>
                    <span class="rWriter">{{ store.board.routine.userId }}</span>
                    <span class="rDesc">{{ store.board.routine.description }}</span>
                    <button class="myAddBtn">내 루틴에 추가</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board'
    import { onMounted, ref, onBeforeMount } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import axios from 'axios'

    const store = useBoardStore()
    const boardLoaded = ref(false)

    const route = useRoute()
    // const router = useRouter()

    const isExist = (day, time, targetDay, targetTime) => {
        return day.includes(targetDay) && time === targetTime;
    }

    let randomBrightColor = () => {
        let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
        let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
        let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
        return `#${color_r+color_g+color_b}`;
    }

    // store.board.exList.forEach(ex => {
    //     // td 엘리먼트를 생성합니다.
    //     const tdElement = document.createElement('td');
        
    //     // td에 요소를 추가합니다.
    //     tdElement.textContent = ex.someValue; // ex의 어떤 속성이나 값에 접근하여 td에 넣습니다.

    //     // 만든 td 엘리먼트를 원하는 곳에 추가합니다.
    //     // 예를 들어, 특정 테이블의 tbody에 추가하려면 다음과 같이 합니다.
    //     document.querySelector('tbody').appendChild(tdElement);
    // });





    onMounted(async () => {
        await store.getBoard(route.params.routineId)
        boardLoaded.value = true
        // console.log(store.board.routine)
        // console.log(typeof store.board.routine)
        // console.log(typeof store.board.routine.routineTitle)
        // console.log(store.board.value.routine.routineTitle)
        // routineTitle.value = store.board.routine.routineTitle
        // console.log(store.board.exList[0].dayOfTheWeek)
    })

    

</script>

<style scoped>
    .detailBox {
        border: 1px solid lightgray;
        width: 80%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    .detailBox .timetable {
        border: 1px solid skyblue;
        width: 50%;
    }

    .detailBox .info {
        border: 1px solid orange;
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 10px;
    }

    .info span {
        margin-bottom: 5px;
    }

    .info .rTitle {
        font-size: 1.5em;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    
    .info .rWriter {
        font-size: 0.9em;

    }
    
    .info .myAddBtn {
        width: 110px;
        background-color: #A9DDDE;
        border: 1px solid #A9DDDE;
        border-radius: 5px;
        font-size: 0.8em;
        font-weight: bold;
        color: white;
    }

    /* .isExist {
        height: 35px;
    } */
    .timetable .thead {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .thead .day {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: 1px solid gray;
        padding-left: 5px;
    }
    .time {
        display: flex;
        flex-direction: column;
        border: 1px solid gray;
        width: 15%;
        justify-content: space-around;
        text-align: center;
        padding-top: 10px;
    }
    .timetable .timeBox{
        display: flex;
        flex-direction: row;
        border: 1px solid gray;
        width: 100%;
        height: 200px;
    }
    .timeBox .timeInfo{
        width: 85%;
        border: 1px solid red;
        
    }
    .timeInfo table {
        width: 100%;
    }
    table td {
        height: 30px;
    }
    .tbody {
        border: 1px solid blue;
        padding-left: 5px;
    }
    .tbody .one {
        border: 1px solid green;
        width: 14%;
        
    }
    /* .empty {
        width: 10%;
    } */
</style>
<template>
    <div>
        <h2>BoardList</h2>

        <div id="container">
            <div class="boardBox" 
                v-for="routine in store.boardList"
                :key="routine.routineId"
            >
                <!-- <table class="table table-bordered">
                    <tr>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                        <th>일</th>
                    </tr>
                    <tr>
                        <td :class="{'timeCheck': store.boardList.routineTitle='월'}">
                            {{ store.boardList }}
                        </td>
                        <td>ddd</td>
                    </tr>
                </table> -->
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
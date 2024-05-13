import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_ROUTINE_BOARD_API = `http://localhost:8080/routine/board`

export const useBoardStore = defineStore('board', () => {

    const boardList = ref([])

    const getBoardList = function() {
        axios.get(REST_ROUTINE_BOARD_API)
            .then((response) => {
                boardList.value = response.data
            })
    }

    const exerciseList = ref([])

    const getExerciseList = function(routineId) {
        axios.get(`${REST_ROUTINE_BOARD_API}/${routineId}`)
            .then((response) => {
                console.log(response.data);
            })
    }


    const board = ref([])

    const getBoard = function (routineId) {
        axios.get(`${REST_ROUTINE_BOARD_API}/${routineId}`)
            .then((response) => {
                board.value = response.data
            })
    }

    return {
        boardList,
        getBoardList,
        exerciseList,
        getExerciseList,
        board,
        getBoard,
        
    }
})
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_ROUTINE_BOARD_API = `http://localhost:8080/routine/board`

export const useBoardStore = defineStore('board', () => {

    const boardList = ref([])

    const getBoardList = function() {
        axios({
            url: REST_ROUTINE_BOARD_API,
            method: 'GET'
        })
        .then((response) => {
            boardList.value = response.data
        })
    }

    return {
        boardList,
        getBoardList,

    }
})
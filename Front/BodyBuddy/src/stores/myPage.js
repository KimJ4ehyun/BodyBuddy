import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_ROUTINE_BOARD_API = `http://localhost:8080/mypage`

export const useMyPageStore = defineStore('myPage', () => {

    const myRoutineList = ref([])

    const getMyRoutines = function(loginId) {
      axios.get(`${REST_ROUTINE_BOARD_API}/my-routine`)
        .then((response) => {
          myRoutineList.value = response.data
          console.log(response.data)
        })

    }

    return {
      myRoutineList,
      getMyRoutines,
    }

})
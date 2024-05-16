import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_MYPAGE_API = `http://localhost:8080/mypage`

export const useMyPageStore = defineStore('myPage', () => {

    const myRoutineList = ref([])

    const getMyRoutines = function() {
      axios.get(`${REST_MYPAGE_API}/my-routine`)
        .then((response) => {
          myRoutineList.value = response.data
          // console.log(response.data)
        })

    }


    const myRoutine = ref({})

    const getMyRoutine = async (routineId) => {
        myRoutine.value = {}; // 초기화
        console.log(`routineID: ${routineId}`);
        await axios.get(`${REST_MYPAGE_API}/my-routine/${routineId}`)
        .then((response) => {
            myRoutine.value = response.data;
            console.log(myRoutine.value);
        });
    };
  

    return {
      myRoutineList,
      getMyRoutines,
      myRoutine,
      getMyRoutine,
    }

})
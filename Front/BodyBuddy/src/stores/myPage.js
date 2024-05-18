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

    const addRoutine = function() {
      axios.post(`${REST_MYPAGE_API}/my-routine/regist`)
        .then((response) => {
          const routineId = response.data
          router.push(`/mypage/regist/${routineId}`)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const deleteRoutine = async (routineId) => {
      await axios.delete(`${REST_MYPAGE_API}/my-routine/${routineId}`)
      .then(() => {
        getMyRoutines()
        router.push({ name: 'myRoutineList' });
      })
      .catch((error) => {
        console.error(error);
      });
    };

    const addExercises = function(routineId, exercises, routineTitle, description) {
      axios.post(`${REST_MYPAGE_API}/my-routine/regist/${routineId}`, exercises)
        .then(() => {
          updateText(routineId, routineTitle, description)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // null 빼면 데이터 똑바로 안 감
    const updateText = function(routineId, routineTitle, description) {
      axios.put(`${REST_MYPAGE_API}/my-routine/regist/${routineId}`, null, {
        params: {
          routineTitle: routineTitle,
          description: description
        }
      })
        .then(() => {
          router.push(`/my-routine`)
        })
        .catch((error) => {
          console.log("안되는 이유가 뭘까나?")
          console.log(error)
        })
    }
  
    return {
      myRoutineList,
      getMyRoutines,
      myRoutine,
      getMyRoutine,
      addRoutine,
      deleteRoutine,
      addExercises,
      updateText,
    }

})
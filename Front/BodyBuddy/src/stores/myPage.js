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
          console.log()
          const routineId = response.data
          router.push(`/mypage/regist/${routineId}`)
          //router.push(`/mypage/regist/${routineId}`)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const addExercises = function(routineId, exercises) {
      console.log("routineId " + routineId)
      console.log("exercises " + exercises)
      exercises.forEach(exercise => {
        exercise.exerciseName = exercise.name;
        exercise.exercisePart = exercise.part;
        exercise.repetitions = exercise.reps;
        exercise.setCnt = exercise.sets;
        exercise.dayOfTheWeek = exercise.days;
        delete exercise.name;
        delete exercise.part;
        delete exercise.reps;
        delete exercise.sets;
        delete exercise.days;
        console.log(exercise);
      });
      axios.post(`${REST_MYPAGE_API}/my-routine/regist/${routineId}`, exercises)
        .then((response) => {
          console.log(response.data)
          router.push(`/my-routine`)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  

    return {
      myRoutineList,
      getMyRoutines,
      myRoutine,
      getMyRoutine,
      addRoutine,
      addExercises,
    }

})
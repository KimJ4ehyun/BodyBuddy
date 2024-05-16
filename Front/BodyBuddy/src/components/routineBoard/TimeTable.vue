<template>
    <!-- <div class="timetable"> -->
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
        <tbody>
          <tr v-for="timeSlot in timeSlots" :key="timeSlot.period">
            <td>{{ timeSlot.periodLabel }}</td>
            <td v-for="day in days" :key="day">
              <div v-if="getExercise(day, timeSlot.period)"
                   :class="{'isExist': isExist(getExercise(day, timeSlot.period).dayOfTheWeek, getExercise(day, timeSlot.period).time, day, timeSlot.periodLabel)}"
                   :style="{ backgroundColor: isExist(getExercise(day, timeSlot.period).dayOfTheWeek, getExercise(day, timeSlot.period).time, day, timeSlot.periodLabel) ? randomBrightColor() : '' }">
                <span data-bs-toggle="modal" :data-bs-target="`#modal${day}${timeSlot.period}`">{{ getExercise(day, timeSlot.period).exerciseName }}</span>
                <Modal :my-ex="getExercise(day, timeSlot.period)" :modal-id="`modal${day}${timeSlot.period}`" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    <!-- </div> -->
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import Modal from './Modal.vue'
  
  const props = defineProps({
    exercises: Object,
    isExist: Function,
    randomBrightColor: Function
  })
  
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  const timeSlots = [
    { period: '1', periodLabel: '오전' },
    { period: '2', periodLabel: '오후' },
    { period: '3', periodLabel: '저녁' }
  ]
  
  // 안전하게 운동 데이터 접근
  function getExercise(day, period) {
    // props 객체를 통해 exercises에 접근
    return (props.exercises[day] && props.exercises[day][period]) ? props.exercises[day][period][0] : null;
  }
  </script>
  
  
  <style scoped>
  /* 여기에 TimeTable.vue의 스타일을 추가 */
  </style>
  
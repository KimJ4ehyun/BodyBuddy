<template>
  <div class="routine-container">
    <h2>루틴 추가하기</h2>
    <input type="text" v-model="search" placeholder="운동이름 검색" class="exInput" />
    <div class="partBtns">
      <button
        v-for="part in parts"
        :key="part"
        @click="selectedPart = part"
        :class="{ active: selectedPart === part }"
        class="partBtn"
      >
        {{ part }}
      </button>
    </div>
    <div class="ex-container">
      <div class="ex-col" v-for="(exercise, index) in filteredExercises" :key="exercise.id">
        <input type="checkbox" :id="exercise.id" v-model="selectedExercises" :value="exercise" class="ex-check"/>
        <label :for="exercise.id" class="ex-label">{{ exercise.name }}</label>
      </div>
    </div>
    <div v-for="(exercise, index) in selectedExercises" :key="'selected-' + exercise.id" class="ex-block">
      <div>
        <span>{{ index + 1 }}</span>
        <span>{{ exercise.part }}</span> | &nbsp;
        <span>{{ exercise.name }}</span>
        <button @click="removeExercise(exercise.id)" class="remove-button">-</button>
      </div>
      <div >
        <div class="exInfo">
          <div>
            <label>세트</label>
            <input type="number" v-model="exercise.sets" class="numInput" min="0"/>
          </div>
          <div>
            <label>무게</label>
            <input type="number" v-model="exercise.weight" class="numInput" min="0"/> kg
          </div>
          <div>
            <label>횟수</label>
            <input type="number" v-model="exercise.reps" class="numInput" min="0"/>
          </div>
        </div>
        <span>&nbsp;</span>
        <div>
          <label>요일</label>
          <div>
            <label v-for="day in allDays" :key="day">
              <input type="checkbox" :value="day" v-model="exercise.days" class="dayCheck"/>
              {{ day }}
            </label>
          </div>
        </div>
        <div>
          <label for="floatingSelectGrid">시간</label>&nbsp;
          <select id="floatingSelectGrid" class="timeInput" v-model="exercise.time">
            <option value="1">오전</option>
            <option value="2">오후</option>
            <option value="3">저녁</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { exercises } from '@/data/exercises.js'

export default {
  data() {
    return {
      search: '',
      selectedPart: '',
      selectedExercises: [],
      exercises, 
      parts: ['하체', '가슴', '등', '어깨', '팔', '복근', '유산소'],
      allDays: ['월', '화', '수', '목', '금', '토', '일'],
    };
  },
  computed: {
    filteredExercises() {
      return this.exercises.filter(exercise => exercise.part === this.selectedPart && exercise.name.includes(this.search));
    },
  },
  methods: {
    addExercise(exercise) {
      if (!this.selectedExercises.some(e => e.id === exercise.id)) {
        this.selectedExercises.push({
          ...exercise,
          days: [],
          sets: 1, // Default values can be adjusted
          weight: 0,
          reps: 0,
          time: ''
        });
      }
    },
    removeExercise(id) {
      this.selectedExercises = this.selectedExercises.filter(exercise => exercise.id !== id);
    },
  },
};
</script>

<style scoped>
.routine-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.search {
  display: flex;
  margin-bottom: 20px;
}

.exInput {
  flex-grow: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}

.partBtn {
  padding: 10px 15px;
  margin-left: 5px;
  color: #324B4F;
  background-color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
}

.partBtn.active, .partBtn:hover {
  background-color: #324B4F;
  color: #FFFFFF;
}

.ex-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 20px; 
}

.ex-col {
  width: 50%;
  padding: 5px;
}

.ex-check {
  margin-right: 5px;
}

.ex-label {
  font-size: 14px;
  color: #666;
}

.ex-block {
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.block-header span {
  margin-right: 10px;
  font-weight: bold;
}

.remove-button {
  margin-left: auto;
  background-color: #FFFFFF;
  color: #324B4F;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.exInfo {
  display: flex;
  justify-content: space-around;
}

.numInput, .timeInput {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px;
  margin-left: 10px;
  margin-top: 10px;
}

.dayCheck {
  margin-left: 30px;
}

</style>

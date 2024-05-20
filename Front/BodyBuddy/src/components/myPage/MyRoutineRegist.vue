<template>
  <div class="routine-container">
    <h2>루틴 추가하기</h2>
    <div class="searchBar">
      <label id="searchLabel" for="searchInput">운동이름 검색</label>
      <input id="searchInput" type="text" v-model="search" placeholder="Search" class="search" @keyup.enter="search"/>
      <button class="searchBtn" @click="search">검색</button>
    </div>
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
    <hr>
    <div class="ex-container">
      <div class="ex-col" v-for="exercise in filteredExercises" :key="exercise.id">
        <input 
          type="checkbox" 
          :id="exercise.id" 
          @change="toggleExercise(exercise)" 
          :checked="selectedExercises.some(e => e.id === exercise.id)" 
          class="ex-check" 
        />
        <label :for="exercise.id" class="ex-label">{{ exercise.exerciseName }}</label>
      </div>
    </div>
    <div v-for="(exercise, index) in selectedExercises" :key="'selected-' + exercise.id" class="ex-block">
      <div class="info">
        <div>
          <span style="color: #7FABB2">{{ index + 1 }}</span>&nbsp;
          <span>{{ exercise.exercisePart }}</span>&nbsp; | &nbsp;
          <span>{{ exercise.exerciseName }}</span>
        </div>
        <div>
          <button @click="removeExercise(exercise.id)" class="remove-button">-</button>
        </div>
      </div>
      <div>
        <div class="exInfo">
          <div>
            <label>세트</label>
            <input type="number" v-model="exercise.setCnt" class="numInput" min="0"/>
          </div>
          <div>
            <label>무게</label>
            <input type="number" v-model="exercise.weight" class="numInput" min="0"/> kg
          </div>
          <div>
            <label>횟수(시간)</label>
            <input type="number" v-model="exercise.repetitions" class="numInput" min="0"/>
          </div>
        </div>
        <span>&nbsp;</span>
        <div>
          <div>
            <label>요일</label>
            <label v-for="day in allDays" :key="day">
              <div>
                <input type="checkbox" :value="day" @change="() => toggleDay(exercise, day)" :checked="exercise.dayOfTheWeek.includes(day)" class="dayCheck"/> {{ day }}
              </div>
            </label>
          </div>
        </div>
        <div class="timeBox">
          <label for="floatingSelectGrid">시간</label>&nbsp;
          <div class="selectBox">
            <select id="floatingSelectGrid" class="timeInput" v-model="exercise.time">
              <option value="">선택</option>
              <option value="오전">오전</option>
              <option value="오후">오후</option>
              <option value="저녁">저녁</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isFormValid">
      <div class="text">
        <div class="col-md-8">
          <input type="text" id="inputReview" v-model="text.routineTitle" class="form-control" placeholder="제목을 입력해주세요.">
        </div>
        <span>&nbsp;</span>
        <div class="col-md-8">
          <input type="text" id="inputReview" v-model="text.description" class="form-control" placeholder="설명을 입력해주세요.">
        </div>
      </div>
      <div>
        <button type="button" id="registBtn" class="btn btn-primary" @click="submitExercises()">등록하기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { exercises } from '@/data/exercises.js';
import { useMyPageStore } from '@/stores/myPage'
import { useRoute } from 'vue-router';

const route = useRoute()
const store = useMyPageStore()

const search = ref('');
const selectedPart = ref('');
const selectedExercises = ref([]);
const parts = ['하체', '가슴', '등', '어깨', '팔', '복근', '유산소'];
const allDays = ['월', '화', '수', '목', '금', '토', '일'];

const filteredExercises = computed(() => {
  return exercises.filter(exercise => exercise.exercisePart === selectedPart.value && exercise.exerciseName.includes(search.value));
});

const isFormValid = computed(() => {
  return selectedExercises.value.length > 0 && selectedExercises.value.every(exercise => exercise.dayOfTheWeek.length > 0 && exercise.time !== '');
});

const addExercise = (exercise) => {
  if (!selectedExercises.value.some(e => e.id === exercise.id)) {
    selectedExercises.value.push({
      ...exercise,
      dayOfTheWeek: [],
      setCnt: 0,
      weight: 0,
      repetitions: 0,
      time: ''
    });
  }
};

const removeExercise = (id) => {
  selectedExercises.value = selectedExercises.value.filter(exercise => exercise.id !== id);
};

const toggleExercise = (exercise) => {
  const index = selectedExercises.value.findIndex(e => e.id === exercise.id);
  if (index === -1) {
    addExercise(exercise);
  } else {
    removeExercise(exercise.id);
  }
};

const toggleDay = (exercise, day) => {
  const index = exercise.dayOfTheWeek.indexOf(day);
  if (index === -1) {
    exercise.dayOfTheWeek.push(day);
  } else {
    exercise.dayOfTheWeek.splice(index, 1);
  }
};

const text = ref({
  routineTitle: '',
  description: ''
})

const submitExercises = () => {
  const formattedExercises = selectedExercises.value.map(exercise => ({
    ...exercise,
    dayOfTheWeek: exercise.dayOfTheWeek.join(',')
  }));
  console.log(text.value.routineTitle)
  console.log(text.value.description)
  store.addRoutine(formattedExercises, text.value.routineTitle, text.value.description)
};
</script>


<style scoped>
.routine-container {
  max-width: 800px;
  width: 60%;
  margin: 20px auto;
  text-align: center;
}

h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.searchBar .search {
  margin-right: 10px;
   width: 40%;
  padding: 3px 10px;
  font-size: 0.9em;
  border-radius: 5px;
  border: 1px solid lightgray;
}

  .searchBtn{
    background-color: #7FABB2;
    color: white;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 30px;
    font-size: 0.9em;
    border-radius: 5px;
  }

  #searchLabel{
    font-size: 0.8em;
    margin-right: 20px;
  }

  button:hover {
    background-color: #A9DDDE;
  }

.partBtns {
  margin: 20px 0;
}

.partBtn {
  font-size: 0.9em;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  color: #324B4F;
  background-color: #FFFFFF;
  border-radius: 15px;
  cursor: pointer;
  width: 12%;
}

.partBtn.active, .partBtn:hover {
  background-color: #324B4F;
  transition: background-color 0.3s;
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
  background-color: #FFFFFF;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  height: 5px;
}

.remove-button:hover {
  background-color:white;
}

.exInfo {
  display: flex;
  justify-content: space-around;
}

.numInput, .timeInput {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90px;
  margin: 10px auto;
}

.dayCheck {
  margin-left: 30px;
}

#registBtn {
  background-color: #7FABB2;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

#registBtn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

#registBtn:hover {
  background-color: #A9DDDE;
}

.info {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;
  margin-bottom: 10px;
}

.ex-check {
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 2px solid #7FABB2;
    border-radius: 5px;
    margin-top: 5px;
    accent-color: #324B4F;
}

.timeBox{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
}
.timeBox label {
  width: 20%;
}

.timeBox .selectBox {
  width: 80%;
  text-align: left;
}


</style>
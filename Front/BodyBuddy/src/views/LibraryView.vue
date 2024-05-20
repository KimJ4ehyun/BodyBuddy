<template>

    <div class="libraryHeader">
        <h3>Library 배너</h3>
    </div>
    <div class="searchBar">
        <input type="text" v-model="search" placeholder="Search" class="search" @keyup.enter="search">
        <button class="searchBtn" @click="search">검색</button>
    </div>
    <div class="container">
        <div class="partBtns">
            <button
                v-for="part in parts"
                :key="part"
                @click="selectedPart = part"
                :class="{ active: selectedPart === part }"
                class="partBtn">
            {{ part }}
            </button>
        </div>
        <div class="ex-container">
            <div class="ex-col" v-for="exercise in filteredExercises" :key="exercise.id">
                <span :for="exercise.id" class="ex-label">{{ exercise.exerciseName }}</span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import { exercises } from '@/data/allExercises.js';

const search = ref('');
const selectedPart = ref('');
const selectedExercises = ref([]);
const parts = ['하체', '가슴', '등', '어깨', '팔', '복근', '유산소'];

const filteredExercises = computed(() => {
  return exercises.filter(exercise => exercise.exercisePart === selectedPart.value && exercise.exerciseName.includes(search.value));
});

</script>

<style  scoped>
    * {
        font-family: 'SUITE-Regular';
    }

    .container {
        width: 70%;
        margin: 0 auto;
    }

    .libraryHeader {
        border: 1px solid lightgray;
        height: 200px;
        text-align: center;
    }
    .searchBar {
        border: 1px solid lightblue;
        background-color: #7FABB2;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .searchBar .search {
        margin-right: 10px;
        width: 20%;
        padding: 3px 10px;
        font-size: 0.9em;
        border-radius: 5px;
        border: 1px solid lightgray;
    }
    .searchBar .searchBtn {
        background-color: #EEFEFF;
        border: 1px solid #EEFEFF;
        border-radius: 5px;
        font-size: 0.9em;
        width: 50px;
        height: 30px;
        font-weight: bold;
        color: black;
    }

    .partBtns {
        margin: 15px 0;
    }

    .partBtn {
        font-size: 1em;
        padding: 5px 10px;
        margin-left: 5px;
        color: #324B4F;
        background-color: #FFFFFF;
        border-radius: 20px;
        cursor: pointer;
        width: 13%;
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

    .ex-label {
        font-size: 14px;
        color: #666;
    }
</style>
<template>
    <div class="bigContainer">
        <!-- 메인 배너 -->
        <div class="mainBanner">
            <img src="@/assets/img/main.png">
            <div class="mainText">
                <span class="mainT">
                    Manage your routine
                </span>
                <span class="mainD">
                    설명설명<br>
                    설명설명
                </span>
                <button class="mainBtn">
                    <RouterLink :to="{ name: 'myRoutineList'}">
                        함께하기
                    </RouterLink>
                </button>
            </div>
        </div>
        
        <!-- 메인 소개 -->
        <div class="mainMy">
            <div class="mainMyL">
                <span class="mainMyT">나만의 운동 루틴</span>
                <span class="mainMyD">
                    내가 하고 싶은 운동을 원하는 요일과 시간에
                    할 수 있도록 시간표로 편하게 관리해요!<br>
                    <button class="mainMyBtn" @click="confirmAddRoutine">루틴 만들기</button>
                </span>
            </div>
            <div class="mainMyR">
                <img src="@/assets/img/ex1.png">
                <img src="@/assets/img/ex2.png">
            </div>
        </div>

        <!-- 운동 루틴 보여주기 -->
        <div class="mainRec">
            <span class="mainRecHead">운동 루틴 추천</span>

        </div>
    </div>
  </template>
  
  <script setup>
    import { useUserStore } from '@/stores/user'
    import { useMyPageStore } from '@/stores/myPage'
    import { useRouter } from 'vue-router'

    const store = useUserStore()
    const myPageStore = useMyPageStore()
    const router = useRouter()

    const confirmAddRoutine = () => {
        router.push(`/mypage/regist`)
    }
  
  </script>
  
  <style scoped>
    * {
        font-family: 'SUITE-Regular';
    }
    
    .bigContainer .mainBanner {
      /* border: 1px solid lightgray; */
      height: 450px;
      text-align: center;
    }
    .mainBanner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .mainBanner {
        position: relative;
        width: 100%; 
        height: auto; 
    }

    .mainText {
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translate(-50%, -50%);
        text-align: left;
        background-color: #EEFEFF; 
        padding: 35px 20px; 
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40%;
        height: 60%;
    }

    .mainT {
        color: #7FABB2;
        font-weight: 700;
        font-size: 1.8em;

    }

    .mainBtn {
        background-color: #7FABB2;
        border: 1px solid #7FABB2; 
        width: 40%;
        height: 40px;
        color: white;
        font-size: 0.9em;
    }

    .mainBtn a {
        text-decoration: none;
        color: white;
    }

    /* mainMy */
    .mainMy {
        /* border: 1px solid lightgray;   */
        height: 350px;
        display: flex;
        flex-direction: row;
    }
    .mainMy .mainMyL {
        /* border: 1px solid lightgray; */
        width: 30%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 60px 0;
        padding-left: 40px;
        padding-right: 15px;
    }
    .mainMyT {
        font-weight: 700;
        font-size: 1.4em;
    }
    .mainMyD {
        text-align: left;
    }

    .mainMy .mainMyR {
        /* border: 1px solid lightgray; */
        width: 70%;
        padding-left: 60px;
        padding-top: 30px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }
    
    .mainMyR img {
        width: 50%;
        height: 240px;
    }

    .mainMyBtn {
        background-color: #7FABB2;
        border: 1px solid #7FABB2; 
        width: 35%;
        height: 35px;
        color: white;
        font-size: 0.9em;
        margin-top: 20px;
    }


    /* mainRec */
    .mainRec {
        /* border: 1px solid lightgray; */
        height: 350px;
        background-color: #EEFEFF;
        padding-top: 30px;
        text-align: center;
    }

    .mainRec .mainRecHead {
        font-weight: bold;
        font-size: 1.2em;
    }

    .mainRec .mainRecBox {
        border: 1px solid blue;
        width: 20%;
    }



  </style>
  
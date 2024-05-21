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
                <!-- <img src="@/assets/img/ex2.png"> -->
            </div>
        </div>

        <!-- 운동 루틴 보여주기 -->
        <div class="mainRec">
            <span class="mainRecHead">운동 루틴 추천</span>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="mainRecBox">
                        <img src="@/assets/img/view1.jpg" alt="Routine 1">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[0].routineId}`">{{ boardStore.boardList[0].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[0].nickname }}</p>
                        </div>
                    </div>
                    <div class="mainRecBox">
                        <img src="@/assets/img/view2.jpg" alt="Routine 2">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[1].routineId}`">{{ boardStore.boardList[1].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[1].nickname }}</p>
                        </div>
                    </div>
                    <div class="mainRecBox">
                        <img src="@/assets/img/view3.jpg" alt="Routine 3">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[2].routineId}`">{{ boardStore.boardList[2].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[2].nickname }}</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="mainRecBox">
                        <img src="@/assets/img/view1.jpg" alt="Routine 1">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[3].routineId}`">{{ boardStore.boardList[3].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[3].nickname }}</p>
                        </div>
                    </div>
                    <div class="mainRecBox">
                        <img src="@/assets/img/view2.jpg" alt="Routine 2">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[4].routineId}`">{{ boardStore.boardList[4].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[4].nickname }}</p>
                        </div>
                    </div>
                    <div class="mainRecBox">
                        <img src="@/assets/img/view3.jpg" alt="Routine 3">
                        <div class="info">
                            <p class="rTitle">
                                <RouterLink :to="`/board/${boardStore.boardList[5].routineId}`">{{ boardStore.boardList[5].routineTitle }}</RouterLink>
                            </p>
                            <p class="rWriter">{{ boardStore.boardList[5].nickname }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { useUserStore } from '@/stores/user'
    import { useMyPageStore } from '@/stores/myPage'
    import { useBoardStore } from '@/stores/board';
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const store = useUserStore()
    const myPageStore = useMyPageStore()
    const boardStore = useBoardStore()

    const router = useRouter()

    const confirmAddRoutine = () => {
        router.push(`/mypage/regist`)
    }

    onMounted(() => {
        boardStore.getBoardList()
        console.log(boardStore.boardList)
    });
  
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
        width: 360px;
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
        width: 140px;
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
        width: 40%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 60px 0;
        padding-left: 80px;
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
        width: 60%;
        padding-left: 20px;
        padding-top: 30px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }
    
    .mainMyR img {
        width: 400px;
        height: 240px;
    }

    .mainMyBtn {
        background-color: #7FABB2;
        border: 1px solid #7FABB2; 
        width: 120px;
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
        /* border: 1px solid blue; */
        width: 20%;
    }


    /* carousel */
    .carousel-inner {
        display: flex;
        /* border: 1px solid gray; */
    }
    #carouselExample {
        margin-top: 30px;
    }

    .carousel-item {
        transition: transform 0.6s ease-in-out; /* 기본값은 0.6s인 경우가 많으나, 'ease-in-out'을 추가하여 더 부드러운 전환 효과를 줄 수 있음 */
    }

    .carousel-item.active, .carousel-item-start, .carousel-item-end {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .carousel-item-start {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }


    .carousel-item img {
        width: 100%; 
        height: auto;
    }
    .mainRecBox {
        /* border: 1px solid blue; */
        margin: 5px 25px;
        height: 200px;
        text-align: center;
        width: 300px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .mainRecBox img {
        width: 100%; 
        height: 150px;
    }
    
    .mainRecBox p {
        margin: 0;
    }

    .mainRecBox .info {
        /* border: 1px solid gray; */
        text-align: left;
        padding-top: 10px;
    }

    .mainRecBox .info .rTitle a {
        color: black;
        text-decoration: none;
        font-size: 1.1em;
    }

    .mainRecBox .info .rTitle a:hover {
        text-decoration: underline;
        color: #7FABB2;
    }

    .mainRecBox .info .rWriter {
        font-size: 0.9em;
        color: #9F9F9F;
    }

    .carousel-control-prev, .carousel-control-next {
        filter: invert(100%); 
    }

  </style>
  
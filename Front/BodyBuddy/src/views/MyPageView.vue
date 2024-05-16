<template>
    <div class="myPageHeader">
        <h3>My Page 배너</h3>
    </div>
    <div class="myPageContainer">
        <!-- 예림 추가 (사이드바) -->
        <div class="sideBar">
            <span class="cHead">Category</span>
            <span class="cName">
                <RouterLink :to="{ name: 'myRoutineList'}">
                    내 루틴 관리
                </RouterLink>
                <RouterLink :to="{ name: 'like' }">찜 목록</RouterLink>
            </span>

        </div>
        <RouterView />
        <MyRoutineRegist />
        
    </div>
</template>

<script setup>
    import MyRoutineRegist from '@/components/myPage/MyRoutineRegist.vue'

</script>

<style scoped>
    .myPageHeader {
        border: 1px solid lightgray;
        height: 160px;
        text-align: center;
    }

    .myPageContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .sideBar {
        /* border: 1px solid lightgray; */
        width: 15%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        height: 200px;
        font-weight: bold;
        margin-top: 100px;
        padding-left: 20px;
    }

    .sideBar span {
        margin-bottom: 20px;
    }

    .sideBar .cHead {
        font-size: 1.4em;
        color: #7FABB2;
    }
    .sideBar .cName {
        display: flex;
        flex-direction: column;
    }

    .sideBar .cName a{
        font-size: 0.9em;
        color: #9F9F9F;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .sideBar .cName a.router-link-active {
        color: #324B4F;
    }
</style>
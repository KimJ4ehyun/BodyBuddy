<template>
  <!-- <h3>My Routine</h3> -->

  <!-- side bar-->

  <main>
    <div class="bar" v-if="store.myRoutineList.length > 0">
      <span v-for="myRoutine in store.myRoutineList" :key="myRoutine.routineId">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <RouterLink :to="`/my-routine/${myRoutine.routineId}`">
                {{ myRoutine.routineTitle }} &nbsp;
              </RouterLink>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <!-- <RouterLink :to="`/my-routine/${myRoutine.routineId}`">
          {{ myRoutine.routineTitle }} &nbsp;
        </RouterLink> -->
      </span>
      <div class="btn-class">
        <button @click="confirmAddRoutine" type="button" class="regBtn">
          루틴 등록하기
        </button>
      </div>
    </div>
    <div class="bar noRoutine" v-else>
      <div class="btn-class">
        <button type="button" @click="confirmAddRoutine" class="regBtn">
          루틴 등록하기
        </button>
      </div>
      <hr />
      내 루틴이 없습니다.
    </div>
    <hr />
    <div class="myBox">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { useMyPageStore } from "@/stores/myPage";
import { useUserStore } from "@/stores/user";
import { onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";

const store = useMyPageStore();
const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
  store.getMyRoutines();
  if (store.myRoutineList.length > 0) {
    // 첫 번째 루틴의 상세 페이지로 리다이렉트
    nextTick(() => {
      router.push(`/my-routine/${store.myRoutineList[0].routineId}`);
    });
  }
});

const confirmAddRoutine = () => {
  router.push(`/mypage/regist`);
};
</script>

<style scoped>
main {
  width: 75%;
  margin-top: 60px;
}
main .bar {
  /* border: 1px solid lightgray; */
  width: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

main hr {
  width: 600px;
  margin: 0 auto;
}

main .noRoutine {
  width: 70%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid gray; */
  height: 100px;
  align-items: center;
}

main .noRoutine hr {
  width: 100%;
}

main .bar a {
  color: #9f9f9f;
  text-decoration: none;
  font-weight: bold;
  margin-right: 7px;
  font-family: "Gowun Dodum";
  font-weight: 600;
  font-style: normal;
}

main .bar a.router-link-exact-active {
  color: #324b4f;
}

.myBox {
  /* border: 1px solid lightgray; */
  width: 550px;
  margin: 20px auto;
}
.bar .btn-class {
  margin-left: auto;
  /* border: 1px solid gray; */
}
.bar .regBtn {
  width: 110px;
  height: 30px;
  background-color: #7fabb2;
  border: 1px solid #7fabb2;
  border-radius: 5px;
  font-family: "Gowun Dodum";
  font-size: 0.8em;
  font-weight: 500;
  color: white;
  margin-top: 5px;
}
</style>

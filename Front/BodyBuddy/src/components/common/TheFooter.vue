<template>
  <hr class="footerhr">
  <div class="footerBox">
    <div class="leftBox">
      <span class="name">BODYBUDDY</span>
      <p class="description">
        서울시 강남구 테헤란로 212<br/>
        BODYBUDDY<br/>
        예림, 재현
      </p>
    </div>

    <div class="rightBox">
      <span class="links">Links</span>
      <p class="category">
        <RouterLink :to="{ name: 'home'}">Home</RouterLink> 
        <RouterLink :to="{ name: 'routineList'}">Routines</RouterLink>
        <RouterLink :to="{ name: 'Library'}">Library</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footerhr {
  margin-top: 100px;
}
.footerBox {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.footerBox .leftBox {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  /* border: 1px solid gray; */
  width: 330px;
}

.footerBox .leftBox .name {
  font-weight: bold;
  font-size: 1.2em;
}

.footerBox .leftBox p, .footerBox .rightBox p {
  margin: 0;
}

.footerBox .leftBox .description {
  color: gray;
  font-size: 0.9em;
  margin-top: 40px;
}


.footerBox .rightBox {
  /* border: 1px solid gray; */
  width: 400px;

}

.footerBox .rightBox .links {
  color: gray;
  font-size: 0.9em;
}

.footerBox .rightBox .category {
  margin-top: 40px;
}

.footerBox .rightBox .category a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin-right: 30px;
}

.footerBox .rightBox .category a:hover {
  text-decoration: underline;
}

</style>

<template>
  <div>
    <TheHeader v-if="!shouldRenderHeader"/>
    <RouterView/>
    <TheFooter v-if="!shouldRenderFooter"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'

//재현 추가 (팝업창에서 header footer 안 보이게 하려고)
const popupUserId = ref(null)
const popupUserNickname = ref(null)

const shouldRenderHeader = computed(() => !popupUserId.value && !popupUserNickname.value)
const shouldRenderFooter = computed(() => !popupUserId.value && !popupUserNickname.value)

const router = useRouter()

// 라우터 가드 설정
router.beforeEach((to, from, next) => {
  // '/PopupNickname' 또는 '/PopupUserId'로 이동할 때
  if (to.path === '/PopupNickname' || to.path === '/PopupUserId') {
    // 헤더와 푸터를 숨김
    popupUserId.value = null
    popupUserNickname.value = null
  } else {
    // 다른 경로로 이동할 때 헤더와 푸터를 보여줌
    popupUserId.value = 'some value'
    popupUserNickname.value = 'some value'
  }
  next()
})
</script>

<style>
@font-face {
    font-family: 'omyu_pretty';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GongGothicMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'KCC-Hanbit';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'ChosunGu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}


</style>
<template>
  <div>
    <TheHeader/>
    <RouterView/>
    <TheFooter/>
  </div>


</template>

<script setup>
  import TheHeader from '@/components/common/TheHeader.vue'
  import TheFooter from '@/components/common/TheFooter.vue'
</script>

<style scoped>

</style>

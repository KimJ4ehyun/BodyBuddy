<template>
    <div>
        <h3>detail</h3>
        
    </div>
</template>

<script setup>
    import { useMyPageStore } from '@/stores/myPage'
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const store = useMyPageStore()

    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
        store.getMyRoutine(route.params.id)
    })
</script>

<style scoped>


</style>
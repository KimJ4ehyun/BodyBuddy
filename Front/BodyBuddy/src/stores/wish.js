import { ref, onMounted,computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_WISH_API = `http://localhost:8080/routine/wish`

export const useWishStore = defineStore('wish', () => {


    const addWish = ((routineId) => {
        axios.get(`${REST_WISH_API}/add-heart/${routineId}`)
            .then((response) => {
                console.log(response.data)
            })
    })

    return {
        addWish,

    }
    
})
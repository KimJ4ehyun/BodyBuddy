import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true;
const REST_REVIEW_API = `http://localhost:8080/routine/board/review`

export const useReviewStore = defineStore('review', () => {

  const reviewList = ref([])  
  
  const getReviewList = function (routineId) {
    axios.get(`${REST_REVIEW_API}/${routineId}`)
        .then((response) => {
            reviewList.value = response.data
        })
  }

  const reviewRegist = function (review, routineId) {
    return axios.post(`${REST_REVIEW_API}/${routineId}/regist`, review)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
  }

  // const reviewUpdate = function (reviewId, routineId, content) {
  //   return axios.put(`${REST_REVIEW_API}/${routineId}/update`, {
  //       params: {
  //         reviewId: reviewId,
  //         content: content
  //       }
  //     })
  //       .then((response) => {
  //           return response.data;
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       });
  // };

  const reviewDelete = function (reviewId, routineId) {
    return axios.delete(`${REST_REVIEW_API}/${routineId}/delete`, {
        params: {
          reviewId: reviewId
        }
      })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
  };

  return { 
    reviewList,
    getReviewList,
    reviewRegist,
    // reviewUpdate,
    reviewDelete
  }
},
{
  persist: true
}
)

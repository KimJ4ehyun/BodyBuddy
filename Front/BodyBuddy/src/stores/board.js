import { ref, onMounted,computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import { useMyPageStore } from './myPage'
    import Swal from 'sweetalert2'

const REST_ROUTINE_BOARD_API = `http://localhost:8080/routine/board`

export const useBoardStore = defineStore('board', () => {

    const boardList = ref([])
    const currentPage = ref(0)

    const getBoardList = function(keyword) {
        axios.get(REST_ROUTINE_BOARD_API, {
            params: {
                keyword: keyword
            }
        })
            .then((response) => {
                boardList.value = response.data
                // console.log(response.data)
            })
    }

    const exerciseList = ref([])

    const getExerciseList = async function(routineId) {
        await axios.get(`${REST_ROUTINE_BOARD_API}/${routineId}`)
            .then((response) => {
                exerciseList.value = response.data.exList
                // console.log(response.data.exList);
            })
    }


    const board = ref({})

    const getBoard = (async (routineId) => {
        console.log(routineId)
        await axios.get(`${REST_ROUTINE_BOARD_API}/${routineId}`)
            .then((response) => {
                board.value = response.data
                // console.log(board.value)
                // console.log(board.value.routine.routineTitle)
            })
    })


    const addMyRoutine = (async (routine) => {
        // 재현 추가
        // 로그인 안 했을 시에 login페이지로 이동하게
        const sessionId = sessionStorage.getItem('userId')
        const sessionNickname = sessionStorage.getItem('nickname')
        if(!(sessionId && sessionNickname)) {
            router.push('/login')
            return;
        }

        return await axios.post(`${REST_ROUTINE_BOARD_API}/my-routine/add?routineId=${routine.originRId}`, routine
        )
            .then((response) => {
                const myStore = useMyPageStore()
                myStore.myRoutineList.push(response.data)
                console.log(response.data)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "내 루틴에 추가되었습니다.",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: 'rgba(0,0,0,0.75)'
                  });
            })
    })

    return {
        boardList,
        currentPage,
        getBoardList,
        exerciseList,
        getExerciseList,
        board,
        getBoard,
        addMyRoutine,
    }
},
{
  persist: true
}
)
package com.bodybuddy.fit.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;
import com.bodybuddy.fit.model.dto.User;
import com.bodybuddy.fit.model.service.MyPageService;
import com.bodybuddy.fit.model.service.RoutineService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/mypage")
//@CrossOrigin("*")
@Tag(name="MyPageController", description="MyPage Rest Controller")
public class MyPageController {
	
	@Autowired
	private RoutineService rService;
	
	@Autowired
	private MyPageService myService;
	
	// 루틴 등록하기
	@PostMapping("/my-routine/regist")
	@Operation(summary="루틴 등록하기", description="루틴 정보를 등록한다.")
	public ResponseEntity<Routine> addRoutine(@RequestBody Routine routine, HttpSession session){
		
		User loginUser = (User)session.getAttribute("user");
		
		String loginId = loginUser.getUserId();
		
		routine.setUserId(loginId);
		rService.addRoutine(routine);
		
		return new ResponseEntity<>(routine, HttpStatus.CREATED);
	}
	
	
	// 루틴 등록 - 운동 추가하기
	@PostMapping("/my-routine/regist/{routine_id}")
	@Operation(summary="루틴의 운동 등록하기", description="해당 루틴의 운동 정보를 등록한다.")
	public ResponseEntity<?> addExercise(@PathVariable("routine_id") int routineId, 
										@RequestBody Exercise[] exercises) {
		
		for(Exercise exercise : exercises) {
			exercise.setRoutineId(routineId);
			rService.addExercise(exercise);
		}
		
		return new ResponseEntity<>(exercises, HttpStatus.CREATED);
	}
	
	
	// 내 루틴 전체 목록 (내 루틴 관리 페이지)
	@GetMapping("/my-routine")
	@Operation(summary="내 루틴 전체 목록 가져오기", description="내 루틴 전체 목록을 가져온다.")
	public ResponseEntity<List<Routine>> getMyRoutines(HttpSession session) {
		
		User loginUser = (User) session.getAttribute("user");
		String loginId = loginUser.getUserId();
		
		List<Routine> list = myService.getAllMyRoutines(loginId);
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	

	// 각 루틴 상세보기 (각 루틴 별 페이지)
	@GetMapping("/my-routine/{routine_id}")
	@Operation(summary="각 루틴 상세보기", description="각 루틴들의 상세 정보를 가져온다.")
	public ResponseEntity<Map<String, Object>> getRoutine(@PathVariable("routine_id") int routineId) {
		
		Map<String, Object> map = new HashMap<>();
		
		// 내 루틴 상세정보 가져오기
		Routine routine = rService.getOneRoutine(routineId);
		
		// 각 루틴의 운동 정보 리스트 가져오기
		List<Exercise> exList = rService.getAllExercise(routineId);
		
		map.put("routine", routine);
		map.put("exList", exList);
		
		return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	// 내 루틴의 각 운동 상세 정보 가져오기 (운동 한 개 팝업)
	@GetMapping("/my-routine/{routine_id}/{ex_id}")
	@Operation(summary="내 루틴의 각 운동 상세보기", description="각 루틴의 운동 상세 정보를 가져온다.")
	public ResponseEntity<Exercise> exerciseInfo(@PathVariable("routine_id") int routineId,
												@PathVariable("ex_id") int exerciseId) {
		
		Exercise ex = rService.getExerciseInfo(routineId, exerciseId);
		
		return new ResponseEntity<>(ex, HttpStatus.OK);
	}

}

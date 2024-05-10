package com.bodybuddy.fit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;
import com.bodybuddy.fit.model.dto.User;
import com.bodybuddy.fit.model.service.RoutineService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/mypage")
@CrossOrigin("*")
@Tag(name="MyPageController", description="MyPage Rest Controller")
public class MyPageController {
	
	@Autowired
	private RoutineService rService;
	
	// 루틴 등록하기
	@PostMapping("/myroutine/regist")
	@Operation(summary="루틴 등록하기", description="루틴 정보를 등록한다.")
	public ResponseEntity<Routine> addRoutine(@RequestBody Routine routine, HttpSession session){
		
		User loginUser = (User)session.getAttribute("user");
		
		String loginId = loginUser.getUserId();
		
		routine.setUserId(loginId);
		rService.addRoutine(routine);
		
		return new ResponseEntity<>(routine, HttpStatus.CREATED);
	}
	
	
	// 루틴 등록 - 운동 추가하기
	@PostMapping("/myroutine/regist/{routine_id}")
	@Operation(summary="루틴의 운동 등록하기", description="해당 루틴의 운동 정보를 등록한다.")
	public ResponseEntity<?> addExercise(@PathVariable("routine_id") int routineId, 
										@RequestBody Exercise[] exercises) {
		
		for(Exercise exercise : exercises) {
			exercise.setRoutineId(routineId);
			rService.addExercise(exercise);
		}
		
		return new ResponseEntity<>(exercises, HttpStatus.CREATED);
	}

}

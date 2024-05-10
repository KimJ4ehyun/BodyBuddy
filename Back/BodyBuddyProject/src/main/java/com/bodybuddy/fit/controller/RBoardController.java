package com.bodybuddy.fit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping("/routine/board")
@CrossOrigin("*")
@Tag(name="RBoardController", description="Routine Board Rest Controller")
public class RBoardController {
	
	@Autowired
	private RoutineService rService;
	
	// 루틴 목록 보여주기
	@GetMapping("/")
	@Operation(summary="루틴 목록 보여주기", description="루틴 전체 목록을 반환한다.")
	public ResponseEntity<List<Routine>> routineList(){
		List<Routine> list = rService.getAllRoutine();
		
		return new ResponseEntity<>(list, HttpStatus.OK); 
	}
	
	// 해당 루틴의 각 운동 정보 상세보기
	@GetMapping("/{routine_id}/{ex_id}")
	@Operation(summary="해당 루틴의 각 운동 정보 보여주기", description="해당 루틴의 각 운동 정보를 반환한다.")
	public ResponseEntity<Exercise> exerciseInfo(@PathVariable("routine_id") int routineId, @PathVariable("ex_id") int exId){
		Exercise ex = rService.getExerciseInfo(routineId, exId);
		return new ResponseEntity<>(ex, HttpStatus.OK);
	}
	
	
	
}

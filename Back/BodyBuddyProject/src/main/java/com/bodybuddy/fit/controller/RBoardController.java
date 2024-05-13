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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;
import com.bodybuddy.fit.model.service.RoutineService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/routine/board")
//@CrossOrigin("*")
@Tag(name="RBoardController", description="Routine Board Rest Controller")
public class RBoardController {
	
	@Autowired
	private RoutineService rService;
	
	// 루틴 목록 보여주기
	@GetMapping("")
	@Operation(summary="루틴 목록 보여주기", description="루틴 전체 목록을 반환한다.")
	public ResponseEntity<List<Routine>> routineList(){
		List<Routine> list = rService.getAllRoutine();
		
		// 여기서 운동 리스트도 가져와야 목록 게시판에서 보여줄 것 같은데... 흠
		for(int i=0; i<list.size(); i++) {
			list.get(i).getRoutineId();
		}
		return new ResponseEntity<>(list, HttpStatus.OK); 
	}
	
	// 루틴 상세보기
	@GetMapping("/{routine_id}")
	@Operation(summary="루틴 상세보기", description="해당 루틴의 상세정보를 반환한다.")
	public ResponseEntity<Map<String, Object>> getRoutine(@PathVariable("routine_id") int routineId) {
		
		Map<String, Object> map = new HashMap<>();
		// 루틴 정보 가져오기
		Routine routine = rService.getOneRoutine(routineId);
		
		// 루틴의 운동 리스트 가져오기
		List<Exercise> exList = rService.getAllExercise(routineId);
		
		map.put("routine", routine);
		map.put("exList", exList);
		
		return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	
	// 해당 루틴의 각 운동 정보 상세보기 (운동 한 개 정보)
	@GetMapping("/{routine_id}/{ex_id}")
	@Operation(summary="해당 루틴의 각 운동 정보 보여주기", description="해당 루틴의 각 운동 정보를 반환한다.")
	public ResponseEntity<Exercise> exerciseInfo(@PathVariable("routine_id") int routineId, @PathVariable("ex_id") int exId){
		Exercise ex = rService.getExerciseInfo(routineId, exId);
		
		if (ex == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(ex, HttpStatus.OK);
	}
	
	
	
}

package com.bodybuddy.fit.model.service;

import java.util.List;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;

public interface RoutineService {
	
	// 루틴 전체 목록 보여주기
	List<Routine> getAllRoutine();
	
	// 루틴 상세보기
	Routine getOneRoutine(int routineId);
	
	// 해당 루틴의 운동 정보 리스트 가져오기
	List<Exercise> getAllExercise(int routineId);
	
	// 해당 루틴의 각 운동 상세보기 (운동 한 개)
	Exercise getExerciseInfo(int routineId, int exerciseId);
	
	// 루틴 등록
	int addRoutine(Routine routine);
	
	// 루틴 등록 - 운동 등록
	int addExercise(Exercise exercise);
	
	// 내 루틴에 추가
	
	// 검색 및 페이징

}

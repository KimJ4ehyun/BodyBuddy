package com.bodybuddy.fit.model.service;

import java.util.List;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;

public interface RoutineService {
	
	// 루틴 전체 목록 보여주기
	List<Routine> getAllRoutine();
	
	// 루틴 상세보기 (모달)?
	
	// 해당 루틴의 각 운동 상세보기
	Exercise getExerciseInfo(int routineId, int exerciseId);
	
	// 찜 추가
	
	// 찜 해제
	
	// 내 루틴에 추가
	
	// 검색 및 페이징

}

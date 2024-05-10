package com.bodybuddy.fit.model.dao;

import java.util.List;
import java.util.Map;

import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;

public interface RoutineDao {
	
	// 루틴 전체 목록 보여주기
	List<Routine> selectAll();
	
	// 해당 루틴의 각 운동 정보 상세보기
	Exercise selectExercise(Map<String, Integer> map);
	
	// 찜 추가
	
	
	// 찜 해제
	
	// 내 루틴에 추가
	
	// 검색 및 페이징

}

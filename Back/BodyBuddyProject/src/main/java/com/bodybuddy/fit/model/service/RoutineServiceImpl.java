package com.bodybuddy.fit.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bodybuddy.fit.model.dao.RoutineDao;
import com.bodybuddy.fit.model.dto.Exercise;
import com.bodybuddy.fit.model.dto.Routine;

@Service
public class RoutineServiceImpl implements RoutineService {
	
	private final RoutineDao routineDao;
	
	@Autowired
	public RoutineServiceImpl(RoutineDao routineDao) {
		this.routineDao = routineDao;
	}	

	// 루틴 전체 목록
	@Override
	public List<Routine> getAllRoutine() {
		return routineDao.selectAll();
	}

	// 해당 루틴의 운동 정보 리스트 가져오기
	@Override
	public List<Exercise> getAllExercise(int routineId) {
		return routineDao.selectAllExercise(routineId);
	}


	// 해당 루틴의 각 운동 상세 정보 (운동 한 개)
	@Override
	public Exercise getExerciseInfo(int routineId, int exerciseId) {
		Map<String, Integer> map = new HashMap<>();
		map.put("routineId", routineId);
		map.put("exerciseId", exerciseId);
		return routineDao.selectExercise(map);
	}
	
	// 루틴 상세보기
	@Override
	public Routine getOneRoutine(int routineId) {
		return routineDao.selectOne(routineId);
	}

	// 루틴 등록
	@Override
	public int addRoutine(Routine routine) {
		return routineDao.insertRoutine(routine);
	}

	// 루틴 등록 - 운동 등록
	@Override
	public int addExercise(Exercise exercise) {
		return routineDao.insertExercise(exercise);
	}

	



}

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

	// 해당 루틴의 각 운동 상세 정보
	@Override
	public Exercise getExerciseInfo(int routineId, int exerciseId) {
		Map<String, Integer> map = new HashMap<>();
		map.put("routineId", routineId);
		map.put("exerciseId", exerciseId);
		return routineDao.selectExercise(map);
	}

}

package com.bodybuddy.fit.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bodybuddy.fit.model.dto.User;
import com.bodybuddy.fit.model.dto.Wish;
import com.bodybuddy.fit.model.service.WishService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/routine/wish")
public class WishController {
	
	@Autowired
	private WishService wService;
	
	// 찜 추가
	@GetMapping("/add-heart/{routine_id}")
	public ResponseEntity<?> addWish(@PathVariable("routine_id") int routineId, HttpSession session){
		
		Map<String, Integer> map = new HashMap<>();
		
		User loginUser = (User) session.getAttribute("user");
		if (loginUser == null) {
			map.put("result", -1);
		}
		
		String loginId = "";
		
		if (loginUser != null) {
			loginId = loginUser.getUserId();
		}
		
		Wish wish = new Wish();
		
		wish.setRoutineId(routineId);
		wish.setUserId(loginId);
		
		int check = wService.wishCheck(wish);
		
		int n = 0;
		
		// 찜이 되어있지 않은 상태이면 찜 추가
		if (check == 0) {
			n = wService.addWish(wish);
		}
		map.put("result", n);
		
		return new ResponseEntity<>(map, HttpStatus.CREATED);
	}


	// 찜 해제
	@GetMapping("/delete-heart/{routine_id}")
	public ResponseEntity<?> delWish(@PathVariable("routine_id") int routineId, HttpSession session){
		Map<String, Integer> map = new HashMap<>();
		
		User loginUser = (User)session.getAttribute("user");
		if (loginUser == null) {
			map.put("result", -1);
		}
		
		String loginId = "";
		
		if (loginUser != null) {
			loginId = loginUser.getUserId();
		}
		
		Wish wish = new Wish();
		wish.setRoutineId(routineId);
		wish.setUserId(loginId);
		
		int n = wService.delWish(wish);
		
		map.put("result", n);
		
		return new ResponseEntity<>(map, HttpStatus.CREATED);
	}
	
	
}

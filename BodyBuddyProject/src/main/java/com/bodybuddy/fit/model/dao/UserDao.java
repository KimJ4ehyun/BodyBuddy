package com.bodybuddy.fit.model.dao;

import java.util.List;
import java.util.Map;

import com.bodybuddy.fit.model.dto.User;

public interface UserDao {
	// 회원가입
	int join(User user);
	// 로그인
	User login(Map<String, String> map);
	// ID로 검색(ID 중복 확인)
	User searchById(String userId);
	// nickname으로 검색(닉네임 중복 확인)
	User searchByNickname(String nickname);
	// 회원 정보 수정
	int edit(User user);
	// 회원 탈퇴
	int withdrawal(String userId);
	// 전체 회원 검색
	List<User> searchAll();
}

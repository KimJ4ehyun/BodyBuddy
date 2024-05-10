package com.bodybuddy.fit.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
public class Routine {
	
	private int routineId;
	private String userId;
	private String routineTitle;
	private String date;
	private String description;
	
	
}

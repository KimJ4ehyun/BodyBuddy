package com.bodybuddy.fit.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

	// CORS 에러 전역 처리 
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("http://localhost:5173")
		.allowedMethods("POST", "GET", "PUT", "DELETE")
		.allowCredentials(true);
	}
}

//@Override
//public void addCorsMappings(CorsRegistry registry) {
//	registry.addMapping("/**")
//	.allowedOrigins("http://localhost:5173")
//	.allowedMethods("POST", "GET", "PUT", "DELETE", "OPTIONS")
//	.allowedHeaders("*")
//	.allowCredentials(true);
//}
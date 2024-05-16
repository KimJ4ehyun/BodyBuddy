package com.bodybuddy.fit.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

	// CORS 에러 전역 처리 
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOriginPatterns("http://localhost:5173")
		.allowedMethods("POST", "GET", "PUT", "DELETE", "OPTIONAL")
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
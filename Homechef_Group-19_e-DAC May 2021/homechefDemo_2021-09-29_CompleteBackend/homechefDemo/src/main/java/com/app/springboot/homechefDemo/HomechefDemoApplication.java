package com.app.springboot.homechefDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories("com.app.springboot.homechefDemo.dao")
public class HomechefDemoApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(HomechefDemoApplication.class, args);
	}
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
            return application.sources(HomechefDemoApplication.class); // Replace DemoApplication with your main class
    }
	

}

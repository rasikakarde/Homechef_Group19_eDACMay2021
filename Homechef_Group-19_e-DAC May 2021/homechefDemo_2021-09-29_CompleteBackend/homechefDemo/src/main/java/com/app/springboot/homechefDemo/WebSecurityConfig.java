package com.app.springboot.homechefDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.app.springboot.homechefDemo.service.ChefLoginDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	
	
	@Autowired
    private CustomAuthenticationProvider authProvider;
	
	@Bean
    public UserDetailsService userDetailsService() {
        return new ChefLoginDetailsServiceImpl();
    }
     
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
     
   /* @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
         
        return authProvider;
    }*/
    
   /* @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    	auth.inMemoryAuthentication()
        .withUser("user1").password(passwordEncoder().encode("user1Pass"))
        .authorities("ROLE_USER");
    }*/
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider);
    }
 
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
        .authorizeRequests()
        .antMatchers("/chefs/**","/homechefDemo","/processRegister/**","/basic/**","/getAllChefDetailsById/**","/updateChef/**").permitAll()
        	//.antMatchers(HttpMethod.OPTIONS,"/").permitAll()
        	.anyRequest().permitAll()        	
            .and()
            .formLogin()
            	.loginProcessingUrl("/perform_login")
            	.usernameParameter("emailid")
            	.defaultSuccessUrl("/chefs").permitAll()
            .and()
            .logout().permitAll();
    }
    
   
   /*@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()   
        .authorizeRequests()
        .antMatchers("/basic").permitAll()
        .antMatchers("/chefs").permitAll()
        .antMatchers("/homechefDemo").permitAll()                
        .anyRequest().authenticated()
                .and()
            //.formLogin().and()
            .httpBasic();
    }*/
	
	
	

}

package com.app.springboot.homechefDemo;

import java.util.ArrayList;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
	
	@Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
      String username = authentication.getName();
      String password = authentication.getCredentials().toString();

      if ("emailid".equals(username) && "password".equals(password)) {
            return new UsernamePasswordAuthenticationToken(username, password,new ArrayList<>());
       } else {
            throw new BadCredentialsException("Authentication failed");
       }
    }

    @Override
    public boolean supports(Class<?>aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }

}

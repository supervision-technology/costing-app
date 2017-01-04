package com.mac.masapp.app.login;

import com.mac.masapp.app.login.respond.LoginRequest;
import com.mac.masapp.app.login.respond.LoginRespond;
import java.util.Base64;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nidura Prageeth
 */
@RestController
@RequestMapping("/api")
public class LoginController {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginRespond login(@RequestBody LoginRequest loginRequest) {
        String key = loginRequest.getUsername() + ":" + loginRequest.getPassword();
        String token = Base64.getEncoder().encodeToString(key.getBytes());

        LoginRespond loginRespond = new LoginRespond();

        return loginRespond;
    }
}

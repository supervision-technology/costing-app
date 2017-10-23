/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.security.user;

import com.mac.costingapp.app.security.user.model.User;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> users(){
        return userService.users();
    }
    
    @RequestMapping(value = "/save-user",method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    
    @RequestMapping(value = "/delete-user/{indexNo}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Integer indexNo){
        userService.deleteUser(indexNo);
    }
    
    @RequestMapping(path = "/login/{userName}", method = RequestMethod.GET)
    public User getUser(@PathVariable String userName) {
        return userService.findByName(userName);
    }

}

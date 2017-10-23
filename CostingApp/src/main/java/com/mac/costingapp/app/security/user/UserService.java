/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.security.user;

import com.mac.costingapp.app.security.user.model.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Nidura Prageeth
 */
@Service
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> users() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Integer indexNo) {
        userRepository.delete(indexNo);
    }

    public User findByName(String userName) {
        return userRepository.findByName(userName);
    }

}

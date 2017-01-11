/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment;

import com.mac.costingapp.app.emblishment.model.Emblishment;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nidura Prageeth
 */
@RestController
@CrossOrigin
@RequestMapping("/api/emblishment")
public class EmblishmentController {

    @Autowired
    private EmblishmentService emblishmentService;

    @RequestMapping(value = "/all-emblishment",method = RequestMethod.GET)
    public List<Emblishment> allEmblishment() {
        return emblishmentService.allEmblishment();
    }
}

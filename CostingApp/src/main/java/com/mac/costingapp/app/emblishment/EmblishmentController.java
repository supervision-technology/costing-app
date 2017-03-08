/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment;

import com.mac.costingapp.app.emblishment.model.Embellishment;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nidura Prageeth
 */
@RestController
@CrossOrigin
@RequestMapping("/api/embellishment")
public class EmblishmentController {

    @Autowired
    private EmblishmentService emblishmentService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Embellishment> allEmblishment() {
        return emblishmentService.allEmblishment();
    }

    @RequestMapping(value = "/save-embellishment", method = RequestMethod.POST)
    public Embellishment saveEmbellishment(@RequestBody Embellishment embellishment) {
        return emblishmentService.saveEmbellishment(embellishment);
    }
    
    @RequestMapping(value = "/delete-embellishment/{indexNo}",method = RequestMethod.DELETE)
    public void deleteEmbellshment(@PathVariable Integer indexNo){
        emblishmentService.deleteEmbellishment(indexNo);
    }
}

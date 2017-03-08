/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.tier;

import com.mac.costingapp.app.tier.model.Tier;
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
@RequestMapping("/api/tiers")
public class TierController {
    
    @Autowired
    private TierService tierService;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Tier> allTiers(){
        return tierService.allTiers();
    }
    
    @RequestMapping(value = "/save-tier", method = RequestMethod.POST)
    public Tier saveTier(@RequestBody Tier tier){
        return tierService.saveTier(tier);
    }
    
    @RequestMapping(value = "/delete-tier/{indexNo}",method = RequestMethod.DELETE)
    public void deleteTier(@PathVariable Integer indexNo){
        tierService.deleteTier(indexNo);
        
    }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.tier;

import com.mac.costingapp.app.tier.model.Tier;
import java.io.Serializable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Nidura Prageeth
 */
public interface TierRepository extends JpaRepository<Tier, Integer>{

//    public List<Tier> findByStyleCategory(String CATEGORY);
    
}

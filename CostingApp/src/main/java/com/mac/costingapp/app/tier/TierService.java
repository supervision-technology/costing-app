/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.tier;

import com.mac.costingapp.app.style.model.Style;
import com.mac.costingapp.app.tier.model.Tier;
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
public class TierService {

    @Autowired
    private TierRepository tierRepository;

    public List<Tier> allTiers() {
        return tierRepository.findAll();
    }

}

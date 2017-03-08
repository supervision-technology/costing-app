/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.model.Style;
import com.mac.costingapp.app.style.model.Summary;
import com.mac.costingapp.app.tier.TierRepository;
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
public class StyleService {

    @Autowired
    private StyleRepository styleRepository;

    @Autowired
    private TierRepository tierRepository;

    public List<Style> allStyles() {
        return styleRepository.findAll();
    }

    public List<Style> allStyle(String category) {
        return styleRepository.findByCategory(category);
    }

    public Style saveStyle(Style style) {
        Tier tier = tierRepository.findOne(1);
        style.setTier(tier);

        Style style1 = styleRepository.save(style);
        System.out.println(style1);

        Summary summary = style.getSummary();
        summary.setStyle(style1);
        System.out.println(summary);

        return style1;
    }

}

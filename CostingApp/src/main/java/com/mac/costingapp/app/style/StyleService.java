/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.model.Style;
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

    List<Style> allStyle(String category) {
        return styleRepository.findByCategory(category);
    }

    List<Style> styles() {
       return styleRepository.findAll();
    }

}

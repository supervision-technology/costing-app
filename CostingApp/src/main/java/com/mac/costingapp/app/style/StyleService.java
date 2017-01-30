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

    private static final String BOTTOM = "bottom";
    private static final String TOP = "top";

    @Autowired
    private StyleRepository styleRepository;

    public List<Style> allBottomStyles() {
        return styleRepository.findByCategory(BOTTOM);
    }

    public List<Style> allTopStyles() {
        return styleRepository.findByCategory(TOP);
    }
//    public List<Style> allStyle(){
//        return styleRepository.findAll();
//    }

    public List<Style> findAll() {
        return styleRepository.findAll();
//        for (Style style : findAll) {
//            byte[] picture = style.getPicture();
////            System.out.println(style.getPicture());
//        }
//        return findAll;
    }
}

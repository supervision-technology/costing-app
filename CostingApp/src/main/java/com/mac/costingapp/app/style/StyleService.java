/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.model.Style;
import com.mac.costingapp.app.style.model.Summary;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Nidura Prageeth
 */
@Service
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class StyleService {

    @Autowired
    private StyleRepository styleRepository;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss-S");

    public List<Style> allStyles() {
        return styleRepository.findAll();
    }

    public List<Style> allStyle(String category) {
        return styleRepository.findByCategory(category);
    }

    public Style saveStyle(Style style) {
//        style.setSummary(style.getSummary());

        System.out.println(style);
        return styleRepository.save(style);
    }

    public void deleteStyle(Integer indexNo) {
        styleRepository.delete(indexNo);

    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment;

import com.mac.costingapp.app.emblishment.model.Emblishment;
import java.util.ArrayList;
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
public class EmblishmentService {

    @Autowired
    private EmblishmentRepository emblishmentRepository;

    public List<Emblishment> allEmblishment() {
        return emblishmentRepository.findAll();
    }

    public Emblishment saveEmbellishment(Emblishment embellishment) {
        return emblishmentRepository.save(embellishment);
    }

    public void deleteEmbellishment(Integer indexNo) {
        emblishmentRepository.delete(indexNo);
    }

    public List<Object> embellishmentTier() {
        return emblishmentRepository.embellishmentTier();
    }

    public List<Object> findByEmbellishment(String embellishment) {
        return emblishmentRepository.findByType(embellishment);
    }

}

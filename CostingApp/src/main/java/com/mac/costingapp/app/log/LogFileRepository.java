/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.log;


import com.mac.costingapp.app.log.model.MLog;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author my
 */
public interface LogFileRepository extends JpaRepository<MLog, Integer>{

    public List<MLog> findByStyleNo(int styleNo);
    
}

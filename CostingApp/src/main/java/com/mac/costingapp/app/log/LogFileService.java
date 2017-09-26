/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.log;

import com.mac.costingapp.app.log.model.MLog;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author my
 */

@Service
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class LogFileService {
    
    @Autowired
    private LogFileRepository logFileRepository;
    
    public List<MLog> findAll(){
      return logFileRepository.findAll();
    }
    
    public List<MLog> findByStyleNo(int styleNo){
      return logFileRepository.findByStyleNo(styleNo);
    }
    
    public MLog saveLogFile(MLog logFile){
        return logFileRepository.save(logFile);
    }
}

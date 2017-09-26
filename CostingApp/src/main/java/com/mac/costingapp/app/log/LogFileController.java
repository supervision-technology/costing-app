/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.log;

import com.mac.costingapp.app.log.model.MLog;
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
 * @author my
 */
@RestController
@CrossOrigin
@RequestMapping("/api/logfile")
public class LogFileController {
    
    @Autowired
    private LogFileService logFileService;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<MLog> findAll(){
       return logFileService.findAll();
    }
    
    @RequestMapping(value = "/style/{styleNo}",method = RequestMethod.GET)
    public List<MLog> findByStyleNo(@PathVariable int styleNo){
       return logFileService.findByStyleNo(styleNo);
    }
    
    @RequestMapping(value = "/save-logfile",method = RequestMethod.GET)
    public MLog saveLogFile(@RequestBody MLog logFile){
       return logFileService.saveLogFile(logFile);
    }
    
}

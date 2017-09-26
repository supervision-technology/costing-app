/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.log.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 *
 * @author my
 */
@Entity
@Table(name = "log_file")
public class MLog implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "index_no")
    private Integer indexNo;

    @Column(name = "user")
    private int user;
    
    @Column(name = "styleNo")
    private int styleNo;
  
    @Column(name = "update_date")
    private Date updateDate;
    
    @Column(name = "status")
    private String status;

    public MLog() {
    }

    public MLog(Integer indexNo, int user, int styleNo, Date updateDate, String status) {
        this.indexNo = indexNo;
        this.user = user;
        this.styleNo = styleNo;
        this.updateDate = updateDate;
        this.status = status;
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public int getStyleNo() {
        return styleNo;
    }

    public void setStyleNo(int styleNo) {
        this.styleNo = styleNo;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    
    
}

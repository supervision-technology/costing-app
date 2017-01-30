/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Nidura Prageeth
 */
@Entity
@Table(name = "embellishment_cost")
public class Emblishment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "index_no")
    private Integer indexNo;

    @Column(name = "picture")
    private byte picture;

    @Column(name = "price")
    private double price;
    
    @Column(name = "type")
    private String type;
    
    @Column(name = "smv")
    private double smv;
    
    @Column(name = "charge_out")
    private double chargeOut;
    
    public Emblishment() {
    }

    public Emblishment(Integer indexNo, byte picture, double price, String type, double smv, double chargeOut) {
        this.indexNo = indexNo;
        this.picture = picture;
        this.price = price;
        this.type = type;
        this.smv = smv;
        this.chargeOut = chargeOut;
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public byte getPicture() {
        return picture;
    }

    public void setPicture(byte picture) {
        this.picture = picture;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getSmv() {
        return smv;
    }

    public void setSmv(double smv) {
        this.smv = smv;
    }

    public double getChargeOut() {
        return chargeOut;
    }

    public void setChargeOut(double chargeOut) {
        this.chargeOut = chargeOut;
    }
    
    
}

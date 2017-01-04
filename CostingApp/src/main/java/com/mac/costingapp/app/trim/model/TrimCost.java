package com.mac.masapp.app.trim.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.trim.model.TrimCost")
@Table(name = "trim_cost")
public class TrimCost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer indexNo;
    private double price;
    private String picture;

    public TrimCost() {
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

}

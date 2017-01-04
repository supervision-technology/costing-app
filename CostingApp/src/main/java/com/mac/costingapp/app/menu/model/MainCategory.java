package com.mac.masapp.app.menu.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.menu.model.MainCategory")
@Table(name = "main_category")
public class MainCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer indexNo;
    private String name;

    public MainCategory() {
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

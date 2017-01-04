package com.mac.masapp.app.tier.model;

import com.mac.masapp.app.menu.model.MainCategory;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.tier.model.Tier")
@Table(name = "tier")
public class Tier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int indexNo;
    private String name;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "main_category")
    private MainCategory maincategory;

    public Tier() {
    }

    public int getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(int indexNo) {
        this.indexNo = indexNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MainCategory getMaincategory() {
        return maincategory;
    }

    public void setMaincategory(MainCategory maincategory) {
        this.maincategory = maincategory;
    }

}

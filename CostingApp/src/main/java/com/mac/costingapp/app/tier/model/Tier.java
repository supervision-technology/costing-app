/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.tier.model;

import com.mac.costingapp.app.style.model.Style;
import java.io.Serializable;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Nidura Prageeth
 */
@Entity
@Table(name = "tier")
public class Tier implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "index_no")
    private Integer indexNo;

    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tier", fetch = FetchType.EAGER, orphanRemoval = true)
    private Collection<Style> style;

    public Tier() {
    }

    public Tier(Integer indexNo, String name, Collection<Style> style) {
        this.indexNo = indexNo;
        this.name = name;
        this.style = style;
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

    public Collection<Style> getStyle() {
        return style;
    }

    public void setStyle(Collection<Style> style) {
        this.style = style;
    }

}

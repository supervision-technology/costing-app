package com.mac.masapp.app.cm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.cm.model.CmCost")
@Table(name = "cm_cost")
public class CmCost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer indexNo;
    private double smv;
    private double cor;

    public CmCost() {
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public double getSmv() {
        return smv;
    }

    public void setSmv(double smv) {
        this.smv = smv;
    }

    public double getCor() {
        return cor;
    }

    public void setCor(double cor) {
        this.cor = cor;
    }

}

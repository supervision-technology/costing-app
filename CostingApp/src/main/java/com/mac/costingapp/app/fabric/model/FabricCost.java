package com.mac.masapp.app.fabric.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.fabric.model.FabricCost")
@Table(name = "fabric_cost")
public class FabricCost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer indexNo;
    @Column(name = "solid_price")
    private double solidPrice;
    @Column(name = "solid_consumption")
    private double solidConsumption;
    @Column(name = "print_price")
    private double printPrice;
    @Column(name = "print_consumption")
    private double printConsumption;

    public FabricCost() {
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public double getSolidPrice() {
        return solidPrice;
    }

    public void setSolidPrice(double solidPrice) {
        this.solidPrice = solidPrice;
    }

    public double getSolidConsumption() {
        return solidConsumption;
    }

    public void setSolidConsumption(double solidConsumption) {
        this.solidConsumption = solidConsumption;
    }

    public double getPrintPrice() {
        return printPrice;
    }

    public void setPrintPrice(double printPrice) {
        this.printPrice = printPrice;
    }

    public double getPrintConsumption() {
        return printConsumption;
    }

    public void setPrintConsumption(double printConsumption) {
        this.printConsumption = printConsumption;
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mac.costingapp.app.style.model.Style;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author Nidura Prageeth
 */
@Entity
@Table(name = "summary")
public class Summary implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "index_no")
    private Integer indexNo;

    @JsonIgnore
    @JoinColumn(name = "style", referencedColumnName = "index_no")
    @OneToOne(optional = false, fetch = FetchType.EAGER)
    private Style style;

    @Column(name = "trim_cost_solid")
    private double trimCostSoild;
    
    @Column(name = "trim_cost_print")
    private double trimCostPrint;

    @Column(name = "fabric_cost_print")
    private double fabricCostPrint;

    @Column(name = "fabric_cost_solid")
    private double fabricCostSolid;

    @Column(name = "machine_emb_solid")
    private double machineEmbSoild;
    
    @Column(name = "machine_emb_print")
    private double machineEmbPrint;

    @Column(name = "hand_emb_solid")
    private double handEmbSolid;
    
    @Column(name = "hand_emb_print")
    private double handEmbPrint;

    @Column(name = "cm_cost_solid")
    private double cmCostSolid;
    
    @Column(name = "cm_cost_print")
    private double cmCostPrint;

    @Column(name = "packing_cost_solid")
    private double packingCostSolid;
    
    @Column(name = "packing_cost_print")
    private double packingCostPrint;

    @Column(name = "initial_fob_solid")
    private double initialFobSolid;

    @Column(name = "initial_fob_print")
    private double initialFobPrint;

    @Column(name = "retail_price_solid")
    private double retailPriceSolid;

    @Column(name = "retail_price_print")
    private double retailPricePrint;

    @Column(name = "sea_imu_solid")
    private int seaImuSolid;

    @Column(name = "sea_imu_print")
    private int seaImuPrint;

    @Column(name = "air_imu_solid")
    private int airImuSolid;

    @Column(name = "air_imu_print")
    private int airImuPrint;

    public Summary() {
    }

    public Summary(Integer indexNo, Style style, double trimCostSoild, double trimCostPrint, double fabricCostPrint, double fabricCostSolid, double machineEmbSoild, double machineEmbPrint, double handEmbSolid, double handEmbPrint, double cmCostSolid, double cmCostPrint, double packingCostSolid, double packingCostPrint, double initialFobSolid, double initialFobPrint, double retailPriceSolid, double retailPricePrint, int seaImuSolid, int seaImuPrint, int airImuSolid, int airImuPrint) {
        this.indexNo = indexNo;
        this.style = style;
        this.trimCostSoild = trimCostSoild;
        this.trimCostPrint = trimCostPrint;
        this.fabricCostPrint = fabricCostPrint;
        this.fabricCostSolid = fabricCostSolid;
        this.machineEmbSoild = machineEmbSoild;
        this.machineEmbPrint = machineEmbPrint;
        this.handEmbSolid = handEmbSolid;
        this.handEmbPrint = handEmbPrint;
        this.cmCostSolid = cmCostSolid;
        this.cmCostPrint = cmCostPrint;
        this.packingCostSolid = packingCostSolid;
        this.packingCostPrint = packingCostPrint;
        this.initialFobSolid = initialFobSolid;
        this.initialFobPrint = initialFobPrint;
        this.retailPriceSolid = retailPriceSolid;
        this.retailPricePrint = retailPricePrint;
        this.seaImuSolid = seaImuSolid;
        this.seaImuPrint = seaImuPrint;
        this.airImuSolid = airImuSolid;
        this.airImuPrint = airImuPrint;
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public double getTrimCostSoild() {
        return trimCostSoild;
    }

    public void setTrimCostSoild(double trimCostSoild) {
        this.trimCostSoild = trimCostSoild;
    }

    public double getTrimCostPrint() {
        return trimCostPrint;
    }

    public void setTrimCostPrint(double trimCostPrint) {
        this.trimCostPrint = trimCostPrint;
    }

    public double getFabricCostPrint() {
        return fabricCostPrint;
    }

    public void setFabricCostPrint(double fabricCostPrint) {
        this.fabricCostPrint = fabricCostPrint;
    }

    public double getFabricCostSolid() {
        return fabricCostSolid;
    }

    public void setFabricCostSolid(double fabricCostSolid) {
        this.fabricCostSolid = fabricCostSolid;
    }

    public double getMachineEmbSoild() {
        return machineEmbSoild;
    }

    public void setMachineEmbSoild(double machineEmbSoild) {
        this.machineEmbSoild = machineEmbSoild;
    }

    public double getMachineEmbPrint() {
        return machineEmbPrint;
    }

    public void setMachineEmbPrint(double machineEmbPrint) {
        this.machineEmbPrint = machineEmbPrint;
    }

    public double getHandEmbSolid() {
        return handEmbSolid;
    }

    public void setHandEmbSolid(double handEmbSolid) {
        this.handEmbSolid = handEmbSolid;
    }

    public double getHandEmbPrint() {
        return handEmbPrint;
    }

    public void setHandEmbPrint(double handEmbPrint) {
        this.handEmbPrint = handEmbPrint;
    }

    public double getCmCostSolid() {
        return cmCostSolid;
    }

    public void setCmCostSolid(double cmCostSolid) {
        this.cmCostSolid = cmCostSolid;
    }

    public double getCmCostPrint() {
        return cmCostPrint;
    }

    public void setCmCostPrint(double cmCostPrint) {
        this.cmCostPrint = cmCostPrint;
    }

    public double getPackingCostSolid() {
        return packingCostSolid;
    }

    public void setPackingCostSolid(double packingCostSolid) {
        this.packingCostSolid = packingCostSolid;
    }

    public double getPackingCostPrint() {
        return packingCostPrint;
    }

    public void setPackingCostPrint(double packingCostPrint) {
        this.packingCostPrint = packingCostPrint;
    }

    public double getInitialFobSolid() {
        return initialFobSolid;
    }

    public void setInitialFobSolid(double initialFobSolid) {
        this.initialFobSolid = initialFobSolid;
    }

    public double getInitialFobPrint() {
        return initialFobPrint;
    }

    public void setInitialFobPrint(double initialFobPrint) {
        this.initialFobPrint = initialFobPrint;
    }

    public double getRetailPriceSolid() {
        return retailPriceSolid;
    }

    public void setRetailPriceSolid(double retailPriceSolid) {
        this.retailPriceSolid = retailPriceSolid;
    }

    public double getRetailPricePrint() {
        return retailPricePrint;
    }

    public void setRetailPricePrint(double retailPricePrint) {
        this.retailPricePrint = retailPricePrint;
    }

    public int getSeaImuSolid() {
        return seaImuSolid;
    }

    public void setSeaImuSolid(int seaImuSolid) {
        this.seaImuSolid = seaImuSolid;
    }

    public int getSeaImuPrint() {
        return seaImuPrint;
    }

    public void setSeaImuPrint(int seaImuPrint) {
        this.seaImuPrint = seaImuPrint;
    }

    public int getAirImuSolid() {
        return airImuSolid;
    }

    public void setAirImuSolid(int airImuSolid) {
        this.airImuSolid = airImuSolid;
    }

    public int getAirImuPrint() {
        return airImuPrint;
    }

    public void setAirImuPrint(int airImuPrint) {
        this.airImuPrint = airImuPrint;
    }

    
}

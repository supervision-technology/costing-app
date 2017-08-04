package com.mac.costingapp.app.style.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mac.costingapp.app.emblishment.model.Emblishment;
import com.mac.costingapp.app.tier.model.Tier;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 *
 * @author Nidura Prageeth
 */
@Entity
@Table(name = "style")
public class Style implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "index_no")
    private Integer indexNo;

//    @JoinColumn(name = "machine_embellishment", referencedColumnName = "index_no")
//    @ManyToOne(optional = true, fetch = FetchType.EAGER)
    @Column(name = "machine_embellishment")
    private Integer machineEmbellishment;

    @Column(name = "hand_embellishment")
    private Integer handEmbellishment;

    @Column(name = "category")
    private String category;

    @Column(name = "style_no")
    private String styleNo;

    @Column(name = "picture")
    private String picture;

    @JoinColumn(name = "tier", referencedColumnName = "index_no")
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Tier tier;

    @Column(name = "solid_price")
    private double solidPrice;

    @Column(name = "solid_consumption")
    private double solidConsumption;

    @Column(name = "print_price")
    private double printPrice;

    @Column(name = "print_consumption")
    private double printConsumption;

    @Column(name = "trim_cost")
    private double trimCost;

    @Column(name = "smv")
    private double smv;

    @Column(name = "cor")
    private double cor;

    @Column(name = "liner_price")
    private double linerPrice;

    @Column(name = "liner_consumption")
    private double linerConsumption;

    @Column(name = "cup_cost")
    private double cupCost;

    @Column(name = "hand_embellishment_cost")
    private double handEmbellishmentCost;

    @Column(name = "machine_embellishment_cost")
    private double machineEmbellishmentCost;
    
    @Column(name = "cup")
    private String cup;
    
    @Column(name = "cockies")
    private String cockies;
    
    @JoinColumn(name = "summary",referencedColumnName = "index_no")
    @OneToOne(fetch = FetchType.EAGER)
    private Summary summary;
    
    @Column(name = "measure")
    private String measure;
    
    @Column(name = "date")
    private Date date;

    public Style() {
    }

    public Style(Integer indexNo, Integer machineEmbellishment, Integer handEmbellishment, String category, String styleNo, String picture, Tier tier, double solidPrice, double solidConsumption, double printPrice, double printConsumption, double trimCost, double smv, double cor, double linerPrice, double linerConsumption, double cupCost, double handEmbellishmentCost, double machineEmbellishmentCost, String cup, String cockies, Summary summary, String measure, Date date) {
        this.indexNo = indexNo;
        this.machineEmbellishment = machineEmbellishment;
        this.handEmbellishment = handEmbellishment;
        this.category = category;
        this.styleNo = styleNo;
        this.picture = picture;
        this.tier = tier;
        this.solidPrice = solidPrice;
        this.solidConsumption = solidConsumption;
        this.printPrice = printPrice;
        this.printConsumption = printConsumption;
        this.trimCost = trimCost;
        this.smv = smv;
        this.cor = cor;
        this.linerPrice = linerPrice;
        this.linerConsumption = linerConsumption;
        this.cupCost = cupCost;
        this.handEmbellishmentCost = handEmbellishmentCost;
        this.machineEmbellishmentCost = machineEmbellishmentCost;
        this.cup = cup;
        this.cockies = cockies;
        this.summary = summary;
        this.measure = measure;
        this.date = date;
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public Integer getMachineEmbellishment() {
        return machineEmbellishment;
    }

    public void setMachineEmbellishment(Integer machineEmbellishment) {
        this.machineEmbellishment = machineEmbellishment;
    }

    public Integer getHandEmbellishment() {
        return handEmbellishment;
    }

    public void setHandEmbellishment(Integer handEmbellishment) {
        this.handEmbellishment = handEmbellishment;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStyleNo() {
        return styleNo;
    }

    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Tier getTier() {
        return tier;
    }

    public void setTier(Tier tier) {
        this.tier = tier;
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

    public double getTrimCost() {
        return trimCost;
    }

    public void setTrimCost(double trimCost) {
        this.trimCost = trimCost;
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

    public double getLinerPrice() {
        return linerPrice;
    }

    public void setLinerPrice(double linerPrice) {
        this.linerPrice = linerPrice;
    }

    public double getLinerConsumption() {
        return linerConsumption;
    }

    public void setLinerConsumption(double linerConsumption) {
        this.linerConsumption = linerConsumption;
    }

    public double getCupCost() {
        return cupCost;
    }

    public void setCupCost(double cupCost) {
        this.cupCost = cupCost;
    }

    public double getHandEmbellishmentCost() {
        return handEmbellishmentCost;
    }

    public void setHandEmbellishmentCost(double handEmbellishmentCost) {
        this.handEmbellishmentCost = handEmbellishmentCost;
    }

    public double getMachineEmbellishmentCost() {
        return machineEmbellishmentCost;
    }

    public void setMachineEmbellishmentCost(double machineEmbellishmentCost) {
        this.machineEmbellishmentCost = machineEmbellishmentCost;
    }

    public String getCup() {
        return cup;
    }

    public void setCup(String cup) {
        this.cup = cup;
    }

    public String getCockies() {
        return cockies;
    }

    public void setCockies(String cockies) {
        this.cockies = cockies;
    }

    public Summary getSummary() {
        return summary;
    }

    public void setSummary(Summary summary) {
        this.summary = summary;
    }

    public String getMeasure() {
        return measure;
    }

    public void setMeasure(String measure) {
        this.measure = measure;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

   
}

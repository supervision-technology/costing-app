package com.mac.masapp.app.style.model;

import com.mac.masapp.app.cm.model.CmCost;
import com.mac.masapp.app.fabric.model.FabricCost;
import com.mac.masapp.app.tier.model.Tier;
import com.mac.masapp.app.trim.model.TrimCost;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Nidura Prageeth
 */
@Entity(name = "com.mac.masapp.app.style.model.Style")
@Table(name = "style")
public class Style {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer indexNo;
    @Column(name = "style_no")
    private String styleNo;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "tier")
    private Tier tier;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "fabric_cost")
    private FabricCost fabricCost;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "cm_cost")
    private CmCost cmCost;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "trim_cost")
    private TrimCost trimCost;
    private String picture;

    public Style() {
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public String getStyleNo() {
        return styleNo;
    }

    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    public Tier getTier() {
        return tier;
    }

    public void setTier(Tier tier) {
        this.tier = tier;
    }

    public FabricCost getFabricCost() {
        return fabricCost;
    }

    public void setFabricCost(FabricCost fabricCost) {
        this.fabricCost = fabricCost;
    }

    public CmCost getCmCost() {
        return cmCost;
    }

    public void setCmCost(CmCost cmCost) {
        this.cmCost = cmCost;
    }

    public TrimCost getTrimCost() {
        return trimCost;
    }

    public void setTrimCost(TrimCost trimCost) {
        this.trimCost = trimCost;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
    
    
    

}

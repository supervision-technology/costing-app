package com.mac.masapp.app.tier.respond;

import com.mac.masapp.app.tier.model.Tier;
import java.util.List;

/**
 * @author Nidura Prageeth
 */
public class Tiers {

    private List<Tier> tiers;

    public Tiers(List<Tier> tiers) {
        this.tiers = tiers;
    }

    public List<Tier> getTiers() {
        return tiers;
    }

    public void setTiers(List<Tier> tiers) {
        this.tiers = tiers;
    }
}

package com.mac.masapp.app.tier;

import com.mac.masapp.app.tier.respond.Tiers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Nidura Prageeth
 */
@RequestMapping("/api")
@RestController
public class TierController {

    @Autowired
    private TierRepository tierRepository;

    @RequestMapping(value = "/tier", method = RequestMethod.GET)
    public Tiers getAll() {
        Tiers tiers;

        tiers = new Tiers(tierRepository.findAll());
        return tiers;
    }

}

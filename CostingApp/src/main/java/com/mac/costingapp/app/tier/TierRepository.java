package com.mac.masapp.app.tier;

import com.mac.masapp.app.tier.model.Tier;
import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Nidura Prageeth
 */
public interface TierRepository extends JpaRepository<Tier, Integer> {

}

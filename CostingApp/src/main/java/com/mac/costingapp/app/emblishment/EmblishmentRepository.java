/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment;

import com.mac.costingapp.app.emblishment.model.Emblishment;
import java.io.Serializable;
import java.util.List;
import javax.websocket.server.PathParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Nidura Prageeth
 */
public interface EmblishmentRepository extends JpaRepository<Emblishment, Integer> {

    @Query(value = "select embellishment_cost.tier\n"
            + " from embellishment_cost \n"
            + " group by embellishment_cost.tier", nativeQuery = true)
    public List<Object> embellishmentTier();

    @Query(value = "select embellishment_cost.tier\n"
            + "from embellishment_cost\n"
            + "where embellishment_cost.type=:type\n"
            + "group by embellishment_cost.tier", nativeQuery = true)
    public List<Object> findByType(@Param("type") String type);

}

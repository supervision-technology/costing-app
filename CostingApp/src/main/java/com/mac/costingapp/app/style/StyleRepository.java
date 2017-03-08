package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.model.Style;
import java.io.Serializable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Nidura Prageeth
 */
public interface StyleRepository extends JpaRepository<Style, Integer> {

    public List<Style> findByCategory(String BOTTOM);

}

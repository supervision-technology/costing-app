package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.model.Style;
import java.io.Serializable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Nidura Prageeth
 */
public interface StyleRepository extends JpaRepository<Style, Integer> {

    public List<Style> findByCategory(String BOTTOM);

}

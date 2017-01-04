package com.mac.masapp.app.menu;

import com.mac.masapp.app.menu.model.MainCategory;
import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Nidura Prageeth
 */
public interface MainCategoryRepository extends JpaRepository<MainCategory, Integer> {

}

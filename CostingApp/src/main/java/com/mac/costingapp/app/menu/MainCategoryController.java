package com.mac.masapp.app.menu;

import com.mac.masapp.app.menu.model.MainCategory;
import com.mac.masapp.app.menu.respond.Categorys;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Nidura Prageeth
 */
@RequestMapping("/api")
@RestController
public class MainCategoryController {

    @Autowired
    private MainCategoryRepository MainCategoryRepository;

    @RequestMapping(value = "/menu-category", method = RequestMethod.GET)
    public Categorys getAll() {
        Categorys categorys;

        categorys = new Categorys(MainCategoryRepository.findAll());
        return categorys;
    }
}

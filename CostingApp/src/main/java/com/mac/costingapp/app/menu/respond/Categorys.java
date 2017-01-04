package com.mac.masapp.app.menu.respond;

import com.mac.masapp.app.menu.model.MainCategory;
import java.util.List;

/**
 * @author Nidura Prageeth
 */
public class Categorys {

    private List<MainCategory> categorys;

    public Categorys(List<MainCategory> categorys) {
        this.categorys = categorys;
    }

    public List<MainCategory> getCategorys() {
        return categorys;
    }

    public void setCategorys(List<MainCategory> categorys) {
        this.categorys = categorys;
    }

}

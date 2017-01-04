package com.mac.masapp.app.style.respond;

import com.mac.masapp.app.style.model.Style;
import java.util.List;

/**
 * @author Nidura Prageeth
 */
public class Styles {

    private List<Style> styles;

    public Styles(List<Style> styles) {
        this.styles = styles;
    }

    public List<Style> getStyles() {
        return styles;
    }

    public void setStyles(List<Style> styles) {
        this.styles = styles;
    }
}

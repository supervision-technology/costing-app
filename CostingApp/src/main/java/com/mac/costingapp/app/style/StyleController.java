package com.mac.masapp.app.style;

import com.mac.masapp.app.style.model.Style;
import com.mac.masapp.app.style.respond.Styles;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Nidura Prageeth
 */
@RequestMapping("/api")
@RestController
public class StyleController {

    @Autowired
    private StyleRepository styleRepository;

    @RequestMapping(value = "/style", method = RequestMethod.GET)
    public Styles getAll() {
        Styles styles;

        styles = new Styles(styleRepository.findAll());
        return styles;
    }

}

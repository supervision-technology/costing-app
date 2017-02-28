package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.StyleService;
import com.mac.costingapp.app.style.model.Style;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Nidura Prageeth
 */
@RestController
@CrossOrigin
@RequestMapping("/api/style")
public class StyleController {

    @Autowired
    private StyleService styleService;

    @RequestMapping(value = "/all-style/{category}", method = RequestMethod.GET)
    public List<Style> AllTopStyles(@PathVariable String category) {
        return styleService.allStyle(category);
    }
    
     @RequestMapping(method = RequestMethod.GET)
    public List<Style> AllStyles() {
        return styleService.styles();
    }
}

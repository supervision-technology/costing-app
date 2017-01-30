package com.mac.costingapp.app.style;

import com.mac.costingapp.app.style.StyleService;
import com.mac.costingapp.app.style.model.Style;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @RequestMapping(value = "/all-bottom-style", method = RequestMethod.GET)
    public List<Style> AllBottomStyles() {
        return styleService.allBottomStyles();
    }

    @RequestMapping(value = "/all-top-style", method = RequestMethod.GET)
    public List<Style> AllTopStyles() {
        return styleService.allTopStyles();
    }

    @RequestMapping(value = "/all-style", method = RequestMethod.GET)
    public List<Style> AllStyle() {
        return styleService.findAll();
    }

}

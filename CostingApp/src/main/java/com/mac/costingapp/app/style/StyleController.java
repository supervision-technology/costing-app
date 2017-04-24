package com.mac.costingapp.app.style;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mac.costingapp.app.style.StyleService;
import com.mac.costingapp.app.style.model.Style;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Nidura Prageeth
 */
@RestController
@CrossOrigin
@RequestMapping("/api/style")
public class StyleController {

    @Autowired
    private StyleService styleService;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss-S");

    @RequestMapping(method = RequestMethod.GET)
    public List<Style> AllStyles() {
        return styleService.allStyles();
    }

    @RequestMapping(value = "/all-style/{category}", method = RequestMethod.GET)
    public List<Style> AllStyle(@PathVariable String category) {
        return styleService.allStyle(category);
    }

//    @RequestMapping(value = "/save-style", method = RequestMethod.POST)
//    public Style saveStyle(@RequestBody Style style) {  
//        return styleService.saveStyle(style);
//    }
    @RequestMapping(value = "/save-style", method = RequestMethod.POST)
    public @ResponseBody
    Style saveStyle(@RequestPart("ad") String adString, @RequestPart("file") MultipartFile file) {

        Style saveStyle = new Style();
        
        try {
            Style jsonAd = new ObjectMapper().readValue(adString, Style.class);
            
            System.out.println(jsonAd.toString());
            System.out.println(jsonAd.getSummary().toString());
//
//            String fileName = dateFormat.format(new Date());
//            fileName = file.getOriginalFilename();
//
//            System.out.println(fileName);
//
//            File uploadFile = new File("./src/site/images", fileName);
//            if (!uploadFile.getParentFile().exists()) {
//                uploadFile.getParentFile().mkdirs();
//            }
//
//            uploadFile.createNewFile();
//
//            FileOutputStream fileOutputStream = new FileOutputStream(uploadFile);
//            fileOutputStream.write(file.getBytes());
            
            
//            jsonAd.setPicture(fileName);
            saveStyle = styleService.saveStyle(jsonAd);
            
        } catch (Exception a) {
            a.printStackTrace();
        }

        return saveStyle;
    }

    @RequestMapping(value = "/delete-style/{indexNo}", method = RequestMethod.DELETE)
    public void deleteStyle(@PathVariable Integer indexNo) {
        styleService.deleteStyle(indexNo);
    }

}

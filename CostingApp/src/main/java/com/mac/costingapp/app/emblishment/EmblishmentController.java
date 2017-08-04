/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.emblishment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mac.costingapp.app.emblishment.model.Emblishment;
import com.mac.costingapp.app.style.model.Style;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Nidura Prageeth
 */
@RestController
@CrossOrigin
@RequestMapping("/api/embellishment")
public class EmblishmentController {

    @Autowired
    private EmblishmentService emblishmentService;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss-S");

    @RequestMapping(method = RequestMethod.GET)
    public List<Emblishment> allEmblishment() {
        return emblishmentService.allEmblishment();
    }

    @RequestMapping(value = "/emb-tier", method = RequestMethod.GET)
    public List<Object> embellishmentTier() {
        return emblishmentService.embellishmentTier();
    }

    @RequestMapping(value = "/find-tier/{embellishment}", method = RequestMethod.GET)
    public List<Object> findByEmbellishment(@PathVariable String embellishment) {
        return emblishmentService.findByEmbellishment(embellishment);
    }

    @RequestMapping(value = "/save-embellishment2", method = RequestMethod.POST)
    public Emblishment saveEmbellishment(@RequestBody Emblishment embellishment) {
        return emblishmentService.saveEmbellishment(embellishment);
    }

    @RequestMapping(value = "/save-embellishment", method = RequestMethod.POST)
    public @ResponseBody
    Emblishment saveEmbellishment(@RequestPart("ad") String adString, @RequestPart("file") MultipartFile file) {

        Emblishment emblishment = new Emblishment();

        try {
            Emblishment jsonAd = new ObjectMapper().readValue(adString, Emblishment.class);

            String fileName = dateFormat.format(new Date());
            fileName = file.getOriginalFilename();

            File uploadFile = new File("./src/site/images", fileName);
            if (!uploadFile.getParentFile().exists()) {
                uploadFile.getParentFile().mkdirs();
            }

            uploadFile.createNewFile();

            FileOutputStream fileOutputStream = new FileOutputStream(uploadFile);
            fileOutputStream.write(file.getBytes());

            jsonAd.setPicture(fileName);
            emblishment = emblishmentService.saveEmbellishment(jsonAd);

        } catch (Exception a) {
            a.printStackTrace();
        }

        return emblishment;
    }

    @RequestMapping(value = "/delete-embellishment/{indexNo}", method = RequestMethod.DELETE)
    public void deleteEmbellshment(@PathVariable Integer indexNo) {
        emblishmentService.deleteEmbellishment(indexNo);
    }
}

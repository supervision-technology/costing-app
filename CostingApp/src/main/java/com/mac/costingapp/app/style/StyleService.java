/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style;

import com.mac.costingapp.app.log.LogFileRepository;
import com.mac.costingapp.app.log.model.MLog;
import com.mac.costingapp.app.style.model.Gmail;
import com.mac.costingapp.app.style.model.Style;
import com.mac.costingapp.app.style.model.Summary;
import com.mac.costingapp.app.tier.TierRepository;
import com.mac.costingapp.app.tier.model.Tier;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Nidura Prageeth
 */
@Service
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class StyleService {

    @Autowired
    private StyleRepository styleRepository;

    @Autowired
    private SummaryRepository summaryRepository;

    @Autowired
    private TierRepository tierRepository;

    @Autowired
    private LogFileRepository logFileRepository;

    @Autowired
    private JavaMailSender mailSender;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss-S");

    public List<Style> allStyles() {
        return styleRepository.findAll();
    }

    public List<Style> allStyle(String category) {
        return styleRepository.findByCategory(category);
    }

    @Transactional
    public Style saveStyle(Style style) {
        if (style.getSummary() == null) {
            MLog log = new MLog();
            log.setStyleNo(Integer.parseInt(style.getStyleNo()));
            log.setStatus("update");
            log.setUpdateDate(style.getDate());
            log.setUser(1);
            logFileRepository.save(log);

            return styleRepository.save(style);
        } else {
            MLog log = new MLog();
            log.setStyleNo(Integer.parseInt(style.getStyleNo()));
            log.setStatus("update");
            log.setUpdateDate(style.getDate());
            log.setUser(1);
            logFileRepository.save(log);

            Style save = new Style();

            Summary summary = summaryRepository.save(style.getSummary());
            if (style.getTier().getName() == null) {
                style.setTier(null);
                style.setSummary(summary);
                save = styleRepository.save(style);
            } else {
                style.setSummary(summary);
                save = styleRepository.save(style);
            }
            return save;
        }
    }

    public void deleteStyle(Integer indexNo, int styleNo) {
        MLog log = new MLog();
        log.setStyleNo(styleNo);
        log.setStatus("delete");
        log.setUpdateDate(new Date());
        log.setUser(1);
        logFileRepository.save(log);
        styleRepository.delete(indexNo);

    }

    @Transactional
    public Style saveStyle(Integer indexNo, String tier) {
        Style findOne = styleRepository.findByIndexNo(indexNo);

        Tier tier1 = tierRepository.findByName(tier);
        findOne.setTier(tier1);
        return styleRepository.save(findOne);
    }

    @Transactional
    public Style saveNewStyle(Style style) {
        MLog log = new MLog();
        log.setStyleNo(Integer.parseInt(style.getStyleNo()));
        log.setStatus("update");
        log.setUpdateDate(style.getDate());
        log.setUser(1);
        logFileRepository.save(log);

        return styleRepository.save(style);
    }

    public boolean sendMail(Gmail mail) {
        try {
            MimeMessagePreparator messagePreparator = mimeMessage -> {
                MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
                messageHelper.setFrom("kaizencommittee1@gmail.com");
                messageHelper.setTo(mail.getMailTo());
//                      messageHelper.setTo("niduraprageeth@gmail.com");
                messageHelper.setSubject(mail.getSubject());
//                messageHelper.setText(mail.getMailBody());
                mimeMessage.setContent(mail.getMailBody(), "text/html");
            };
            mailSender.send(messagePreparator);
            return true;
        } catch (MailException e) {
            System.out.println(e);
        }
        return false;
    }

}

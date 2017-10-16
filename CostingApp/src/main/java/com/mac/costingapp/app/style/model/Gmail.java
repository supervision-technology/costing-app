/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.costingapp.app.style.model;

/**
 *
 * @author my
 */
public class Gmail {
    
    private String subject;
    private String mailBody;
    private String mailTo;

    public Gmail() {
    }

    public Gmail(String subject, String mailBody, String mailTo) {
        this.subject = subject;
        this.mailBody = mailBody;
        this.mailTo = mailTo;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMailBody() {
        return mailBody;
    }

    public void setMailBody(String mailBody) {
        this.mailBody = mailBody;
    }

    public String getMailTo() {
        return mailTo;
    }

    public void setMailTo(String mailTo) {
        this.mailTo = mailTo;
    }

   

   
}

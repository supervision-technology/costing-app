package com.mac.masapp.app.login.respond;

/**
 *
 * @author Nidura Prageeth
 */
public class LoginRespond {

    private Integer indexNo;
    private String token;
    private String type;

    public LoginRespond() {

    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

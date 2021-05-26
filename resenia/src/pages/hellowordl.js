import App, {Component} from 'react';
import React from "react";
import {useTranslation} from "react-i18next";
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Register from '../pages/Register';
import {signup} from '../pages/hellow1';
const baseUrl = "http://localhost:8080/api/users/signup/"; 




export default function Headers(){
    const [t,i18n]=useTranslation("global");
    return(
        <div>
            <div className="containerPrincipal">
        <div className="containerSecundario">
        
          <br />
            <label>{t("header.Platform")} </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="platform"
              //onChange={() => register.()}
             // onChange={this.handleChange}
             // onChange= {this.handleChange.bind(this)}
            />
            <br />
       
            <label>{t("header.Password")} </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              //onChange={this.handleChange.bind(this)}  
            />
           <br/>
           
            <button className="btn btn-primary" onClick={() =>{signup()} }>{t("header.Signup")}</button>
            
          </div>
        </div>
            <br/><br/>
            <button onClick={()=> i18n.changeLanguage("es")}> ES </button>
            <button onClick={()=> i18n.changeLanguage("en")}> EN </button>
        </div>
    );}

import App, {Component} from 'react';
import React from "react";
import {useTranslation} from "react-i18next";
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
const baseUrl = "http://localhost:8080/api/users/signup/"; 




export default function Headers(){
    const [t,i18n]=useTranslation("global");
    let history = useHistory();
    return(
    
            <div className="containerPrincipal">
        <div className="containerSecundario">
        
          <br />
            <label>{t("header.greetings")} </label>
            <br />

            <br />
       
           
           <br/>
           <button className="btn btn-primary" 
           onClick={() => history.push('/register',"es")}
        
           >
             {t("header.toRegister")}</button>
           
           </div>
          <br/><br/>
            <button 
            onClick={()=> i18n.changeLanguage("es")}
            > ES </button>
            <button 
            onClick={()=> i18n.changeLanguage("fr")}
            > FR </button>
            <button 
            onClick={()=> i18n.changeLanguage("en")}
            > EN </button>
 
        </div>
    );}

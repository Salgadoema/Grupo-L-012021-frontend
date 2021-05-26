import React from "react";
import {useTranslation} from "react-i18next";
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Register from '../pages/Register';
const baseUrl = "http://localhost:8080/api/users/signup/"; 


class hellow1 extends React.Component{
        constructor(props){
            super(props);
            this.signUp = this.signUp.bind(this);
            this.handleChange=this.handleChange.bind(this);
          }
          
   
    state={
        form:{          
            platform:'',   
            password: ''
            
        }
    }

    //metodo para capturar lo que los usuarios escriben en los imput
  handleChange=async e=>{

        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
                
            }
        });console.log("algo")
    }
    
  signUp=async()=>{
  
        await axios.post(baseUrl, {  platform: this.state.form.platform,
                                             password: (this.state.form.password)
                                            })
        .then(response=>{
            
            console.log(response.data.props);
            localStorage.setItem('token', response.token)
            this.props.history.push({
                pathname: '/login',
                search: '?query=abc',
                Headers: {"Accept": "application/json"},
                state: { detail: response.data }
              })
    
        })
        .catch(error=>{
            console.log(error);
        })
        .then((response)=>{
              window.location.reload(false);
        })
        }
    
    
}  
export function signup(){return this.signUp()}
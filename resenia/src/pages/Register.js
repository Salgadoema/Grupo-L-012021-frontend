import App, {Component} from 'react';
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import hoistStatics from 'hoist-non-react-statics';

import {useTranslation, withTranslation} from "react-i18next";


const baseUrl = "http://localhost:8080/api/users/signup/"; 

class Register extends Component{
   
    //capturar lo que los usuarios escriben
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
        });
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
        
        //history.push('/login');
        window.location.reload(false);
    })
}

   
    render() {
  
        return (
           
    <div className="containerPrincipal">
        <div className="containerSecundario">
        
          <br />
            <label>Platform: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="platform"
              onChange={this.handleChange}
            />
            <br />
       
            <label>Password: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}  
            />
           
            <button className="btn btn-primary" onClick={() => this.signUp()}>signup</button>
            
          </div>
          <br/><br/>
 
        </div>

        );
    }   

}



export default Register;

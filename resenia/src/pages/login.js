
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


const baseUrl = "http://localhost:8080/api/users/byUser/";

class login extends Component{
    
     myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
          x.style.display = "nome";
        } else {
          x.style.display = "block";
        }
      }

    getApikey=async()=>{
        var x = document.getElementById("myDIV");
         if (x.innerHTML === "Your api Key: press button") {
              x.innerHTML = this.props.location.state.detail['token'];
        } else {
                  x.innerHTML = "Your api Key: press button";
        }

        
        console.log(this.props.location.state.detail);

        console.log(this.props.location.state.detail['token']);
 
        
    }
    
  
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
        

          <div>Te registraste Exitosamente! </div>

          
            <button className="btn btn-primary" onClick={()=> this.getApikey()}>Obtener Api Key</button>
            <div id="myDIV">
            Your api Key: press button
            </div>
          </div>
        </div>
      </div>
        );
    }

}

export default login;
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


const baseUrl = "http://localhost:8080/api/users/byUser/";

class login extends Component{
    constructor(props) {
        super(props);
    
        this.state = { copySuccess: '' }
      }
    
      copyToClipboard = (e) => {
      //  this.textArea.select();
     const key= this.props.location.state.detail['token'];
      //  document.execCommand('copy');
        navigator.clipboard.writeText(key);
 
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
        e.target.setAttribute( 'src', '/copyOk.png');
        e.target.setAttribute('alt', 'dcopy succesfully');
      };

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
 //<button className="btn btn-primary" onClick={()=> this.getApikey()}>Obtener Api Key</button>
        
    }
    
  
    render() {
        return (
            <div>
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
  
            <div id="myDIV">
           
     
            </div>
            <img  className= "mg"src= "/key.png" alt="image"></img> 
            <br></br>
            <img onClick={this.copyToClipboard} className= "Img"src= "/copy.png" alt="image"></img> 


           
          </div>
        </div>
      </div>
      
       </div>
        );
    }

}

export default login;
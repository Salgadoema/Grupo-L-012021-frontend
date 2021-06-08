import  {Component} from 'react';
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';



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
                                             password: md5(this.state.form.password)
                                 })
        .then(response=>{  
            console.log(response.data.props);
            localStorage.setItem('token', response.token)
            this.props.history.push({
                pathname: '/apiKey',
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
    <div>
    <img className= "formImg"src= "/home.png" alt="image" onClick={()=> this.props.history.push('/home')}></img>
    <div className="containerPrincipal">
        
        <div className="containerSecundario">
        
          <br />
          <img className= "Img"src= "/Person.png" alt="image"></img>
            <input
              type="text"
              className="form-control"
              name="platform"
              onChange={this.handleChange}
            />
            <br />
            <img className= "Img"src= "/Password.png" alt="image"></img>
              
            <input
              type="password"
              className="form-control"
              name="password"
              autofocus
              onChange={this.handleChange}  
            />
           <br/><br/>
            
            <img className= "formImg"src= "/play.png" alt="image" onClick={() => this.signUp()}></img>
            
           
          </div>
          
           
        </div>
        </div>
        );
    }   

}


export default Register;

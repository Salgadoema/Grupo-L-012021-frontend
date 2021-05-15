import App, {Component} from 'react';
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';


const baseUrl = "http://localhost:8080/api/users/signup/"; 

  
class Register extends Component{
 
    
    //capturar lo que los usuarios escriben
    state={
        form:{             
            firstname: '',
            surname: '',
            username: '',
            password: '',
            platform:''
        }
    }


    //metodo para capturar lo que los usuarios escriben en los imput
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
                
            }
        });console.log(this.state.form)
    }

    signUp=async()=>{
        await axios.post(baseUrl, {params:{  firstname: this.state.form.firstname,
                                             surname:this.state.form.surname,
                                             username: this.state.form.username, 
                                             password: md5(this.state.form.password),
                                             platform: this.state.form.platform
                                            }})
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
          <label>First Name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={this.handleChange}
            />
            <br />
            <label>Surname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="surname"
              onChange={this.handleChange}
            />
            <br />
            <label>User: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
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
            <button className="btn btn-primary" onClick={()=> this.signUp()}>Sign Up</button>
          </div>
        </div>
      </div>
        );
    }

}

export default Register;
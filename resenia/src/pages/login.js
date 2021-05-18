import App, {Component} from 'react';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';


const baseUrl = "http://localhost:8080/api/users/byUser/";

class login extends Component{
    //capturar lo que los usuarios escriben
    state={
        form:{
            username: '',
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

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params:{username: this.state.form.username}})//, password: md5(this.state.form.password)}})
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
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
        );
    }

}

export default login;
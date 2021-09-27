import "./Login.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Input from "../../../Input/Input";
import axios from "axios";

 


class Login extends Component {
    state = {
        error: '',
        success: false
    }

    

    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8080/api/users/login', {
                email: e.target.email.value,
                password: e.target.password.value,
            })
            .then(response => {
                console.log('Login Success: ', response.data);
                
                sessionStorage.setItem('jwtToken', response.data.token);
               
                this.setState({ success: true })
                this.props.checkToken()
                this.props.history.push('/')
                
            })
            .catch(error => {
                this.setState({
                    success: false,
                    error: error.response.data
                });
            });
    }

   
    render() {

        console.log("history", this.props)

        return (
            <main className="login-page">
                <form className="login" onSubmit={this.handleSubmit}>
                    <h1 className="login__title">Log in</h1>

                    <Input type="text" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />

                    <button className="login__button">Log in</button>

                    {this.state.error && <div className="login__message">{this.state.error}</div>}
                    {this.state.success && <Redirect to={{
                        pathname: "/",
                        state: {jwtToken: true}
                    }}/>}
                </form>
                <p>
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>
            </main>
        );
    }
}

export default Login;

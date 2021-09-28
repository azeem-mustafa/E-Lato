import "./Signup.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../../Input/Input";
import axios from "axios";

class Signup extends Component {
    state = {
        error: '',
        success: false
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Sign up the user with these fields:
        // { first_name, last_name, phone, address, email, password }
        axios
            .post('http://localhost:8080/api/users/register', {
                email: e.target.email.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                phone: e.target.phone.value,
                address: e.target.address.value,
                type: e.target.type.value

            })

            .then((response) => {
                this.setState({
                    success: true,
                    error: ''
                });
                e.target.reset();
            })
            .catch((error) => {
                this.setState({
                    success: false,
                    error: error.response.data
                });
            })
    }

    render() {

        return (
            <main className="signup-page">
                <div className="signup-page__bg-img">
                </div>
                <form className="signup" onSubmit={this.handleSubmit}>
                    <h1 className="signup__title">Sign up</h1>

                    <Input type="text" name="first_name" label="First name" />
                    <Input type="text" name="last_name" label="Last name" />
                    <Input type="text" name="phone" label="Phone" />
                    <Input type="text" name="address" label="Address" />
                    <Input type="text" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />
                    <Input type='text' name='type' label='Are you a "Student" or "Teacher" ' />


                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up! You can now <Link to="/login">log in</Link></div>}
                    {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
                <p className='signup__login'>
                    Have an account? <Link to="/login">Log in</Link>
                </p>
            </main>
        );
    }
}

export default Signup;
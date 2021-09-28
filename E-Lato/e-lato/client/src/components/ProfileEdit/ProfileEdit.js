import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './_profile_edit.scss';
import Input from '../Input/Input';

class ProfileEdit extends Component {
    state = {
        user: null,
        failedAuth: true,
        error: '',
        success: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('jwtToken');

        axios
            .post('http://localhost:8080/api/users/current', {

                hobbies: e.target.hobbies.value,

            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            ).then((response) => {
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

    componentDidMount() {
        const token = sessionStorage.getItem('jwtToken');

        if (!token) {
            return;
        }

        // Make a request to profile endpoint
        axios
            .get("http://localhost:8080/api/users/current", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('You got in!', response.data);

                this.setState({
                    failedAuth: false,
                    user: response.data
                });
            })
            .catch(error => {
                this.setState({
                    failedAuth: true
                });
            })
    }

    handleLogout = () => {
        sessionStorage.removeItem('jwtToken');
        this.setState({
            user: null,
            failedAuth: true,

        });
        this.props.checkToken()
        this.props.history.push('/')
    }

    render() {

        if (this.state.failedAuth) {
            return (
                <main className="dashboard">
                    <p>
                        You must be logged in to see this page. <Link to="/login">Log in</Link>
                    </p>
                </main>
            );
        }

        if (!this.state.user) {
            return (
                <main className="dashboard">
                    <p>Loading...</p>
                </main>
            );
        }

        // const { first_name, last_name, email, phone, address, type, hobbies } = this.state.user;

        return (
            <main className="edit-dashboard">
                <div className='edit-dashboard__bg-img'>
                </div>
                <h1 className="edit-dashboard__title">Edit your details</h1>

                <form className="edit-dashboard__form" onSubmit={this.handleSubmit}>
                    <div className='edit-dashboard__form-input-flex'>
                        <Input type='text' name='hobbies' label='hobbies ' />
                        <button className="edit-dashboard__button">Edit </button>

                        {this.state.success && <div className="signup__message">Signed up! You can now <Link to="/login">log in</Link></div>}
                        {this.state.error && <div className="signup__message">{this.state.error}</div>}
                    </div>
                </form>

                <button className="edit-dashboard__logout" onClick={this.handleLogout}>
                    Log out
                </button>
            </main>
        );
    }
}

export default ProfileEdit;

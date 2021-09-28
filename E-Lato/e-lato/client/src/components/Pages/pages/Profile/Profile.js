import "./Profile.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileAvatar from '../../../../assets/images/icons/logos/istockphoto-486983232-612x612.jpg';

class Profile extends Component {
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


                hobbies: e.target.hobbies.value

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

        const { first_name, last_name, email, phone, address, hobbies } = this.state.user;

        return (
            <main className="dashboard">
                <div className='dashboard__bg-img'>
                </div>
                <h1 className="dashboard__title"> Hey, {first_name}! 👋</h1>
                <h2 className='dashboard__sub-title' >
                    Welcome back! Lets learn something new!
                </h2>

                <div className='dashboard__info-box'>
                    <img className='dashboard__profile-image' src={ProfileAvatar} alt='placeholder' />
                    <h2>{first_name} {last_name} </h2>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                    <p>Interests: {hobbies}</p>
                </div>

                <div className='dashboard__edit-box'>
                    <Link to='/messages'>
                        Messages
                    </Link>
                    <Link to='/profile/edit'>
                        Edit Account Details
                    </Link>
                    <p>Help</p>
                    <p>Customize</p>

                    <button className="dashboard__logout" onClick={this.handleLogout}>
                        Log out
                    </button>

                </div>
            </main>
        );
    }
}

export default Profile;
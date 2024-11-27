import { Link } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Auth.css';
import { useRef } from 'react';
import axios from 'axios';
import { signin } from '../../Apis/fakeStoreProdApis';
function Login() {

    const authRef = useRef(null);

    async function handleFormSubmit(formDetails) {
        try{
            await axios.post(signin(),{
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            })
        } catch(error){
            console.log(error);
            authRef.current.resetFormData();
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth onSubmit={handleFormSubmit} ref={authRef}/>
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link  to="/signup">
                     Donot have an Account? Sign Up Here
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Login;
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Auth.css';
import { useRef } from 'react';
import axios from 'axios';
import { signin } from '../../Apis/fakeStoreProdApis';
import { useCookies } from 'react-cookie';



function Login() {

    const authRef = useRef(null);
    const navigate = useNavigate();

    const[token,setToken] = useCookies(['jwt-token']);

    async function handleFormSubmit(formDetails) {
        try{
            const response = await axios.post(signin(),{
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            });
             console.log(response.data);
             setToken('jwt-token',response.data.token,{httpOnly: true});
             navigate('/');
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
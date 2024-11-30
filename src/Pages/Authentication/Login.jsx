import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Auth.css';
import { useContext, useRef } from 'react';
import axios from 'axios';
import { signin } from '../../Apis/fakeStoreProdApis';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import UserContext from '../../Context/UserContext';


function Login() {

    const authRef = useRef(null);
    const navigate = useNavigate();

    const[token,setToken] = useCookies(['jwt-token']);

    const {setUser} = useContext(UserContext);

    async function handleFormSubmit(formDetails) {
        try{
            const response = await axios.post(signin(),{
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            },{withCredentials: true});
             console.log(response.data,token);
             setToken('jwt-token',response.data.token,{httpOnly: true});
             const tokenDetails = jwtDecode(response.data.token);
             setUser({username: tokenDetails.user, id:tokenDetails.id});
             console.log(tokenDetails);
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

/**
 * Now there is one bug that is when we refresh application after login username and logout will gone beacuse we setup httponly
 * param : true which makes cookie inaccessible in browser 
 */
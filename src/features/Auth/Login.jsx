import { signInWithPopup } from "firebase/auth"
import { _provider, auth } from "../../firebase"
import { useAuth } from "./AuthProvider";
import './auth.scss';
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const { login } = useAuth(); // Using the login function from context
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleLogin = async () => {
        try {
            await login();
            navigate("/home"); // Redirect to the home page after login
        } catch (error) {
            console.error("Login Error:", error);
        }
    };
    return (

        <>
            <section className="wrapper">
                <div className="content">
                    <header>
                        <h1>Welcome back</h1>
                    </header>
                    <section>

                        <form action="" className="login-form">
                            <div className="input-group"><button onClick={handleLogin}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="to be removed" />
                                Login with Google</button></div>
                        </form>
                    </section>
                </div>
            </section>


        </>
    )


}

export default LoginPage;
import { useState } from "react";

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault()
        setPasswordShown(!passwordShown)
    }

    return (
        <div className="loginForm">
            <form >
                <input type="text" name="username" placeholder="username..." />
                <input type={passwordShown ? "text" : "password"} name="password" placeholder="password..." />
                <button onClick={togglePassword}>Show Password</button>
                <input type="submit" value="Log In" />
            </form>
        </div >
    )
}

export default Login;
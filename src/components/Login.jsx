import { useState } from "react";

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    return (
        <div className="loginForm">
            <form >
                <input type="text" name="username" placeholder="username..." />
                <input type={passwordShown ? "text" : "password"} name="password" placeholder="password..." />
                <input type="submit" value="Log In" />
            </form>
        </div >
    )
}

export default Login;
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [login, setLog] = useState("login")
    console.log("only button changes but, whole header component will re render")

    return (
        <div id="header">
            <img
                id="logo"
                src={LOGO_URL}
            ></img>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li id="login" onClick={() => {
                        setLog(login == "login" ? "logoff" : "login")
                    }} >{login}</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
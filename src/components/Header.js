import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </nav>
        </div>
    );
};

export default Header;
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const NavbarAuth = () => {
    return (
        <div className="navbar-auth">
            <Link to="/signup">
                <Button title="Sign up" type="light" />
            </Link>
            <Link to="/login">
                <Button title="Login" type="primary" />
            </Link>
        </div>
    );
};

export default NavbarAuth;

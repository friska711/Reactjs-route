import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLocalStorage } from "../hooks/localStorage";

export const Layout = (props) => {
    const navigate = useNavigate
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage ('login', false);
    useEffect (() => {
        !isLoggedIn && navigate('/login')
    }, [])
    const logout = () => {
        setIsLoggedIn (false);
        navigate('/login')
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/luas-lingkaran">Luas Lingkaran</Link>
            <Link to="/nilai">Nilai</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/counter-two-number">Counter Two Number</Link>
            <Link to="/form-text">Form Text</Link>
            <button onClick={logout}>Logout</button>
            { props.children}
        </div>
    )
}
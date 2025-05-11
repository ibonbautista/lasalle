import {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import logo from '../../assets/logo.png';
import { Outlet } from "react-router-dom";

import './Auth.css';

function Auth() {
    const [isRegister,setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setformData] = useState({
        email: "",
        password: ""
    });
    const {onLogin,userData} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserEmail = (e) => {
        const userEmail = e.target.value;
        const newState = {...formData, email: userEmail};
        setformData(newState);
    }
    const handleUserPassword = (e) => {
        const userPassword = e.target.value;
        const newState = {...formData, password: userPassword};
        setformData(newState);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onLogin(formData.email, formData.password);
        setError(result.error);
        if (!result.error) {
            const role = result.user.role; // Asumiendo que el rol se guarda en el token
            if (role) {
                // Redirigir según el rol
                if (role === "admin") {
                    navigate("/admin");  // Redirige al dashboard del admin
                } else if (role === "player") {
                    navigate("/player");  // Redirige al dashboard del jugador
                } else if (role === "coach") {
                    navigate("/coach");  // Redirige al dashboard del coach
                } else {
                    navigate("/member");  // Redirige al dashboard del miembro
                }
            }
        }
    }

    return (
        <section className="auth-section">
            <p className='error'>{error}</p>
            <form className="login-form" onSubmit={handleSubmit}>
            <img src={logo} alt="logo" />
                <label for="email" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleUserEmail} placeholder="Email" />
                <label for="password" htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleUserPassword} placeholder="Password" />
                <button>Enter</button>
            <div className="register-link">
                <p> Want to join the family?<br/><Link to="/memberregister">Become a member</Link></p>
            </div>
            </form>
        </section>
    )
}

export default Auth;
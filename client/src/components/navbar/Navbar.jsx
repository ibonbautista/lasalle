import { removeToken } from '../../utils/localStorage.js';
import { useContext,useEffect,useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import { AuthContext, AuthProvider } from '../../context/AuthContext.jsx';
import './Navbar.css';

function Navbar () {

    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();

    const getDashboardPath = () => {
        switch (userData?.role) {
            case "admin":
                return "/admin";
            case "coach":
                return "/coach";
            case "player":
                return "/player";
            case "member":
                return "/member";
            default:
                return "/";
        }
    };

    useEffect(() => {
        // Redirige automáticamente si no hay un usuario válido
        if (!userData || userData?.role === "default") {
            navigate("/");
        }
    }, [userData, navigate]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cambiar el estado de apertura/cierre del menú
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Cerrar el menú cuando se hace clic en un item
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Manejar el evento de clic en el botón de hamburguesa
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Cerrar el menú cuando se redimensiona a un tamaño mayor a 768px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
        <nav className="navbar">
            {/* Botón hamburguesa para pantallas pequeñas */}
      <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú desplegable */}
      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}`}>Info</NavLink>
                </li>
            {userData?.role === "admin" && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/users`}>Users</NavLink>
                </li>
            )}

            {(userData?.role === "admin" || userData?.role === "coach" || userData?.role === "member") && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/players`}>Players</NavLink>
                </li>
            )}

            {(userData?.role === "admin" || userData?.role === "player" || userData?.role === "member") && (
                <li className={"navbar-item"} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/coaches`}>Coaches</NavLink>
                </li>
            )}

            {(userData?.role === "admin" || userData?.role === "member") && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/teams`}>Teams</NavLink>
                </li>
            )}

            {userData?.role === "admin" && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/members`}>Members</NavLink>
                </li>
            )}

            <li className={"navbar-item "}  onClick={closeMenu}>
                <NavLink to={`${getDashboardPath()}/matches`}>Matches</NavLink>
            </li>

            {(userData?.role === "admin" || userData?.role === "player" || userData?.role === "coach") && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/feedbacks`}>Feedbacks</NavLink>
                </li>
            )}

            {userData?.role === "admin" && (
                <li className={"navbar-item "} onClick={closeMenu}>
                    <NavLink to={`${getDashboardPath()}/rivals`}>Rivals</NavLink>
                </li>
            )}
        </ul>
    </nav>
        )
}

export default Navbar;
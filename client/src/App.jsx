//IMPORTS EXTERNOS
import { useEffect, useState, useContext } from 'react';

//IMPORTS ARCHIVOS INTERNOS
import { AuthProvider, AuthContext } from './context/AuthContext.jsx';
import Greeting from './components/greeting/Greeting.jsx';
import Auth from './pages/auth/Auth.jsx';
import { saveToken,removeToken, getUserRoleFromToken, getToken} from './utils/localStorage.js';

//CSS Y DATA
import './App.css'

function App() {
  //ESTADOS
  const [route, setRoute] = useState('login');
  
  //EFECTOS
  const {userData} = useContext(AuthContext);
  useEffect(() => {
    // Aquí puedes hacer algo cuando el usuario se loguee o cierre sesión
    console.log(userData);
  }, [userData]);
  
  //FUNCIONES
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  
  //RUTAS
  const routes = {
    home: "home",
    login: <Auth />,
    players: <PlayerList />
  }

      return (
        <>
          <RouteContext value={{route:route, onRouteChange:handleRouteChange}}>
            <AuthProvider>
            {routes[route]}
            <Greeting />
            </AuthProvider>
          </RouteContext>
        </>
      )
}

export default App

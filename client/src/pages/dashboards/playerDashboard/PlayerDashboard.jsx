
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Header from "../../../components/header/Header.jsx";
import Footer from "../../../components/footer/Footer.jsx";



function PlayerDashboard() {
    return (
        <div className="app-container">
            <header>
                <Header />
                <Navbar />
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default PlayerDashboard;
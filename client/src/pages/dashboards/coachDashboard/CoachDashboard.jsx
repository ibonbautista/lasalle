
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar.jsx";



function CoachDashboard() {
    return (
        <>
            <header>
                <h1>CoachDashboard</h1>
                <Navbar />
            </header>

            <main>
                <p>Welcome Coach</p>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default CoachDashboard;

import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar.jsx";



function MemberDashboard() {
    return (
        <>
            <header>
                <h1>MemberDashboard</h1>
                <Navbar />
            </header>

            <main>
                <p>Welcome Member</p>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default MemberDashboard;
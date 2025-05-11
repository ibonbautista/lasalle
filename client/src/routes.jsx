import {createBrowserRouter} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import Root from "./pages/root/Root.jsx";
import Auth from "./pages/auth/Auth.jsx";
import AdminDashboard from "./pages/dashboards/adminDashboard/AdminDashboard.jsx";
import PlayerDashboard from "./pages/dashboards/playerDashboard/PlayerDashboard.jsx";
import CoachDashboard from "./pages/dashboards/coachDashboard/CoachDashboard.jsx";
import MemberDashboard from "./pages/dashboards/memberDashboard/MemberDashboard.jsx";
import PlayerList from "./pages/info/players/playerList/PlayerList.jsx";
import MemberList from "./pages/info/members/memberList/MemberList.jsx";
import RivalList from "./pages/info/rivals/rivalList/RivalList.jsx";
import UserList from "./pages/info/users/userList/UserList.jsx";
import CoachList from "./pages/info/coaches/coachList/CoachList.jsx";
import AdminOptions from "./components/adminOptions/AdminOptions.jsx";
import TeamList from "./pages/info/teams/teamList/TeamList.jsx";
import MatchList from "./pages/info/matches/matchList/MatchList.jsx";
import MatchTeam from "./pages/info/matches/matchTeam/MatchTeam.jsx";
import FeedbackList from "./pages/info/feedbacks/feedbackList/FeedbackList.jsx";
import LoginPlayerInfo from "./pages/info/loginInfo/LoginPlayerInfo.jsx";
import DeleteMember from "./pages/info/members/deleteMember/DeleteMember.jsx";

import {getAllPlayers, getPlayerById, editPlayer} from "./utils/api/players.js";
import EditPlayer from "./pages/info/players/editPlayer/EditPlayer.jsx";
import getAllUsers from "./utils/api/users.js";
import {deleteMember,getAllMembers} from "./utils/api/members.js";
import getAllRivals from "./utils/api/rivals.js";
import {getAllCoaches} from "./utils/api/coaches.js";
import getAllTeams from "./utils/api/teams.js";
import {getAllMatches} from "./utils/api/matches.js";
import {getAllFeedbacks} from "./utils/api/feedbacks.js";
import CoachCard from "./pages/info/coaches/coachCard/CoachCard.jsx";
import FeedbackPlayer from "./pages/info/feedbacks/feedbackPlayer/FeedbackPlayer.jsx";
import RegisterForm from "./pages/registerForm/RegisterForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            // PRIMERA PANTALLA DENTRO DE ROOT, SIEMPRE LOGIN
            {
                path: "/",
                element: <Auth />,
            },
            {
                path: "memberregister",
                element: <RegisterForm />,
            },

            // DASHBOARD DE ADMIN
            {
                path: "admin",
                element: <AdminDashboard />,
                children: [
                    {
                        path: "",
                        element: <AdminOptions />,
                    },
                    {
                        path: "users",
                        element: <UserList />,
                        loader: getAllUsers,
                    },
                    {
                        path: "players",
                        element: <PlayerList />,
                        loader: getAllPlayers,
                    },
                    {
                        path: "players/edit/:id",
                        element: <EditPlayer />,
                        loader: ({ params }) => getPlayerById(params.id),
                    },
                    {
                        path: "coaches",
                        element: <CoachList />,
                        loader: getAllCoaches,
                    },
                    {
                        path: "teams",
                        element: <TeamList />,
                        loader: getAllTeams,
                    },
                    {
                        path: "members",
                        element: <MemberList />,
                        loader: getAllMembers,
                    },
                    {
                        path: "members/delete/:id",
                        element: <DeleteMember />,
                        loader: ({ params }) => deleteMember(params.id),
                    },
                    {
                        path: "matches",
                        element: <MatchList />,
                        loader: getAllMatches,
                    },
                    {
                        path: "feedbacks",
                        element: <FeedbackList />,
                        loader: getAllFeedbacks,
                    },
                    {
                        path: "rivals",
                        element: <RivalList />,
                        loader: getAllRivals,
                    },
                    {
                        path: "logout",
                        element: <Navigate to="/" replace />,
                    },
                ]
            },

            // DASHBOARD DE PLAYER
            {
                path: "player",
                element: <PlayerDashboard />,
                children: [
                    {
                        path: "",
                        element: <LoginPlayerInfo />
                    },
                    {
                        path: "coaches",
                        element: <CoachCard />
                    },
                    {
                        path: "matches",
                        element: <MatchTeam />,
                    },
                    {
                        path: "feedbacks",
                        element: <FeedbackPlayer />,
                    },
                    {
                        path: "logout",
                        element: <Navigate to="/" replace />,
                    },
                ]
            },

            // DASHBOARD DE COACH
            {
                path: "coach",
                element: <CoachDashboard />,
                children: [
                    {
                        path: "",
                        element: <LoginPlayerInfo />,
                    },
                    {
                        path: "users",
                        element: <UserList />,
                        loader: getAllUsers,
                    },
                    {
                        path: "players",
                        element: <PlayerList />,
                        loader: getAllPlayers,
                    },
                    {
                        path: "coaches",
                        element: <CoachList />,
                        loader: getAllCoaches,
                    },
                    {
                        path: "teams",
                        element: <TeamList />,
                        loader: getAllTeams,
                    },
                    {
                        path: "members",
                        element: <MemberList />,
                        loader: getAllMembers,
                    },
                    {
                        path: "matches",
                        element: <MatchList />,
                        loader: getAllMatches,
                    },
                    {
                        path: "feedbacks",
                        element: <FeedbackList />,
                        loader: getAllFeedbacks,
                    },
                    {
                        path: "rivals",
                        element: <RivalList />,
                        loader: getAllRivals,
                    },
                    {
                        path: "logout",
                        element: <Navigate to="/" replace />,
                    },
                ]
            },

            // DASHBOARD DE MEMBER
            {
                path: "member",
                element: <MemberDashboard />,
                children: [
                    {
                        path: "",
                        element: <LoginPlayerInfo />,
                    },
                    {
                        path: "users",
                        element: <UserList />,
                        loader: getAllUsers,
                    },
                    {
                        path: "players",
                        element: <PlayerList />,
                        loader: getAllPlayers,
                    },
                    {
                        path: "coaches",
                        element: <CoachList />,
                        loader: getAllCoaches,
                    },
                    {
                        path: "teams",
                        element: <TeamList />,
                        loader: getAllTeams,
                    },
                    {
                        path: "members",
                        element: <MemberList />,
                        loader: getAllMembers,
                    },
                    {
                        path: "matches",
                        element: <MatchList />,
                        loader: getAllMatches,
                    },
                    {
                        path: "feedbacks",
                        element: <FeedbackList />,
                        loader: getAllFeedbacks,
                    },
                    {
                        path: "rivals",
                        element: <RivalList />,
                        loader: getAllRivals,
                    },
                    {
                        path: "logout",
                        element: <Navigate to="/" replace />,
                    },
                ]
            }
        ]
    }
]);

export default router;

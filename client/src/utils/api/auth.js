import fetchData from "./fetch.js";
import { useNavigate } from "react-router-dom";

async function login(email, password){
    const data = {
        email: email,
        password: password
    }
    const result = await fetchData("/login", "POST", data);
    console.log("login result:" + result);
    return result;
}

async function logout(){
    const result = await fetchData("/logout", "POST");
    console.log("logout result:" + result);
    return result;
}

async function getUserInfo(){
    const result = await fetchData("/userInfo");
    return result;
}

async function register(newData,navigate){
    const data = {
        email: newData.email,
        password: newData.password,
        nif: newData.nif,
        name: newData.name,
        surname: newData.surname,
        phone: newData.phone,
        family: newData.isFamilyMember
    }
    try {
        const result = await fetchData("/register", "POST", data);
        return result;
    } catch (error) {
        console.error("Error al registrar:", error);

        // Si el error es por un NIF duplicado, redirigimos al login
        if (error.message.includes("nif must be unique")) {
            navigate("/login");
        }

        throw error; // Re-lanzamos el error para manejarlo en el formulario si es necesario
    }
}

export {
    login,
    logout,
    getUserInfo,
    register
}
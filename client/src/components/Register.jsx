import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUserName, setId } = useContext(UserContext);

    const register = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/register", {
            username,
            password,
        });
    };

    return (
        <div className="bg-blue-50 h-screen w-screen flex items-center">
            <form action="" className="w-64 mx-auto mb-20" onSubmit={register}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    className="block w-full rounded-sm p-2 mb-2 h-10 border outline-0"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="block w-full rounded-sm p-2 mb-2 h-10 border outline-0"
                />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

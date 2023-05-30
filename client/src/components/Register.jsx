import React from "react";

const Register = () => {
    return (
        <div className="bg-blue-50 h-screen w-screen">
            <form action="">
                <input type="text" placeholder="Username" className="block" />
                <input
                    type="password"
                    placeholder="Password"
                    className="block"
                />
            </form>
        </div>
    );
};

export default Register;

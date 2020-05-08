import React from "react";

function LogIn() {
    return (
        <div className="logInContainer" style={{ border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center", width: "20vW", height: "20vh" }}>
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
            <label>Password</label>
            <input type="password" placeholder="Enter password" required/>
            <button type="submit">Login</button>
        </div>
    );
};

export default LogIn;
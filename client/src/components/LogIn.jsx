import React from "react";

function LogIn() {
    return (
        <div className="logInContainer" style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
            <label>Password</label>
            <input type="password" placeholder="Enter password" required/>
            <button type="submit">Login</button>
        </div>
    );
};

export default LogIn;
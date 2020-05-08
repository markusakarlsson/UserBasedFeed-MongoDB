import React from "react";
import LogIn from "./LogIn";


function UserPage() {
    return(
        <div style={{ border: "1px solid black", height: "100vh", width: "50vw"}}>
            <h2>User page</h2>
            <LogIn />
        </div>
    );
};



export default UserPage;
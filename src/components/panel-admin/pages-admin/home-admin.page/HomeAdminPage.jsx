import React from 'react';

const HomeAdminPage = (props) => {
    return (
        <main className={"home-admin w-100" + (props.close ? " closed" : " opened")}>
            <h1 className = {props.close ? "closed" : "open"}>Welcome to Home Admin</h1>
        </main>
    )
}

export default HomeAdminPage;

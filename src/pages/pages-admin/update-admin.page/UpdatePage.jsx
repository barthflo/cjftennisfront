import React from 'react';

const UpdatePage = ({component: Component,  ...props}) => {
    return (
        <main className={"update-admin" + (props.close ? " closed" : " opened")}>
            <Component {...props}/>
        </main>
    )
}

export default UpdatePage

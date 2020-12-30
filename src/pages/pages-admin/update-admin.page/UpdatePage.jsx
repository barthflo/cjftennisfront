import React from 'react';

const UpdatePage = ({component: Component,  ...props}) => {
    return (
        <main className={"update-admin container-fluid px-0 px-sm-2" + (props.close ? " closed" : " opened")}>
            <Component {...props}/>
        </main>
    )
}

export default UpdatePage

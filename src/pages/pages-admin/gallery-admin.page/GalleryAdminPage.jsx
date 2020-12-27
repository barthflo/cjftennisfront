import React from 'react';

const GalleryAdminPage = ({component: Component,  ...props}) => {

    return (
        <main className={"gallery-admin container-fluid" + (props.close ? " closed" : " opened")}>
            <Component {...props}/>
        </main>
    )
}

export default GalleryAdminPage;

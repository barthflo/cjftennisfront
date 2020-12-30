import React from 'react';

const GalleryAdminPage = ({component: Component,  ...props}) => {

    return (
        <main className={"gallery-admin container-fluid px-0 px-sm-2" + (props.close ? " closed" : " opened")}>
            <Component {...props}/>
        </main>
    )
}

export default GalleryAdminPage;

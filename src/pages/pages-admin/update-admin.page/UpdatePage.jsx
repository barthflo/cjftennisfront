import React from 'react';
import UpdateVideo from '../../../components/panel-admin/update-cards.admin/update-video/UpdateVideo';

const UpdatePage = ({component: Component,  ...props}) => {
    return (
        <main className={"update-admin" + (props.close ? " closed" : " opened")}>
            <Component {...props}/>
        </main>
    )
}

export default UpdatePage

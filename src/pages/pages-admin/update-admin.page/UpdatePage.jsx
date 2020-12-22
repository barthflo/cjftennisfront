import React from 'react';
import UpdateVideo from '../../../components/panel-admin/update-cards.admin/update-video/UpdateVideo';

const UpdatePage = (props) => {
    return (
        <main className={"update-admin" + (props.close ? " closed" : " opened")}>
            <UpdateVideo />
        </main>
    )
}

export default UpdatePage

import React from 'react';
import BannerVideoAdmin from '../../../components/panel-admin/banner-video.admin/BannerVideoAdmin';
import IconsInfosAdmin from '../../../components/panel-admin/icons-info.admin/IconsInfoAdmin';

const components = [
    <BannerVideoAdmin />,
    <IconsInfosAdmin />
]

const HomeAdminPage = (props) => {
    return (
        <main className={"home-admin container-fluid" + (props.close ? " closed" : " opened")}>
            <h1>Général</h1>
            <ul className="list-group list-group-horizontal-md justify-content-center">
                {components.map((component, index) => 
                    <li className="card list-group-item m-1 w-100" key={index}>{component}</li>
                )}
            </ul>
        </main>
    )
}

export default HomeAdminPage;

import React from 'react';
import BannerVideoAdmin from '../../../components/panel-admin/banner-video.admin/BannerVideoAdmin';
import IconsInfosAdmin from '../../../components/panel-admin/icons-info.admin/IconsInfoAdmin';

const components = [
    <BannerVideoAdmin />,
    <IconsInfosAdmin />,
    <IconsInfosAdmin />
]

const HomeAdminPage = (props) => {
    return (
        <main className={"home-admin container-fluid" + (props.close ? " closed" : " opened")}>
            <h1 className="ml-4 pl-3">Général</h1>
            <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                {components.map((component, index) => 
                    <li className={"list-group-item m-1 w-100 home-admin" + index } key={index}>{component}</li>
                )}
            </ul>
        </main>
    )
}

export default HomeAdminPage;

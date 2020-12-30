import{Switch, Route} from 'react-router-dom';
import {Fragment, useState} from 'react';
import NavBarAdmin from '../../navbar/admin-nav/NavbarAdmin';
import SidePanel from '../../navbar/admin-nav/SidebarAdmin';
import HomeAdmin from '../../../pages/pages-admin/home-admin.page/HomeAdminPage';
import UpdatePage from '../../../pages/pages-admin/update-admin.page/UpdatePage';
import '../panelAdmin.css';
import '../../../pages/pages-admin/pages.admin.css';
import UpdateVideo from '../update-cards.admin/update-video/UpdateVideo';
import UpdateIcons from '../update-cards.admin/update-icons.admin/UpdateIcons';
import GalleryAdminPage from '../../../pages/pages-admin/gallery-admin.page/GalleryAdminPage';
import GalleryList from '../galleries.admin/GalleryList';
import GalleryCreate from '../galleries.admin/GalleryCreate';
import UpdateGallery from '../update-cards.admin/update-gallery/UpdateGallery';

const Dashboard = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return(
        <Fragment>
            <NavBarAdmin />
            <div className="page-container d-flex flex-row-reverse">
                <SidePanel toggleOpen = {toggleOpen} open={isOpen}/>
                <Switch>
                    <Route exact path='/admin'>
                        <HomeAdmin close={isOpen} />
                    </Route>
                    <Route path='/admin/edit/video/:id'>
                        <UpdatePage close={isOpen} component={UpdateVideo}/>
                    </Route>
                    <Route path='/admin/edit/icons'>
                        <UpdatePage close={isOpen} component={UpdateIcons}/>
                    </Route>
                    <Route exact path='/admin/galleries'>
                        <GalleryAdminPage close={isOpen} component={GalleryList}/>
                    </Route>
                    <Route path='/admin/galleries/create'>
                        <GalleryAdminPage close={isOpen} component={GalleryCreate} />
                    </Route>
                    <Route path='/admin/galleries/edit/:id'>
                        <UpdatePage close={isOpen} component={UpdateGallery} />
                    </Route>
                    <Route path='/admin/paratennis'>Paratennis</Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
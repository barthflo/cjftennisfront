import {Switch, Route} from 'react-router-dom';
import {Fragment, useState} from 'react';
import NavBarAdmin from '../../navbar/admin-nav/NavbarAdmin';
import SidePanel from '../../navbar/admin-nav/SidebarAdmin';
import HomeAdmin from '../../../pages/pages-admin/home-admin.page/HomeAdminPage';
import DefaultAdmin from '../../../pages/pages-admin/default-admin.page/DefaultAdminPage';
import UpdateVideo from '../update-cards.admin/update-video/UpdateVideo';
import UpdateIcons from '../update-cards.admin/update-icons.admin/UpdateIcons';
import GalleryList from '../galleries.admin/GalleryList';
import GalleryCreate from '../galleries.admin/GalleryCreate';
import GalleryUpdate from '../update-cards.admin/update-gallery/UpdateGallery';
import '../panelAdmin.css';
import '../../../pages/pages-admin/pages.admin.css';

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
                    <Route exact path='/admin' children={<HomeAdmin />} />
                    <Route 
                        path='/admin/edit/video/:id' 
                        children={<DefaultAdmin component={UpdateVideo} /> }
                    />
                    <Route 
                        path='/admin/edit/icons' 
                        children={<DefaultAdmin component={UpdateIcons} className={"container-fluid px-0 px-2"}/> } 
                    />
                    <Route 
                        exact path='/admin/galleries'
                        children = {<DefaultAdmin component={GalleryList} className={"gallery-admin container-fluid px-0 px-sm-2"}/> }
                    />
                    <Route 
                        path='/admin/galleries/create'
                        children = {<DefaultAdmin component={GalleryCreate} className={"gallery-admin container-fluid px-0 px-sm-2"}/> } 
                    />
                    <Route 
                        path='/admin/galleries/edit/:id'
                        children = {<DefaultAdmin component={GalleryUpdate} className={"gallery-admin container-fluid px-0 px-sm-2"} />} 
                    />
                    <Route path='/admin/paratennis'>Paratennis</Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
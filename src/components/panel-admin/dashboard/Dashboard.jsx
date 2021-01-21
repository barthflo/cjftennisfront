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
import UpdateUser from '../update-cards.admin/update-user/UpdateUser';
import UsersList from '../users.admin/UsersList';
import UsersCreate from '../users.admin/UsersCreate';
import UsersManage from '../users.admin/UsersManage';
import ArchivesAdmin from '../../../pages/pages-admin/archives-admin.page/ArchivesAdminPage';
import ArticlesContainer from '../articles.admin/ArticlesContainer';

import '../panelAdmin.css';
import '../../../pages/pages-admin/pages.admin.css';

const Dashboard = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const enableOpen = () => {
        if (window.innerWidth > 991){
            return (isOpen ? " closed" : " opened")
        }
        return ' '
    }
    return(
        <Fragment>
            <NavBarAdmin />
            <div className="page-container d-flex flex-row-reverse">
                <SidePanel toggleOpen = {toggleOpen} />
                <Switch>
                    <Route 
                        exact path='/admin' 
                        children={<HomeAdmin className={ enableOpen()} />} 
                    />
                    <Route 
                        path='/admin/id=:id' 
                        children={<DefaultAdmin component={UpdateUser} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()} /> } 
                    />
                    <Route 
                        exact path='/admin/users' 
                        children={<DefaultAdmin component={UsersList} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()} />} 
                    />
                    <Route 
                        path='/admin/users/create' 
                        children={<DefaultAdmin component={UsersCreate} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()} />} 
                    />
                    <Route 
                        path='/admin/users/edit/:id' 
                        children={<DefaultAdmin component={UsersManage} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()} />} 
                    />
                    <Route 
                        path='/admin/edit/video/:id' 
                        children={<DefaultAdmin component={UpdateVideo} className={"update-admin" + enableOpen()} /> }
                    />
                    <Route 
                        path='/admin/edit/icons' 
                        children={<DefaultAdmin component={UpdateIcons} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()}/> } 
                    />
                    <Route 
                        exact path='/admin/galleries'
                        children = {<DefaultAdmin component={GalleryList} className={"gallery-admin container-fluid px-0 px-sm-2" + enableOpen()}/> }
                    />
                    <Route 
                        path='/admin/galleries/create'
                        children = {<DefaultAdmin component={GalleryCreate} className={"create-admin container-fluid px-0 px-sm-2" + enableOpen()}/> } 
                    />
                    <Route 
                        path='/admin/galleries/edit/:id'
                        children = {<DefaultAdmin component={GalleryUpdate} className={"update-admin container-fluid px-0 px-sm-2" + enableOpen()} />} 
                    />
                    <Route 
                        exact path='/admin/articles'
                        children = {<DefaultAdmin component={ArticlesContainer} className={"gallery-admin container-fluid px-0 px-sm-2" + enableOpen()} />} 
                    />
                    <Route 
                        exact path='/admin/archives'
                        children = {<ArchivesAdmin className={enableOpen()} />} 
                    />
                    <Route path='/admin/paratennis'>Paratennis</Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
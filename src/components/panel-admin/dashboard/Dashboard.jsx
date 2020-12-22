import{Switch, Route} from 'react-router-dom';
import {Fragment, useState} from 'react';
import NavBarAdmin from '../../navbar/admin-nav/NavbarAdmin';
import SidePanel from '../../navbar/admin-nav/SidebarAdmin';
import HomeAdmin from '../../../pages/pages-admin/home-admin.page/HomeAdminPage';
import UpdatePage from '../../../pages/pages-admin/update-admin.page/UpdatePage';
import '../panelAdmin.css';
import '../../../pages/pages-admin/pages.admin.css';
import UpdateVideo from '../update-cards.admin/update-video/UpdateVideo';

const Dashboard = (props) => {
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
                    <Route path='/admin/paratennis'>Paratennis</Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
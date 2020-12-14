import{Switch, Route} from 'react-router-dom';
import {Fragment} from 'react';
import HomeAdmin from '../pages-admin/home-admin.page/HomeAdminPage';
import NavBarAdmin from '../../navbar/admin-nav/NavbarAdmin';
import SidePanel from '../../navbar/admin-nav/SidebarAdmin';
import '../panelAdmin.css';

const Dashboard = (props) => {
    return(
        <Fragment>
            <NavBarAdmin />
            <div className="page-container d-flex flex-row-reverse">
                <SidePanel />
                <Switch>
                    <Route exact path='/admin' component={HomeAdmin} />
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
import{Switch, Route} from 'react-router-dom';
import {Fragment, useState} from 'react';
import HomeAdmin from '../pages-admin/home-admin.page/HomeAdminPage';
import NavBarAdmin from '../../navbar/admin-nav/NavbarAdmin';
import SidePanel from '../../navbar/admin-nav/SidebarAdmin';
import '../panelAdmin.css';

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
                    <Route path='/admin/paratennis'>Paratennis</Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Dashboard;
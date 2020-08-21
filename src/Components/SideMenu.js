import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {
    ic_dashboard,
    ic_library_music,
    ic_queue_music,
    ic_person,
    ic_audiotrack,
    ic_group,
    ic_power_settings_new,
    ic_settings,
    ic_account_circle
} from 'react-icons-kit/md';

import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/static/logo.png';

const SideMenu = (props) => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className={props.show ? "side-menu open-menu" : "side-menu"}>
            <div className="header p-2">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        <img src={Logo} alt="..." />
                    </div>
                    <div className="ml-auto">
                        <Dropdown>
                            <Dropdown.Toggle className="btn btn-light rounded-circle shadow-none">
                                <Icon icon={ic_settings} size={20} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-0 border-0 rounded-0 shadow">
                                <Dropdown.Item href="#/action-1" className="p-2">
                                    <Icon icon={ic_account_circle} size={18} />
                                    <span className="ml-1">Profile</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <div className="body">
                <NavLink exact activeClassName="isActive" to="/admin/">
                    <Icon icon={ic_dashboard} size={18} style={{ color: '#F4A261' }} />
                    <span className="ml-2">dashboard</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/admin/category">
                    <Icon icon={ic_library_music} size={18} style={{ color: '#22a83a' }} />
                    <span className="ml-2">category</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/admin/album">
                    <Icon icon={ic_queue_music} size={18} style={{ color: '#E9C46A' }} />
                    <span className="ml-2">album</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/admin/singer">
                    <Icon icon={ic_person} size={18} style={{ color: '#3c9bcf' }} />
                    <span className="ml-2">singer</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/admin/songs">
                    <Icon icon={ic_audiotrack} size={18} style={{ color: '#F4A261' }} />
                    <span className="ml-2">songs</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/admin/users">
                    <Icon icon={ic_group} size={18} style={{ color: '#1a9679' }} />
                    <span className="ml-2">users</span>
                </NavLink>

                <button type="button" className="btn btn-block shadow-none rounded-0" onClick={logout}>
                    <Icon icon={ic_power_settings_new} size={18} style={{ color: '#000' }} />
                    <span className="ml-2">Logout</span>
                </button>
            </div>
        </div >
    );
};

export default SideMenu;
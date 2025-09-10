import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../styles/AdminLayout.css'
import profile_image from '../../assets/images/bg.jpg';
import { FaBullhorn, FaCreditCard, FaLock, FaSchool, FaUser } from 'react-icons/fa';
import { FaGauge, FaListCheck, FaShieldHalved } from 'react-icons/fa6';
import { MdChecklist, MdCreditCard, MdDashboardCustomize, MdOutlineDashboard, MdSchool, MdSpaceDashboard } from 'react-icons/md';

const AdminLayout = () => {

    let [activeMenu, setActiveMenu] = useState(0);

    const handleMenuClick = (value) => {
        let final_value = 0;
        if (activeMenu == value) {
            final_value = 0;
        } else if (activeMenu != value) {
            final_value = value;
        }
        // const final_value = activeMenu == 0 ? value : 0;
        setActiveMenu(final_value);
    }

    return (
        <>
            <div className="layout_container">
                <div className="side_bar">
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <MdSpaceDashboard className='icon' size={20} color={'#4F46E5'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Dashboard</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item" onClick={() => handleMenuClick(1)}>
                            <div className="grouped_items">
                                <MdChecklist className='icon' size={20} />
                                <span className="">Administration</span>
                            </div>
                        </div>
                        <div className={activeMenu === 1 ? 'display_sidebar_item' : 'hide_sidebar_item'}>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'>Staff</NavLink></li>
                            <li className="">Students</li>
                            {/* <li className=""></li> */}
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <MdSchool className='icon' size={20} />
                                <span className="" onClick={() => handleMenuClick(2)}>Academics</span>
                            </div>
                        </div>
                        <div className={activeMenu === 2 ? 'display_sidebar_item' : 'hide_sidebar_item'}>
                            <li className="">Calendar</li>
                            <li className="">Classes</li>
                            <li className="">Subjects</li>
                            <li className="">Time-Table</li>
                            {/* <li className=""></li> */}
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <FaShieldHalved className='icon' size={20} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Roles & Permissions</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <MdCreditCard className='icon' size={20} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Payments/Fees</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <FaBullhorn className='icon' size={20} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Announcements</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="top_header">
                        <span className="">Welcome, Foster Asante</span>
                        <div className="profile_image_container">
                            <img className='profile_image' src={profile_image} alt="" />
                        </div>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminLayout;

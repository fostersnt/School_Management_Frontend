import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../styles/layouts/AdminLayout.css'
import profile_image from '../../assets/images/students_bg.png';
import { FaBullhorn, FaCreditCard, FaLock, FaSchool, FaUser } from 'react-icons/fa';
import { FaGauge, FaListCheck, FaShieldHalved } from 'react-icons/fa6';
import { MdChecklist, MdCreditCard, MdDashboardCustomize, MdOutlineDashboard, MdSchool, MdSpaceDashboard } from 'react-icons/md';
import { AiFillDashboard } from 'react-icons/ai';
import { TbBoxMultiple0, TbCancel, TbClockShield, TbCross, TbDashboard, TbMenu2, TbX } from 'react-icons/tb';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FiArrowRight, FiMinus, FiPlus, FiShield } from 'react-icons/fi';
import CustomFooter from '../components/CustomFooter';

const AdminLayout = () => {

    let [activeMenu, setActiveMenu] = useState(0);
    let [isVisible, setVisible]     = useState(false);
    let [hideBar, setHideBar]     = useState('side_bar');

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

    const handleMenuButtonClick = () => {
        if (hideBar == 'side_bar') {
            setHideBar('reduce-side-bar-width');
        } else {
            setHideBar('side_bar');
        }
    }

    return (
        <>
            <div className="layout_container">
                <div className={hideBar}>
                    <div className='sidebar-close-btn'>
                        <TbX size={20} color={'#fff'} onClick={handleMenuButtonClick}/>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <TbDashboard className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Dashboard</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item" onClick={() => handleMenuClick(1)}>
                            <div className="grouped_items">
                                <MdChecklist className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Administration</NavLink>
                            </div>
                        </div>
                        <div className={activeMenu === 1 ? 'display_sidebar_item' : 'hide_sidebar_item'}>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Staff</NavLink></li>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Students</NavLink></li>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <HiOutlineAcademicCap className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard' onClick={() => handleMenuClick(2)}>Academics</NavLink>
                            </div>
                        </div>
                        <div className={activeMenu === 2 ? 'display_sidebar_item' : 'hide_sidebar_item'}>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Calendar</NavLink></li>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Classes</NavLink></li>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Subjects</NavLink></li>
                            <li className=""><NavLink className='nav-link' to='/admin/all-staff'><FiMinus size={15} color={'#fff'} />Time-Table</NavLink></li>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <FiShield className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Roles & Permissions</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <MdCreditCard className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Payments/Fees</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="side_bar_menu">
                        <div className="menu_item">
                            <div className="grouped_items">
                                <FaBullhorn className='icon' size={20} color={'#fff'} />
                                <NavLink className='nav-link' to='/admin/dashboard'>Announcements</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="top_header">
                        <TbMenu2 className='side-bar-menu-btn' onClick={handleMenuButtonClick} size={20} color={'#fff'} />
                        <span className="">Welcome, Foster Asante</span>
                        <div className="profile_image_container">
                            <img className='profile_image' src={profile_image} alt="" />
                        </div>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                    <CustomFooter />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;

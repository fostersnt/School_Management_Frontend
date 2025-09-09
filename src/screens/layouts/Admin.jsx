import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout =() => {

    return (
        <>
        <h1 className="">This is the Admin layout</h1>
        <Outlet/>
        </>
    );
};

export default AdminLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';

const StaffLayout =() => {

    return (
        <>
        <h1 className="">This is the Staff layout</h1>
        <Outlet/>
        </>
    );
};

export default StaffLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';

const ParentLayout =() => {

    return (
        <>
        <h1 className="">This is the Parent layout</h1>
        <Outlet/>
        </>
    );
};

export default ParentLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';

const StudentLayout =() => {

    return (
        <>
        <h1 className="">This is the Student layout</h1>
        <Outlet/>
        </>
    );
};

export default StudentLayout;

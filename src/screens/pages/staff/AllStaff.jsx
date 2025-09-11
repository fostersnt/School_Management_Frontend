import React from 'react';
import CustomTable from '../../components/CustomTable';
import HeaderLeft from '../../components/HeaderLeft';

const AllStaff =() => {

    const title = "Quiz Settings";
    const description = "Configure delivery, availability, grading, and access before publishing.";

    return (
        <>
        {/* <h1 className="">All staff will be shown here</h1> */}
        <div className="">
            <HeaderLeft title={title} description={description}/>
            <div className="">
            <CustomTable/>
            <CustomTable/>
            <CustomTable/>
        </div>
        </div>
        </>
    );
};

export default AllStaff;

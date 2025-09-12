import React from 'react';
import CustomTable from '../../components/CustomTable';
import HeaderLeft from '../../components/HeaderLeft';

const AllStaff =() => {

    const title = "Quiz Settings";
    const description = "Configure delivery, availability, grading, and access before publishing.";

    const columns = ["ID", "Name", "Email", "Role", "Status"];
    const initialRows = [
      ["001", "Amina Owusu", "amina@example.com", "Admin", "Active"],
      ["002", "Kwame Mensah", "kwame@example.com", "Editor", "Pending"],
      ["003", "Selina Baah", "selina@example.com", "Viewer", "Active"],
      ["004", "Yaw Asare", "yaw@example.com", "Contributor", "Disabled"],
      ["005", "Abena Serwaa", "abena@example.com", "Viewer", "Active"],
      ["006", "Kojo Brown", "kojo@example.com", "Editor", "Disabled"],
    ];

    return (
        <>
        {/* <h1 className="">All staff will be shown here</h1> */}
        <div className="">
            <HeaderLeft title={title} description={description}/>
            <div className="">
            <CustomTable columns={columns} initialRows={initialRows}/>
        </div>
        </div>
        </>
    );
};

export default AllStaff;

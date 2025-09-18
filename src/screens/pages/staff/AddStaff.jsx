import React, { useState } from "react";
import "../../../styles/pages/AddStaff.css";

const AddStaff = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [portalAccess, setPortalAccess] = useState(true);

  const handleClick = () => {
    console.log('Hello world');
  }

  return (
    <>
      <div className="add-staff-container">
        {/* Header */}
        <div className="form-header">
          <h2>Create New Staff Profile</h2>
          <div>
            <button className="btn-reset">Reset</button>
            <button className="btn-save">Save</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === 1 ? "tab active" : "tab"}
            onClick={() => setActiveTab(1)}
          >
            1. Personal
          </button>
          <button
            className={activeTab === 2 ? "tab active" : "tab"}
            onClick={() => setActiveTab(2)}
          >
            2. Employment
          </button>
          <button
            className={activeTab === 3 ? "tab active" : "tab"}
            onClick={() => setActiveTab(3)}
          >
            3. Permissions
          </button>
        </div>

        {/* Form Body */}
        <div className="form-body">
          {/* Personal Info */}
          <section className="form-card">
            <h4>Personal Information</h4>
            <div className="two-cols">
              <input className="sys-input" type="text" placeholder="e.g. Ama Boateng" />
              <input className="sys-input" type="text" placeholder="Auto or enter manually" />
            </div>
            <div className="two-cols">
              <input className="sys-input" type="email" placeholder="name@school.edu" />
              <input className="sys-input" type="text" placeholder="e.g. 024 123 4567" />
            </div>
            <div className="two-cols">
              <input className="sys-input" type="text" placeholder="Residential address" />
              <input className="sys-input" type="text" placeholder="Name & phone" />
            </div>
          </section>

          {/* Profile Photo */}
          <section className="form-card">
            <h4>Profile Photo</h4>
            <div className="profile-photo">
              <div className="upload-box">
                <button className="btn-upload sys-button">Upload</button>
                <button className="btn-remove sys-button">Remove</button>
              </div>
              <p className="note">PNG or JPG, max 2MB</p>
            </div>
          </section>
        </div>
        <div className="form-body">
          {/* Employment */}
          <section className="form-card">
            <h4>Employment Details</h4>
            <div className="two-cols">
              <input className="sys-input" type="text" placeholder="e.g. Mathematics" />
              <input className="sys-input" type="text" placeholder="e.g. Teacher, Bursar" />
            </div>
            <div className="two-cols">
              <input className="sys-input" type="date" placeholder="DD/MM/YYYY" />
              <select className="sys-select">
                <option>Select supervisor</option>
              </select>
            </div>
            <div className="two-cols">
              <input className="sys-input" type="text" placeholder="Assign classes/streams" />
              <select className="sys-select">
                <option className="sys-option">Active</option>
                <option>On Leave</option>
              </select>
            </div>
          </section>

          {/* Account Access */}
          <section className="form-card">
            <h4>Account Access</h4>
            <div className="toggle">
              <button
                className={portalAccess ? "enabled" : "disabled"}
                onClick={() => setPortalAccess(true)}
              >
                Enabled
              </button>
              <button
                className={!portalAccess ? "enabled" : "disabled"}
                onClick={() => setPortalAccess(false)}
              >
                Disable
              </button>
            </div>
            <button className="btn-auto">Auto-generate</button>
            <p className="note">Send welcome email with login instructions.</p>
          </section>
        </div>
      </div>
      {/* <div className="form-body"> */}
        <div className="permissions-container">
          {/* Permissions */}
          <section className="full-width">
            <h4>Permissions Quick Assign</h4>
            <div className="permission-row">
              <span>Teachers</span>
              <span className="tag standard">Standard</span>
              <span>Gradebook, attendance, announcements</span>
              <button className="btn-apply">Apply</button>
            </div>
            <div className="permission-row">
              <span>Bursars</span>
              <span className="tag finance">Finance</span>
              <span>Billing, payments, reconciliation</span>
              <button className="btn-apply">Apply</button>
            </div>
            <div className="permission-row">
              <span>Custom</span>
              <span className="tag select">Select...</span>
              <span>Choose specific permissions</span>
              <button className="btn-apply">Manage</button>
            </div>
          </section>
        </div>

        {/* Footer Buttons */}
        <div className="form-footer">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-save">Save Staff</button>
        </div>
      {/* </div> */}
    </>
  );
};

export default AddStaff;


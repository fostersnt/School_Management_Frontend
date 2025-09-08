import React from "react";
import '../styles/LandingPage.css'
import ParticleJsBackground from "./components/ParticleJsBackground";
import staff_image from '../assets/images/staff.png';
import permissions from '../assets/images/permissions.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <ParticleJsBackground />
            {/* Navbar */}
            <header className="navbar">
                <h1 className="logo">EduHub Ghana</h1>
                <nav className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="btn primary">Get Started</button>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <span className="tag">Multi-Vendor School OS for Ghana</span>
                    <h2>Manage Admissions, Grades, and Fees — All in One Place</h2>
                    <p>
                        Give administrators, teachers, parents and students a simple,
                        reliable workspace for attendance, grading, report cards and mobile
                        money payments.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn primary">Book a Demo</button>
                        <button className="btn secondary">Explore Features</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                        alt="Classroom"
                    />
                </div>
            </section>
            {/* Extracts */}
            <section className="staff_section">
                {/* <div className=""> */}
                    <img src={permissions} alt="" />
                    <img src={staff_image} alt="" />
                {/* </div> */}
            </section>
            {/* Roles Section */}
            <section className="roles">
                <h3>Built for Every Role</h3>
                <p>
                    Powerful workflows with a friendly interface for admins, teachers,
                    parents and students.
                </p>
                <div className="roles-grid">
                    <div className="role-card">
                        <h4>Administrators</h4>
                        <ul>
                            <li>Roles & permissions</li>
                            <li>Analytics & exports</li>
                            <li>Fee management</li>
                        </ul>
                    </div>
                    <div className="role-card">
                        <h4>Teachers</h4>
                        <ul>
                            <li>Smart gradebook</li>
                            <li>Timetable tools</li>
                            <li>Classroom comms</li>
                        </ul>
                    </div>
                    <div className="role-card">
                        <h4>Students & Parents</h4>
                        <ul>
                            <li>Report cards</li>
                            <li>Alerts & reminders</li>
                            <li>MTN/Vodafone/AirtelTigo</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h3>Loved by Schools Across Ghana</h3>
                <p>
                    Simple onboarding, fast support and a system staff actually enjoy
                    using.
                </p>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>
                            “The MoMo integrations are seamless. Reconciling fees is now
                            effortless.”
                        </p>
                        <span>- Ama Owusu, Bursar, Accra</span>
                    </div>
                    <div className="testimonial">
                        <p>
                            “Teachers publish grades faster and parents get instant updates.”
                        </p>
                        <span>- Yaw Mensah, Head Teacher, Kumasi</span>
                    </div>
                    <div className="testimonial">
                        <p>
                            “Clean design, easy to train staff, and reliable support.”
                        </p>
                        <span>- Esi Aidoo, Administrator, Cape Coast</span>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="workflow">
                <h3>Works With Your Workflow</h3>
                <p>
                    Export to CSV, print report cards, and integrate with your telco
                    payments.
                </p>
                <div className="workflow-grid">
                    <div className="workflow-item">Exports</div>
                    <div className="workflow-item">Printing</div>
                    <div className="workflow-item">MoMo</div>
                    <div className="workflow-item">Security</div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 EduHub Ghana</p>
                <div className="footer-links">
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                    <a href="#contact">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

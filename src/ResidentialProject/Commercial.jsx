import '../ResidentialProject/Resident.css';
import ResidentMainImg from '../Images/ResidentialMainImg.png';
import CompanyLogo from '../Images/CompanyLogo.png';

import ProjectStatusComp from '../components/projectstatusComp'
import ProjImg from '../components/projectImgSlider'
import MilestonesPage from '../components/milestoneCode'

import shadiMahal from "../Images/shadimahal.jpg";
import Muncipality from "../Images/Commercial1.png";
import Coorg from "../Images/Commercial2.png";

const Commercial = () => {
    const milestones = [
        {
            title: "Shadi Mahal at Bc Road",
            description: "Shadi Mahal, located on BC Road in Bantwal, Karnataka, is a well-known wedding hall. While specific details about its completed projects are not widely available, it has been involved in local development initiatives, including the inauguration of a village office and post office in Paniyoor. For more detailed information, local government records or direct contact with the venue would be the best sources.",
            image: shadiMahal,
        },
        {
            title: "Municipality Commercial Project at Moodbidri",
            description: "Moodbidri has seen significant commercial development with projects like ICARE City Mall, a large shopping and entertainment complex, and Fortune Highway, a commercial-cum-residential space. Additionally, White Field Arcade offers prime commercial spaces. These projects highlight the town's growth as a commercial hub in Karnataka.",
            image: Muncipality,
        },

        {
            title: "Coorg Center Commecrcial Project at Madikeri",
            description: "The Spectrum The Coorg Centre in Madikeri is a significant commercial development spanning 4.82 acres, offering 300 units for various business needs. In addition to this, Madikeri has multiple commercial properties for sale, including commercial plots ranging from 1,598 to 5,000 sq.ft., retail shops, showrooms, and warehouses. These properties provide ample opportunities for investment in the growing commercial landscape of Madikeri, catering to a variety of business ventures.",
            image: Coorg,
        },

    ];

    return (
        <>
            <div className="project-container">
                <nav className="navbar">
                    <img src={CompanyLogo} className="Companylogo" alt="Company Logo" />
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#projects">Projects</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                </nav>
                <div className='ProjectBox'>
                    <p className='ResidentialText'>Commercial Projects</p>
                </div>
                <img
                    src={ResidentMainImg}
                    alt="Aerial view of construction site"
                    className="hero-image"
                />
            </div>
            <ProjectStatusComp />
            <div className='text1'>
                <p> Commercial construction projects require careful planning, coordination, and execution to meet the specific needs of businesses and organizations. The process begins with selecting a suitable location and establishing a clear budget, which will guide the design and construction phases. Architects and engineers then collaborate to create detailed plans for the building’s structure, layout, and essential systems, such as plumbing, electrical, and HVAC. Once designs are finalized, obtaining permits and approvals is essential to ensure compliance with local regulations. Afterward, construction teams break ground, focusing on quality, efficiency, and safety throughout the build. The goal is to deliver a functional, aesthetically pleasing, and sustainable space that aligns with the project's vision and serves its intended purpose.</p>
            </div>

            <ProjImg />
            <MilestonesPage milestones={milestones} />

        </>
    );
};



export default Commercial;

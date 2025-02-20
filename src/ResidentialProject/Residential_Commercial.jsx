import '../ResidentialProject/Resident.css';
import ResidentMainImg from '../Images/ResidentialMainImg.png';
import CompanyLogo from '../Images/CompanyLogo.png';

import ProjectStatusComp from '../components/projectstatusComp'
import ProjImg from '../components/projectImgSlider'
import MilestonesPage from '../components/milestoneCode'
import shadiMahal from "../Images/shadimahal.jpg";
import AACO_Cristal from "../Images/AACO_Cristal.jpg";
import M_H_Heights from "../Images/M_H_Heights.jpg";
import Galaxy_Building from "../Images/Galaxy_Building.jpg";



const milestones = [
    {
        title: "AACO Cristal at Alangar",
        description: "AACO Cristal is a company located in Alangar, Moodbidri, Karnataka, involved in residential building construction, business support services, and specialty trade contractors. One of the establishments under AACO Cristal is Grill House Chai House, offering food and beverages like chai and grilled items.",
        image: AACO_Cristal,
    },
    {
        title: "Yaswhi Commercial and Residential Building",
        description: "Mangalore has several prominent commercial and residential developments that contribute to its urban growth. Notable projects include Planet SKS, the tallest building in Mangalore at 135 meters with 40 floors, shaping the city's skyline. The Mukund Sadan in Dongerkery offers a blend of commercial and residential spaces, providing modern amenities for both business and living. Additionally, the IN-LAND Business Park, located on Bejai Main Road, is a well-known commercial complex offering state-of-the-art facilities for businesses. These projects showcase Mangalore's development as a growing hub for both residential and commercial properties.",
        image: shadiMahal,
    },

    {
        title: "M H Heights at Melkar",
        description: "M.H. Heights, located on University Road in Melkar, Mangalore, is a commercial and residential building that houses various businesses and services. Notable establishments within M.H. Heights include ARH Bright Lights and Electricals, a shop specializing in lighting and electrical products, and F3 Sports, which offers quality sports goods and customized sportswear. Additionally, the ground floor of M.H. Heights features a sports-related business, as indicated by an Instagram post. These businesses contribute to the vibrant commercial landscape of Melkar, providing essential products and services to the local community.",
        image: M_H_Heights,
    },

    {
        title: "Cecilio at Shirva Udupi",
        description: "Cecilio\" in Shirva, Udupi. However, Shirva is a town in the Udupi district, known for its cultural significance and landmarks like the Our Lady of Health Church.",
        image: M_H_Heights,
    },
    {
        title: "icare builders and developers at Many Place ",
        description: "ICARE Builders & Developers, based in Moodbidri, Karnataka, is a leading real estate company specializing in both residential and commercial projects. They have completed several notable developments, including Churchgate Palace in Kinnigoli, Nisarga Palace in Ponnechari, and Vincente Palace in Moodbidri. Their portfolio also includes Chaya Palace, Divya Sagar Palace, and Serrao Palace, offering quality living spaces. Additionally, ICARE is working on commercial ventures like ICARE City Mall and Bellstreet Palace, along with residential options like ICARE UK Residency Palace. Their projects cater to a variety of needs, from affordable housing to luxury developments, making them a key player in the region’s real estate growth.",
        image: M_H_Heights,
    },
    {
        title: "Manish Builders and developrs",
        description: "Manish Builders and Developers is a well-established real estate company with a strong presence in Karnataka, including Bangalore, Mangalore, Kundapura, and Moodabidri. Founded by Mrs. Preetha Jain and Mr. Niranjan C. Jain, the company specializes in both residential and commercial projects. Their portfolio includes high-quality residential developments offering modern living spaces, as well as commercial projects designed to meet the evolving needs of businesses. Manish Builders and Developers is dedicated to delivering top-notch properties, contributing significantly to the region's real estate landscape.",
        image: M_H_Heights,
    },
    {
        title: "Galaxy  Building at moodbdiri",
        description: "In Moodbidri, notable Galaxy projects include Vishwas Galaxy, offering 2 and 3 BHK apartments, and Modern Galaxy Apartment, with 2 and 3 BHK options. There's also Fortune Galaxy in Bajpe, offering 2 BHK flats and commercial spaces. These developments provide modern amenities and cater to diverse living and business needs.",
        image: Galaxy_Building,
    }

];


const Residencial_commercial = () => {


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
                    <p className='ResidentialText'>Residential & Commercial Projects</p>
                </div>
                <img
                    src={ResidentMainImg}
                    alt="Aerial view of construction site"
                    className="hero-image"
                />
            </div>
            <ProjectStatusComp />
            <div className='text1'>
                <p> Residential and commercial construction projects both require careful planning, design, and execution, though they differ in scope and purpose. Residential projects focus on creating homes or living spaces, with a priority on comfort, functionality, and personal preferences. Commercial projects, on the other hand, involve larger-scale buildings for business, retail, or industrial use, requiring more complex designs, higher budgets, and adherence to strict regulations. While both types of projects involve site selection, budgeting, structural work, and compliance with building codes, commercial construction typically demands more advanced systems and features due to the nature of the space and its public use.</p>
            </div>

            <ProjImg />
            <MilestonesPage milestones={milestones} />

        </>
    );
};



export default Residencial_commercial;

import '../ResidentialProject/Resident.css';
import ResidentMainImg from '../Images/ResidentialMainImg.png';
import CompanyLogo from '../Images/CompanyLogo.png';

import ProjectStatusComp from '../components/projectstatusComp'
import ProjImg from '../components/projectImgSlider'
import MilestonesPage from '../components/milestoneCode'
import M_H_Heights from "../Images/M_H_Heights.jpg";
import Creative_college from "../Images/Creative_college.jpg";
import Vibrant_college from "../Images/Vibrant_college.jpg";
import VidyodayaSchool from "../Images/VidyodayaSchool.jpg";



const milestones = [
    {
        title: "Vibrant college boys hostel project at moodbdiri",
        description: "Vibrant PU College in Moodbidri offers dedicated hostel facilities for both boys and girls within its serene campus. The boys' hostel provides spacious rooms with attached washrooms, ensuring hygienic and comfortable living conditions. Additional amenities include daily housekeeping, 24/7 hot water availability, and nutritious meals. Experienced wardens and student welfare officers oversee the hostel, and a doctor is available on call to address health concerns.",
        image: Vibrant_college,
    },
    {
        title: "Vidyodaya School Building & Hostel Building at Venoor",
        description: "Vidyodaya School in Venoor, Karnataka, is a well-established educational institution offering primary and secondary education. The school operates from a private building with seven classrooms dedicated to instructional purposes, all of which are in good condition.",
        image: VidyodayaSchool,
    },
    {
        title: "Creative college karakala various construction ongoing New aacademic Blockr",
        description: "Creative PU College in Karkala, Karnataka, is undergoing significant infrastructure development, including the construction of a new academic block. This expansion aims to enhance the learning environment by providing modern classrooms and facilities to accommodate the growing student population. The project is being executed by  UK Enterprises., a construction company known for delivering quality educational infrastructure. A recent Instagram post by Bimal Buildcon showcases the completed project within the Creative College campus, highlighting their commitment to creating conducive learning spaces.",
        image: Creative_college,
    },
    {
        title: "Sujnan  Educational trust Kundapura Hostel Building College Building",
        description: "The Sujnan Educational Trust in Kundapura, Karnataka, has undertaken significant infrastructure projects to enhance educational facilities in the region. Notably, the Trust has constructed a hostel building to provide comfortable accommodation for students, fostering a conducive learning environment. Additionally, the Trust has developed a college building, furthering its commitment to delivering quality education to the community. These completed projects underscore the Trust's dedication to educational excellence and community development.",
        image: M_H_Heights,
    },
    {
        title: "Al Birr International School At moodbidri ",
        description: "Al Birr International School in Moodbidri, Karnataka, is part of the Al Birr Schools network, which operates over 400 institutions across India and abroad. The school offers a comprehensive educational experience that combines academic excellence with moral and ethical values. The curriculum is designed to foster holistic development, providing a positive and nurturing environment for students. Al Birr Schools are equipped with modern facilities, including well-lit classrooms, libraries, and play areas, to support various learning activities. The institution emphasizes activity-based learning and employs modern, Islamic, and scientific teaching methods to enhance the educational experience.",
        image: M_H_Heights,
    }

];

const Schools_Colleges = () => {


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
                    <p className='ResidentialText'>Schools & College
                        Projects</p>
                </div>
                <img
                    src={ResidentMainImg}
                    alt="Aerial view of construction site"
                    className="hero-image"
                />
            </div>
            <ProjectStatusComp />
            <div className='text1'>
                <p> School and college construction projects focus on creating safe, functional, and inspiring environments for education. School projects typically involve smaller buildings like classrooms, libraries, and playgrounds, prioritizing safety and accessibility. College projects are larger, often including lecture halls, dormitories, research labs, and student centers, with an emphasis on advanced technology and sustainability. Both types of projects require careful planning, adherence to regulations, and designs that support effective learning and student well-being.</p>
            </div>

            <ProjImg />
            <MilestonesPage milestones={milestones} />

        </>
    );
};



export default Schools_Colleges;

import '../ResidentialProject/Resident.css';
import ResidentMainImg from '../Images/ResidentialMainImg.png';
import CompanyLogo from '../Images/CompanyLogo.png';

import ProjectStatusComp from '../components/projectstatusComp'
import ProjImg from '../components/projectImgSlider'
import MilestonesPage from '../components/milestoneCode'
import KotebagiluTemple from "../Images/KotebagiluTemple.jpg";
import KodyadkaTemple from "../Images/KodyadkaTemple.jpg";

const milestones = [
    {
        title: "Annpoorneshwari Temple Hosanadu Kodyadka",
        description: "  The Hosanadu Kodyadka Annapoorneshwari Temple is a prominent Hindu temple dedicated to Goddess Annapoorneshwari, located in Puttige village near Moodbidri, Karnataka. Known for its serene setting and traditional South Indian architecture, the temple features a spacious prayer hall and intricate carvings. It attracts devotees for daily rituals and special poojas, with community activities and feasts also organized. The temple is a vital cultural and spiritual hub for the surrounding area. ",
        image: KodyadkaTemple,
    },
    {
        title: "Veera Maruthi Temple at Kotebagilu Moodbidri",
        description: "  The Veera Maruthi Temple at Kotebagilu, Moodbidri, is a significant religious and cultural landmark. Dedicated to Lord Hanuman, the temple is known for its traditional South Indian architecture, featuring intricately carved pillars and a spacious prayer hall. The temple has become a vital spiritual hub for the local community, actively engaging in various poojas and cultural events. Its serene environment provides a peaceful setting for devotees and visitors alike, making it a prominent site in the area. This completed project not only enhances the region's religious heritage but also strengthens its cultural fabric. ",
        image: KotebagiluTemple,
    },

];


const Religious_Buildings = () => {


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
                    <p className='ResidentialText'>Religious Buildings</p>
                </div>
                <img
                    src={ResidentMainImg}
                    alt="Aerial view of construction site"
                    className="hero-image"
                />
            </div>
            <ProjectStatusComp />
            <div className='text1'>
                <p> Religious building construction projects focus on creating spaces that foster spiritual practices, community gatherings, and reflection. These projects include churches, mosques, temples, synagogues, and other places of worship. The design emphasizes elements that enhance the spiritual experience, such as sacred spaces, prayer halls, and architectural features like domes, spires, or intricate stained glass. In addition to the worship areas, these projects often include classrooms, community halls, and outdoor spaces for events. The construction process prioritizes both aesthetic beauty and functionality, ensuring that the space meets the needs of the congregation while respecting religious traditions and cultural significance.</p>
            </div>

            <ProjImg />
            <MilestonesPage milestones={milestones} />

        </>
    );
};



export default Religious_Buildings;

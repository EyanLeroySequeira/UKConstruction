import React from 'react';
import './Resident.css';
import ResidentMainImg from '../Images/ResidentialMainImg.png';
import CompanyLogo from '../Images/CompanyLogo.png'
import ProjectStatusComp from '../components/projectstatusComp'
import ProjImg from '../components/projectImgSlider'
import MilestonesPage from '../components/milestoneCode'
import shadiMahal from "../Images/shadimahal.jpg";


const milestones = [
    {
        title: "Blue Bird Builders Moodbidri  2 apartments ",
        description: "Blue Bird Builders presents two modern apartment projects in Moodbidri, offering spacious, well-designed homes with top-quality construction. Located in prime areas, these apartments feature modern amenities, ample ventilation, and superior craftsmanship. With secure living spaces, parking, and recreational facilities, they provide the perfect blend of comfort and convenience.",
        image: shadiMahal,
    },

];

const Resident = () => {

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
                    <p className='ResidentialText'>Residential Buildings</p>
                </div>
                <img
                    src={ResidentMainImg}
                    alt="Aerial view of construction site"
                    className="hero-image"
                />
            </div>
            <ProjectStatusComp />
            <div className='text1'>
                <p> laudantium blanditiis e, pariatur quia nesciu hic sequi facere. Numquam eveniet commodi dolorem nam laboriosam iusto enim, natus earum eaque vitae hic officia inventore! Ratione non nam ullam facilis atque harum. Repellendus aliquid laborum quod vitae tempora ipsam a minima labore fugiat fugit veritatis explicabo expedita deserunt, commodi vero quos nostrum iure architecto facere maxime reprehenderit. Quam ex in fuga quae voluptate consectetur reprehenderit fugiat tempore autem nulla ullam voluptatem adipisci, quo architecto ipsa illo est dolor excepturi. Minus, eos, enim autem ad corrupti laboriosam consectetur aperiam at omnis atque consequatur dolor molestiae quis voluptatem ipsa. Inventore nostrum optio voluptatem consectetur sed aliquam perferendis. Ad reprehenderit ducimus pariatur accusamus sunt fugiat, voluptatibus facere unde! Ab quam, dolorum porro, natus temporibus, libero modi assumenda voluptas maxime doloribus provident dolore ducimus reiciendis. Quisquam repellendus sit sunt, pariatur voluptas necessitatibus aperiam explicabo alias dolorum veniam libero possimus suscipit repudiandae deserunt omnis blanditiis! Ut, molestiae officia? Dolorem placeat debitis amet labore illum in architecto. Reiciendis, aliquam. Quis neque consequuntur, ipsa ipsam repellat error voluptas facilis assumenda dolorem nobis aliquid atque itaque laborum illo rerum accusamus similique explicabo ducimus adipisci consectetur nisi amet. Quo, molestias! Ipsam dolore molestiae exercitationem blanditiis consequuntur. Labore modi corporis commodi natus, cupiditate porro quo aspernatur magni facere illum. Architecto pariatur debitis maxime optio ab exercitationem odit ducimus accusantium earum nulla, facilis ad nam nemo, saepe dicta sint vitae sed eos magnam iure dolore numquam!</p>
            </div>

            <ProjImg />
            <MilestonesPage milestones={milestones} />

        </>
    );
};



export default Resident;

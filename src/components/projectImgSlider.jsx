import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ResidentialProject/Resident.css';
import Residential1 from '../Images/Residential1.png';
import Residential2 from '../Images/Residential2.png';
import Residential3 from '../Images/Residential3.png';

const images = [
    Residential1,
    Residential2,
    Residential3,
    Residential2,
];

const ImageGallery = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            $(".center").not(".slick-initialized").slick({
                centerMode: true,
                centerPadding: "30px",
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            centerPadding: "20px",
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            centerPadding: "10px",
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: "10px",
                            arrows: false,
                        },
                    },
                ],
            });
        }
    }, []);

    return (
        <div className="center">
            {images.map((image, index) => (
                <div className="slide" key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;

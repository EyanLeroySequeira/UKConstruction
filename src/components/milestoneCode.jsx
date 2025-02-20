
import React, { useState, useEffect } from "react";
import "./milestone.css";

const MilestonesPage = ({ milestones }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="milestones-container">
            <h2 className="milestones-title">Project Milestones</h2>
            {milestones.map((milestone, index) => (
                <div className={`milestone-card ${isMobile ? "mobile-layout" : ""}`} key={index}>
                    {isMobile ? (
                        <>
                            <h3 className="milestone-title">{milestone.title}</h3>
                            <span className="milestone-status">Completed</span>
                            <div className="milestone-image-container">
                                <img src={milestone.image} alt={milestone.title} className="milestone-image" />
                            </div>
                            <p className="milestone-description">{milestone.description}</p>
                        </>
                    ) : (
                        <>
                            <div className="milestone-image-container">
                                <img src={milestone.image} alt={milestone.title} className="milestone-image" />
                            </div>
                            <div className="timeline">
                                <div className="timeline-circle"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="milestone-content">
                                <span className="milestone-status">Completed</span>
                                <h3 className="milestone-title">{milestone.title}</h3>
                                <p className="milestone-description">{milestone.description}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MilestonesPage;

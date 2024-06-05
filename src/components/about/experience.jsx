import React, { useEffect } from "react";
import SEO from "../../data/seo";
import './styles/experience.css'
import "../../data/styles.css";


const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
            <div className="experience">
                <div className="exp-date-title" >
                    <div className="experience-date">
                        <p>JAN 2023 - PRESENT</p>
                    </div>

                    <div className="experience-title">
                        <p1>SOFTWARE ENGINEER <span style={{color:"blue", fontSize:"larger", fontWeight:"bolder"}}> @DHives</span></p1>
                    </div>

                </div>
                <div className="experience-details">
                    <p1>
                        Developed and scaled enterprise-level applications using Java technologies and MERN Stack. 
                        Played a pivotal role in ensuring code quality and finalizing design requirements. Successfully implemented key features for 
                        a music industry product and a real estate portal, enhancing functionalities and streamlining deployment processes.
                    </p1>
                </div>
            </div>

	);
};

export default Experience;

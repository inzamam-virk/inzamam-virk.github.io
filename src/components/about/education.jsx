import React, { useEffect } from "react";
import SEO from "../../data/seo";
import './styles/education.css'
import "../../data/styles.css";


const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "Education");

	return (
            <div className="education">
                <div className="edu-date-title" >
                    <div className="education-date">
                        <p>OCT 2019 - MAY 2023</p>
                    </div>
                    <div style={{alignItems: "center", paddingLeft: "8%"}}>
                        <div className="education-title">
                            <p1 >BS COMPUTER SCIENCE</p1>
                        </div>
                        <div className="education-school">
                            <p>University Of Engineering And Technology, LAHORE</p>
                        </div>
                    </div>
                </div>
                
                <div className="education-details">
                    <p1>
                        Completed 4 years of degree which includes relevant courses like OOP, Data Structures, Algorithms, 
                        Databases, AI & Machine Learning, etc.
                    </p1>
                </div>
            </div>

	);
};

export default Education;

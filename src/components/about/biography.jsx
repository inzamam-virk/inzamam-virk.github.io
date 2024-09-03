import React, { useEffect } from "react";
import SEO from "../../data/seo";
import './styles/biography.css'
import { text } from "@fortawesome/fontawesome-svg-core";
import "../../data/styles.css";


const Biography = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "biography");

	return (
            <div className="biography">
                <div className="summary">
                    {/* <div className="summary-title" style={{font: 'var(--primary-font)',  color: 'var(--primary-color)', fontWeight: 'bold' }} >
                        <h2>.</h2>
                    </div> */}
                    <div className="summary-details" style={{font: 'var(--primary-font)',  color: 'var(--primary-color)' }}>
                        <p>
                            I'm Inzamam Virk, I started my career back in 2019 when I started my graduation in computer sciences.
                            In my last semester, I joined DHives as a software engineer where I worked in different 
                            technology stacks starting with MERN stack to build a real-estate portal then I moved to another
                            Java-based project with microservices architechture. I am experienced in working with both small 
                            and large teams across multiple projects. 
                        </p>
                        <p>
                            I believe in the power of design excellence and user-centered thinking in every project I undertake.
                            My commitment to innovation and problem-solving drives me to bring my clients' visions to life effectively 
                            and efficiently.
                        </p>
                    </div>
                </div>
                <div className="about-image-container">
                    <div className="about-image-wrapper">
                        <img
                            src="about.jpg"
                            alt="about"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>

	);
};

export default Biography;

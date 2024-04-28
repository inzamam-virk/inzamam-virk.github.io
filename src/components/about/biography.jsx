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
                    <div className="summary-title" style={{font: 'var(--primary-font)',  color: 'var(--primary-color)', fontWeight: 'bold' }} >
                        <h2>Biography:</h2>
                    </div>
                    <div className="summary-details" style={{font: 'var(--primary-font)',  color: 'var(--primary-color)' }}>
                        <p>Hello, I'm Inzamam Virk, a Full Stack Engineer with proficiency in developing web applications and 
                            backend systems. I am specialized in building and managing scalable, high performance applications 
                            using java based technologies, JavaScript React.js, Node.js, and AWS technologies and writing clear, 
                            concise code that is easy to maintain and troubleshoot. I am experienced in working with both small 
                            and large teams across multiple projects.  I had opportunity to contribute in teams with different 
                            technology stacks making their products usable for hundreds of thousands of users worldwide.
                        </p>
                        <p>
                            I believe in the power of design excellence and user-centered thinking in every project I undertake.
                        </p>
                        <p>
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

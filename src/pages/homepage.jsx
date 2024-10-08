import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const resume_link = "https://drive.google.com/file/d/1ZI9stunymJNOuCk5jFxG2NPyAm1W9C3V/view?usp=sharing";
	const cover_letter_link = "https://drive.google.com/file/d/1rj2S8ejRuXJCVJqpRjBybnEpBfNLcA1z/view?usp=sharing";


	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									<p>
										Full Stack Engineer with 2 years of experience, I specialize in the conception, development, deployment,
									and expansion of web applications. My core competency lies in crafting robust and efficient backend solutions using Java-
									based technologies with microservices architecture. Additionally, I’ve worked with MERN Stack to engineer adaptable solutions 
									and develop an enterprise-level real-estate portal.
									</p>
									<p>
										Throughout my professional career, I had the opportunity to contribute in teams with different technology stacks, making
										valuable contributions to make their products successful. I am eager to contribute my wealth of expertise to assist your
										organization in crafting and scaling solutions to drive its growth.
									</p>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="Profile-Current.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="resume" style={{marginTop:"3%", marginBottom:"8%"}}>
							<a target="_blank" class="resume-button" download="" href={resume_link}>
								Resume
								<img className="resume-img" src="./resume-svg.svg" alt="Download Icon"/>
							</a>
							<a target="_blank" class="resume-button" download="" href={cover_letter_link} style={{marginLeft:"30%"}}>
								Cover Letter
								<img className="resume-img" src="./resume-svg.svg" alt="Download Icon"/>
							</a>
						</div>


						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

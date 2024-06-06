import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Biography from "../components/about/biography";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Skills from "../components/about/skills";
import Experience from "../components/about/experience";
import Education from "../components/about/education";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="title about-title" >
								{INFO.about.title}
							</div>
							<div className="biography">
								<Biography/>
							</div>
						</div>
					</div>

					<div className="about-skills-title"  style={{marginTop:'5%'}}>
						<h2>Skills</h2>
					</div>

					<div className="about-skills">
						<Skills/>
					</div>

					<div className="about-experience-title"  style={{marginTop:'7%'}}>
						<h2>Experience</h2>
					</div>
					<div>
						<Experience/>
					</div>
					<div className="about-education-title"  style={{marginTop:'7%'}}>
						<h2>Education</h2>
					</div>
					<div>
						<Education/>
					</div>
					<div style={{padding:"10%"}}>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

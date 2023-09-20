import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4D0BAQFL_HQNbOvGBA/company-logo_200_200/0/1677030706340?e=2147483647&v=beta&t=rSnEQM0vSu3YISFiuWimvJ3FQ60Wl4c6fZ-EJ5IK7Cg"
								alt="dhives"
								className="work-image"
							/>
							<div className="work-title">DHives</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Feb-2023 - Present</div>
							<br />
							{/* <div className="work-description">
								At DHives, I've been instrumental in building scalable web applications using the MERN stack. My responsibilities include designing robust architectures, collaborating with cross-functional teams, and ensuring code quality.
							</div> */}
						</div>
						<div className="work-description">{'\u2023     '}
							Contributed as a Software Engineer at Dhives,
							specializing in MERN stack development for 1
							year with a deep understanding of
							asynchronous programming in Node.js, RESTful
							API architecture, and OAuth 2.0 authentication
							flows. Demonstrated expertise in relational and
							NoSQL database schema design, management,
							and migrations utilizing Sequelize ORM. Hands
							on experience in deploying and maintaining
							cloud based applications on platforms such as
							GCP, with proficiency in serverless architecture
							and container orchestration. Skilled in front end
							development using advanced React features,
							including hooks, state management, and
							performance optimization.
							<span className="hidden">hiddenwordhiddenwordhiddenword</span>
						</div>
						<div className="work-description">{'\u2023     '}
							Elevated to Team Lead position for the past
							month, collaborating seamlessly with cross
							functional teams including Development, Design,
							and Cloud, to drive comprehensive project
							outcomes.
							<span className="hidden">hiddenwordhiddenwordhiddenword</span>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;

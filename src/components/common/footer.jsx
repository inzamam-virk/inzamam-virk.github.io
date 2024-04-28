import React from "react";
import { Link } from "react-router-dom";
import Socials from "../about/socials";
import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Socials />
						</li>
					</ul>
				</div>

				
			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						Say Hello @ {INFO.main.email}
						
					</a>
				</div>
			</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

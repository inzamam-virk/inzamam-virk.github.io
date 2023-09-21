import React from "react";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
    return (
        <div className="education" >
            <Card
                className="custom-card"  // Add the class here
                icon={faGraduationCap}
                title="Graduation"
                body={
                    <div className="education-body">
                        <div className="education-uet">
                            <img
                                src="uet-logo.png"
                                alt="UET Lahre"
                                className="uet-image"
                            />
                            <div className="graduation-title">UET Lahore</div>
                            <div className="graduation-subtitle">
                                BS Computer Science
                            </div>
                            <div className="eduation-duration">2019 - 2023</div>
                            <br />
                        </div>

                    </div>
                }
            />
        </div>
    );
};

export default Education;

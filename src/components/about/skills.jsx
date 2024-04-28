import React from "react";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="about-skills">
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/java.svg"} alt="java"/>
                <p>Java</p>
            </div>
            
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/spring-boot.svg"} alt="spring-logo"/>
                <p>Spring Boot</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/python.svg"} alt="python"/>
                <p>Python</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/react.svg"} alt="react"/>
                <p>React.js</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/nodejs.svg"} alt="nodejs"/>
                <p>Node.js</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/databases.png"} alt="databases"/>
                <p>Databases</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/git.svg"} alt="git"/>
                <p>Git</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/docker.svg"} alt="docker"/>
                <p>Docker</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/rest-api.png"} alt="apis"/>
                <p>RESTful APIs</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/aws.svg"} alt="aws"/>
                <p>AWS</p>
            </div>
            <div className="box-icon" >
                <img width="50" height="50" src={"./skill-icons/gcp.svg"} alt="gcp"/>
                <p>GCP</p>
            </div>
        </div>
	);
};

export default Skills;

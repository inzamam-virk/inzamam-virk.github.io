import React, { useRef, useState } from "react";
import "./ContentPage.css";
import contents from "./Content.json"
export default function Content() {
   

    const contentRefs = useRef([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleHeadingClick = index => {
        contentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <React.Fragment>
            <div className="article-content">

                <div className="sidebar-card" style={{ height: isDropdownOpen ? '20%' : '40px'  }}>
                    <div className="card-header" onClick={toggleDropdown}>
                        <span>Course Content</span>
                        <span className="dropdown-icon" style={{ transform: isDropdownOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}>▼</span>
                    </div>
                    <div className="scroll-container" style={{ display: isDropdownOpen ? 'block' : 'none', overflowY: 'auto', maxHeight: '200px' }}>
                        <ul className="heading-list">
                            {contents.map((content, index) => (
                                <li key={index} onClick={() => handleHeadingClick(index)}>
                                    <span className="bullet-point">&#8226;</span> {content.heading}

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="content-section">
                    {contents.map((content, index) => (
                        <div key={index} ref={el => contentRefs.current[index] = el} id={content.heading} className="content">
                            <h2>{content.heading}</h2>
                            <p>{content.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </React.Fragment>
    )
}

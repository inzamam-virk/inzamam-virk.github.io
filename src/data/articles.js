import React from "react";

function article_1() {
	return {
		date: "23 Sep 2023",
		title: "Why to learn javascript",
		description:
			"JavaScript’s popularity stems from a combination of its inherent design characteristics, capabilities, and the ecosystem that has evolved around it",
		keywords: [
			"Why to learn javascript",
			"Inzamam",
			"InzamamVirk",
			"Inzamam Virk",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Coming soon! Be connected!</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 Sep 2023",
		title: "6 Stages of Debugging!",
		description:
			"The 6 stages of debugging is a humoristic phrase often shared among programmers to describe the emotional rollercoaster they experience when debugging software.",
		style: ``,
		keywords: [
			"6 Stages of Debugging!",
			"Inzamam",
			"Inzamam V",
			"Inzamam Virk",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Coming soon! Be connected!</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;

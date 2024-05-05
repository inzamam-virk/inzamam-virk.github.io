import React from "react";
import Content from "./articles/ContentPage";

function article_1() {
	return {
		date: "05 May 2024",
		title: "Running Python script with aws lambdas",
		description:
			"Learn how to efficiently handle large record updates using AWS Lambdas",
		keywords: [
			"python",
			"script",
			"aws lambda",
			"Inzamam Virk",
		],
		link:'https://inzamamvirk.hashnode.dev/running-python-script-with-aws-lambdas',
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
				`
	};
}

function article_2() {
	return {
		date: "23 Sep 2023",
		title: "Why to learn javascript",
		description:
			"JavaScript’s popularity stems from a combination of its inherent design characteristics, capabilities, and the ecosystem that has evolved around it.",
		keywords: [
			"Why to learn javascript",
			"Inzamam",
			"InzamamVirk",
			"Inzamam Virk",
		],
		link:'',
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
				`
	};
}


const myArticles = [article_1, article_2];

export default myArticles;

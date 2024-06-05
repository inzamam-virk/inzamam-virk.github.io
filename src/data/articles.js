
function article_1() {
	return {
		date: "05 May 2024",
		title: "Executing Python Scripts with AWS Lambda",
		description:
			"Discover Efficient Strategies for Handling Large Record Updates with AWS Lambdas",
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
		date: "06 May 2024",
		title: "Packaging Your AWS Lambda Function",
		description:
			"Guidance on Packaging AWS Lambdas and Addressing Common Challenges",
		keywords: [
			"AWS",
			"script",
			"aws lambda",
			"Inzamam Virk",
		],
		link:'https://inzamamvirk.hashnode.dev/package-your-aws-lambda',
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

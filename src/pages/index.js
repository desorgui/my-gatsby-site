import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
	return (
		<Layout pageTitle="HomePage">
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
			/>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
				src="../images/design.jpg"
			/>
		</Layout>
	);
};

export default HomePage;

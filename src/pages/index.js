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
				alt="My photoshop Design"
				src="../images/design.jpg"
			/>
		</Layout>
	);
};

export default HomePage;

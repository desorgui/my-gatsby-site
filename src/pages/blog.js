import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allFile.nodes.map((node) => {
					return <li key={node.id}>{node.name}</li>;
				})}
			</ul>
		</Layout>
	);
};
export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
			nodes {
				name
				id
			}
		}
	}
`;
export default BlogPage;

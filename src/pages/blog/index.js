import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => {
				return (
					<article key={node.id}>
						<Link to={`${node.slug}`}>
							<h1>{node.frontmatter.title}</h1>
						</Link>
						<p>{node.frontmatter.date}</p>
					</article>
				);
			})}
		</Layout>
	);
};
export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "dddd, MMMM, Do, YYYY")
					title
				}
				id
				slug
			}
		}
	}
`;
export default BlogPage;

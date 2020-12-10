import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

export const RelatedPosts = ({ tags, title }) => {
  // 全記事のデータを取得
  const data = useStaticQuery(graphql`
    query worksRelatedPostsQuery {
      allMarkdownRemark(
          filter: { frontmatter: { category: { in: ["works"] } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
              thumnail {
                childImageSharp {
                  fluid(maxWidth: 338) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  // 条件に一致する関連記事のみを絞り込む
    const relatedPosts = data.allMarkdownRemark.edges.filter(edge => {
        if (edge.node.frontmatter.title === title) {
        return false;
    }
    for (let i = 0; i < tags.length; i++) {
        if (edge.node.frontmatter.tags.indexOf(tags[i]) >= 0) {
            return true;
        }
    }
        return false;
    });

    // 関連記事があれば表示する
    if (!relatedPosts.length) {
        return null;
    }

    const relatedPost4 = relatedPosts.slice(0, 6);

  return (
    <div className="mt-80">
      <h2>関連記事</h2>
        <ul className="blog-post-nav d-md-flex flex-wrap">
        {relatedPosts.map((row, index) => (
            <li className="col-md-6 pl-10 pr-10" key={index}>
                <Link to={row.node.fields.slug} itemProp="url">
                    <Image fluid={row.node.frontmatter.thumnail.childImageSharp.fluid}/>
                    <span>{row.node.frontmatter.title}</span>
                </Link>
            </li>
        ))}
    </ul>
  </div>
  );
};

export default RelatedPosts

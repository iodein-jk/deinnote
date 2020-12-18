import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TAG from "../components/tag"
import POST from "../components/post"
import PAGER from "../components/pager"

const BlogIndex = ({data, location, pageContext, numPages ,siteUrl}) => {
    const siteTitle = `ブログ`
    const posts = data.allMarkdownRemark.nodes

    return (<Layout location={location} title={siteTitle}>
        <div class="container">
            <SEO title={siteTitle} />
            <h1 class="heading-main"><span>{siteTitle}</span></h1>
            <TAG />
            <POST posts={posts} />
            <PAGER pages={pageContext} />
        </div>
    </Layout>)
}

export default BlogIndex

export const pageQuery = graphql `
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: ["blog"] } } }
      limit: $limit
      skip: $skip
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          description
          slug
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
      group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
      }
    }
  }
`

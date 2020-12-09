import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TAG from "../components/tag"
import POST from "../components/post"
import PAGER from "../components/pager"

import Image from "gatsby-image";

import kebabCase from "lodash/kebabCase"

const BlogIndex = ({data, location, pageContext, numPages}) => {
    const siteTitle = `ブログ` || `Title`
    const posts = data.allMarkdownRemark.nodes
    const tags = data.allMarkdownRemark

    return (<Layout location={location} title={siteTitle}>
        <div class="container">
            <SEO title={siteTitle} />
            <h1 class="heading-main"><span>ブログ</span></h1>
            <TAG tag={tags} />
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

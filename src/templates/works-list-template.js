import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TAG from "../components/works-tag"
import WORK from "../components/work"
import PAGER from "../components/works-pager"

import Image from "gatsby-image";

import kebabCase from "lodash/kebabCase"

const WorksIndex = ({data, location, pageContext, numPages}) => {
    const siteTitle = `制作実績` || `Title`
    const posts = data.allMarkdownRemark.nodes
    const tags = data.allMarkdownRemark

    return (<Layout location={location} title={siteTitle}>
        <div class="container">
            <SEO title={siteTitle} />
            <h1 class="heading-main"><span>過去の制作物</span></h1>
            <TAG tag={tags} />
            <WORK posts={posts} />
            <PAGER pages={pageContext} />
        </div>
    </Layout>)
}

export default WorksIndex

export const pageQuery = graphql `
  query worksListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: ["works"] } } }
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

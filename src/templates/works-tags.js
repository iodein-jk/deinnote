import React from "react"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TAG from "../components/works-tag"
import WORKS from "../components/work"
import PAGER from "../components/pager"

const Tags = ({data, location, pageContext}) => {
    const siteTitle = pageContext || `Title`
    const posts = data.allMarkdownRemark.nodes
    const tags = data.allMarkdownRemark

    const {tag} = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const tagHeader = `${tag}`

    return (<Layout location={location} title={tagHeader}>
        <div class="container-3">
            <SEO title={tag} />
            <h1 class="heading-main"><span>{tagHeader}</span></h1>
            <TAG tag={tags} />
            <WORKS posts={posts} />
        </div>
    </Layout>)
}

Tags.propTypes = {
    pageContext: PropTypes.shape({tag: PropTypes.string.isRequired}),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    frontmatter: PropTypes.shape({title: PropTypes.string.isRequired}),
                    fields: PropTypes.shape({slug: PropTypes.string.isRequired})
                })
            }).isRequired)
        })
    })
}

export default Tags

export const pageQuery = graphql `
  query worksTagListQuery($tag: String) {
      site {
        siteMetadata {
          title
        }
      }
    allMarkdownRemark(sort: {
        fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] }, category: { in: ["works"] } } }
        limit: 2000
    ) {
      totalCount
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

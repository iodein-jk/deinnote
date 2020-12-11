import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import kebabCase from "lodash/kebabCase"

const PagePostTemplate = ({data, pageContext, location}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const siteUrl = data.site.siteMetadata.siteUrl;
    const description = post.frontmatter.description;
    const excerpt = post.frontmatter.excerpt;
    const title   = post.frontmatter.title;
    const slug    = post.frontmatter.slug;

    return (<Layout location={location} title={siteTitle}>
        <SEO title={title} description={description || excerpt}/>
        <article className="blog-post container-2" itemScope="itemScope" itemType="http://schema.org/Article">
            <header className="text-center">
                <h1 itemProp="headline">{title}</h1>
            </header>
            <section className="articleBody" dangerouslySetInnerHTML={{
                    __html: post.html
                }} itemProp="articleBody"/>
        </article>
    </Layout>)
}

export default PagePostTemplate

export const pageQuery = graphql `
  query PagePostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY年MM月DD日")
        description
        slug
      }
    }
  }
`

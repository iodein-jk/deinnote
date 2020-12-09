import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "gatsby-image";

import kebabCase from "lodash/kebabCase"

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (<Layout location={location} title={siteTitle}>
            <SEO title="All posts"/>
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
            </p>
        </Layout>)
    }

    return (<Layout location={location} title={siteTitle}>
        <SEO title="All posts"/>
        <ol style={{
                listStyle: `none`
            }}>
            {
                posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const tags = post.frontmatter.tags
                    const tagItems = tags.map((tag) => <li>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>)
                    return (<li key={post.fields.slug}>
                        <article className="post-list-item" itemScope="itemScope" itemType="http://schema.org/Article">
                            <header>
                                <figure>
                                    <Link to={post.fields.slug} itemProp="url"><Image fluid={post.frontmatter.thumnail.childImageSharp.fluid}/></Link>
                                </figure>
                                <h2>
                                    <Link to={post.fields.slug} itemProp="url">
                                        <span itemProp="headline">{title}</span>
                                    </Link>
                                </h2>
                                <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                                <p dangerouslySetInnerHTML={{
                                        __html: post.frontmatter.description || post.excerpt
                                    }} itemProp="description"/>
                                <ul class="tagname">
                                    {tagItems}
                                </ul>
                            </section>
                        </article>
                    </li>)
                })
            }
        </ol>
    </Layout>)
}

export default BlogIndex

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
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

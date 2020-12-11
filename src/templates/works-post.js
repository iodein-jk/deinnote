import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share";
import RelatedPosts from "../components/works-related";

import Image from "gatsby-image";
import kebabCase from "lodash/kebabCase"

const WorksPostTemplate = ({data, pageContext, location}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const {previous, next} = data
    const tags = post.frontmatter.tags
    const tagItems = tags.map((tag) => <li class="col">
        <Link to={`/works-tags/${kebabCase(tag)}/`}>{tag}</Link>
    </li>)
    const siteUrl = data.site.siteMetadata.siteUrl;
    const slug    = post.frontmatter.slug;

    return (<Layout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
        <article className="blog-post container-2" itemScope="itemScope" itemType="http://schema.org/Article">
            <header className="text-center">
                <figure>
                    <div className="posts__image">
                        <Image className="" fluid={post.frontmatter.thumnail.childImageSharp.fluid}/>
                    </div>
                </figure>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p className="datetime">{post.frontmatter.date}</p>
                <ul class="tagname d-flex flex-wrap justify-content-center">
                    {tagItems}
                </ul>
                <Share title={post.frontmatter.title} url={`${siteUrl}${slug}`} description={post.excerpt} />
            </header>
            <section className="articleBody" dangerouslySetInnerHTML={{
                    __html: post.html
                }} itemProp="articleBody"/>
        </article>
        <nav className="blog-post-nav container-2 mt-80">
            <RelatedPosts tags={post.frontmatter.tags} title={post.frontmatter.title}></RelatedPosts>
            <ul className="d-md-flex">
                <li className="col-md-6 pl-10 pr-10">
                    {
                        previous && (<Link to={`/${previous.frontmatter.slug}`} rel="prev">
                            <Image fluid={previous.frontmatter.thumnail.childImageSharp.fluid}/>
                            <span>{previous.frontmatter.title}</span>
                        </Link>)
                    }
                </li>
                <li className="col-md-6 pl-10 pr-10">
                    {
                        next && (<Link to={`/${next.frontmatter.slug}`} rel="next">
                            <Image fluid={next.frontmatter.thumnail.childImageSharp.fluid}/>
                            <span>{next.frontmatter.title}</span>
                        </Link>)
                    }
                </li>
            </ul>
        </nav>
    </Layout>)
}

export default WorksPostTemplate

export const pageQuery = graphql `
  query WorksPostBySlug(
    $id: String!
    $previousWorksId: String
    $nextWorksId: String
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
        tags
        thumnail {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousWorksId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
        thumnail {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextWorksId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
        thumnail {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

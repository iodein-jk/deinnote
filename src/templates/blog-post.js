import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share";
import RelatedPosts from "../components/blog-related";

import Image from "gatsby-image";
import kebabCase from "lodash/kebabCase"

import thumnailImage from "../images/thumnail.jpg";

const BlogPostTemplate = ({data, pageContext, location}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const siteUrl = data.site.siteMetadata.siteUrl;
    const slug    = post.frontmatter.slug;
    const {previous, next} = data

    const tags = post.frontmatter.tags
    const tagItems = tags.map((tag) => <li class="col"><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>)

    const thumnailHtml = post.frontmatter.thumnail
        ? <Image fluid={post.frontmatter.thumnail.childImageSharp.fluid}/>
        : ''
    const thumnailOgImage = post.frontmatter.thumnail
        ? `${siteUrl}${post.frontmatter.thumnail.childImageSharp.fluid.src}`
        : `${siteUrl}${thumnailImage}`

    return (<Layout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} image={thumnailOgImage}/>
        <article className="blog-post container-2" itemScope="itemScope" itemType="http://schema.org/Article">
            <header className="text-center">
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p className="datetime">{post.frontmatter.date}</p>
                <ul class="tag-group d-flex flex-wrap justify-content-center">
                    {tagItems}
                </ul>
                <Share title={post.frontmatter.title} url={`${siteUrl}/${slug}`} description={post.excerpt} />
                <figure>
                    <div className="posts__image">
                        {thumnailHtml}
                    </div>
                </figure>
            </header>
            <section className="articleBody" dangerouslySetInnerHTML={{
                    __html: post.html
                }} itemProp="articleBody"/>
        </article>
        <nav className="blog-post-nav container-2 mt-80">
            <RelatedPosts tags={post.frontmatter.tags} title={post.frontmatter.title}></RelatedPosts>
            <p className="mt-60">直近の記事</p>
            <ul className="d-flex">
                <li className="col-6 pl-10 pr-10">
                    {
                        previous && (<Link to={`/${previous.frontmatter.slug}`} rel="prev">
                            {previous.frontmatter.thumnail
                                ? <Image fluid={previous.frontmatter.thumnail.childImageSharp.fluid} imgStyle={{objectFit: "cover",objectPosition:"50% 50%"}}/>
                                : <div className="gatsby-image-wrapper"><img src={thumnailImage} alt="" className="default-thumnail" /></div>
                            }
                            <span>{previous.frontmatter.title}</span>
                        </Link>)
                    }
                </li>
                <li className="col-6 pl-10 pr-10">
                    {
                        next && (<Link to={`/${next.frontmatter.slug}`} rel="next">
                            {next.frontmatter.thumnail
                                ? <Image fluid={next.frontmatter.thumnail.childImageSharp.fluid} imgStyle={{objectFit: "cover",objectPosition:"50% 50%"}}/>
                                : <div className="gatsby-image-wrapper"><img src={thumnailImage} alt="" className="default-thumnail" /></div>
                            }
                            <span>{next.frontmatter.title}</span>
                        </Link>)
                    }
                </li>
            </ul>
        </nav>
    </Layout>)
}

export default BlogPostTemplate

export const pageQuery = graphql `
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    previous: markdownRemark(
        id: { eq: $previousPostId }
    ) {
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
    next: markdownRemark(
        id: { eq: $nextPostId }
    ) {
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

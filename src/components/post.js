import React from "react"
import {Link, graphql} from "gatsby"

import Image from "gatsby-image";

import kebabCase from "lodash/kebabCase"

class Post extends React.Component {
    render() {
        const posts = this.props.posts
        return (<div>
            <ol class="d-md-flex flex-wrap">
                {
                    posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        const slug = post.frontmatter.slug
                        const date = post.frontmatter.date
                        const thumnail = post.frontmatter.thumnail.childImageSharp.fluid
                        const tags = post.frontmatter.tags
                        const tagItems = tags.map((tag) => <li class="col">
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>)
                        return (<li class="col-md-4" key={post.fields.slug}>
                            <article className="post-list-item p-md-10 pb-20" itemScope="itemScope" itemType="http://schema.org/Article">
                                <header>
                                    <figure>
                                        <div className="posts__image">
                                            <Link to={`/${slug}`} itemProp="url">
                                                <Image fluid={thumnail}/>
                                            </Link>
                                        </div>
                                    </figure>
                                    <h2 class="post-hedding">
                                        <Link to={`/${slug}`} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                </header>
                                <ul class="tagname d-flex flex-wrap">
                                    {tagItems}
                                </ul>
                                <section>
                                    <p dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt
                                        }} itemProp="description" class="description"/>
                                    <small>{date}</small>
                                </section>
                            </article>
                        </li>)
                    })
                }
            </ol>
        </div>)
    }
}

export default Post

export const pageQuery = graphql `
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
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

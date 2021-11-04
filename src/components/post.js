import React from "react"
import {useStaticQuery, Link, graphql} from "gatsby"
import Image from "gatsby-image";
import kebabCase from "lodash/kebabCase"
import thumnailImage from "../images/thumnail.jpg";

class Post extends React.Component {
    render() {
        const posts = this.props.posts

        return (<div>
            <ol class="d-md-flex flex-wrap">
                {
                    posts.map((post, i) => {
                        const title = post.frontmatter.title || post.fields.slug
                        const slug = post.frontmatter.slug
                        const date = post.frontmatter.date
                        const num = i

                        const thumnailHtml = post.frontmatter.thumnail
                            ? <Image fluid={post.frontmatter.thumnail.childImageSharp.fluid} imgStyle={{objectFit: "cover",objectPosition:"50% 50%"}}/>
                            : <div className="gatsby-image-wrapper"><img src={thumnailImage} alt="" className="default-thumnail" /></div>

                        const tags = post.frontmatter.tags
                        const tagItems = tags.map((tag) => <li class="col"><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>)

                        return (<li class="col-md-4 col-xl-3 post-list" key={post.fields.slug} style={{animationDelay: `${i/10}s`}}>
                            <article className="post-list-item p-md-10 pb-20" itemScope="itemScope" itemType="http://schema.org/Article">
                                <header>
                                    <figure>
                                        <div className="posts__image">
                                            <Link to={`/${slug}`} itemProp="url">
                                                {thumnailHtml}
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

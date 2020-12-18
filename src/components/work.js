import React from "react"
import {Link, graphql} from "gatsby"
import Image from "gatsby-image";
import kebabCase from "lodash/kebabCase"
import thumnailImage from "../images/thumnail.jpg";

class Work extends React.Component {
    render() {
        const posts = this.props.posts
        return (<div>
            <ol class="d-flex flex-wrap">
                {
                    posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        const slug = post.frontmatter.slug
                        const date = post.frontmatter.date

                        const thumnailHtml = post.frontmatter.thumnail
                            ? <Image fluid={post.frontmatter.thumnail.childImageSharp.fluid} imgStyle={{objectFit: "cover",objectPosition:"50% 50%"}}/>
                            : <div className="gatsby-image-wrapper"><img src={thumnailImage} alt="" className="default-thumnail" /></div>

                        const tags = post.frontmatter.tags
                        const tagItems = tags.map((tag) => <li class="col"><Link to={`/works-tags/${kebabCase(tag)}/`}>{tag}</Link></li>)

                        return (<li class="col-md-3 col-6" key={post.fields.slug}>
                            <article className="work-list-item p-10" itemScope="itemScope" itemType="http://schema.org/Article">
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
                            </article>
                        </li>)
                    })
                }
            </ol>
        </div>)
    }
}

export default Work

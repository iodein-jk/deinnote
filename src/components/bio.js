/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-v2.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio border p-20 mt-60">
        <div className="d-md-flex align-items-center">
            <div className="col">
                <figure class="p-20 text-center">{avatar && ( <Image fixed={avatar} alt={author?.name || ``} className="bio-avatar" imgStyle={{ borderRadius: `100%`, }} /> )}</figure>
            </div>
            <div className="col">
                <dl className="bio-description">
                    <dt className="text-center text-md-left"><strpng>{author.name}</strpng></dt>
                    <dd>
                        <p></p>
                        <ul className="d-flex flex-wrap pt-10">
                            <li class="col">{author?.name && ( <p className="pr-10"><a href={`https://twitter.com/${social?.twitter || ``}`} target='_blank' rel='noreferrer'>Twitter</a></p> )}</li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Bio

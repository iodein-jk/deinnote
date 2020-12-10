import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"

export const TagsPage = ({ tags }) => {
        const data = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
            allMarkdownRemark(
                limit: 2000
                filter: { frontmatter: { category: { in: ["works"] } } }
            ) {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
        `);
        return (
            <div className="tag-group">
                <div className="d-md-flex align-items-center justify-content-center">
                    <p className="col-md-1">キーワード：</p>
                    <ul className="col-md-11 d-flex flex-wrap align-items-center">
                      {data.allMarkdownRemark.group.map(tag => (
                        <li key={tag.tag}>
                          <Link to={`/works-tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                          </Link>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

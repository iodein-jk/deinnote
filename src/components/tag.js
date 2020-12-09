import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

class TagsPage extends React.Component {
    render() {
        const tag = this.props.tag
        return (
            <div className="tag-group">
                <div className="d-md-flex align-items-center justify-content-center">
                    <p>キーワード：</p>
                    <ul className="d-flex flex-wrap align-items-center">
                      {tag.group.map(tag => (
                        <li key={tag.tag}>
                          <Link to={`/tags/${kebabCase(tag.tag)}/`}>
                            {tag.tag} ({tag.totalCount})
                          </Link>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        )
    }
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

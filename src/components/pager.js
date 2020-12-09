import React from "react"
import {Link, graphql} from "gatsby"

class Pager extends React.Component {
    render() {
        const pages = this.props.pages
        const { currentPage, numPages } = pages
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : "/"+(currentPage - 1).toString()
        const nextPage = "/"+(currentPage + 1).toString()

        return (<div class="pagenation d-flex flex-wrap justify-content-center">
            <div class="col">{!isFirst && ( <Link to={prevPage}> ← 前のページ </Link> )}</div>
            <div class="col d-flex flex-wrap justify-content-center">
            {Array.from({ length: numPages }, (_, i) => (
            <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
            ))}
            </div>
            <div class="col">{!isLast && ( <Link to={nextPage}> 次のページ → </Link> )}</div>
        </div>)
    }
}

export default Pager

export const pageQuery = graphql `
  query pagerQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      ) {

          group(field: frontmatter___tags) {
              tag: fieldValue
              totalCount
          }
    }
  }
`

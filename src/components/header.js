import React from "react"
import {Link, graphql} from "gatsby"

import POSTTAG from "../components/tag"
import WORKSTAG from "../components/works-tag"

const Hogehoge = ({data}) => {
    console.log(data);
    const NavMenuItem = ["Home", "Profile", "Works"];
    const NavMenuLiTag = NavMenuItem.map((item) => {
        let page_link = "";
        if (item === "Home") {
            page_link = "/";
        }
        else page_link = "/" + item.toLowerCase() + "/";

        return (
            <li key={page_link} className="col-4 text-center">
                <Link to={page_link} className="page-link d-flex align-items-center justify-content-center"><span>{item}</span></Link>
            </li>
        )
    });
    return (
        <header className="site-header">
            <div className="App-header">
                <div className="container-2">
                    <p className="App-logo"><Link to="/" >DeinNote</Link></p>
                </div>
            </div>
            <label for="navigation" class="btn-trigger" id="btn08">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="App-navbar">
               <nav className="App-navbar-item container">
                   <div className="App-navbar-list">
                       <Link className="App-navbar-list-parent" to="/" >Blog</Link>
                       <div className="App-navbar-list-tag"><POSTTAG /></div>
                   </div>
                   <div className="App-navbar-list">
                       <Link className="App-navbar-list-parent" to="/works" >Works</Link>
                       <div className="App-navbar-list-tag"><WORKSTAG /></div>
                   </div>
               </nav>
            </div>
       </header>
    );
}

export default Hogehoge

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { category: { in: ["blog"] } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

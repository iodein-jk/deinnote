import React from "react"
import { Link } from "gatsby"

const Hogehoge = ({data}) => {
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
        <header className="App-header">
            <div className="container-2">
                <p className="App-logo"><Link to="/" >DeinNote</Link></p>
            </div>
            <nav className="App-navbar d-none">
               <div className="App-navbar-item container">
                   <ul className="d-flex">
                       {NavMenuLiTag}
                   </ul>
               </div>
            </nav>
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
  }
`

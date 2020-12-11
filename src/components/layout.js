import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import HeaderBlock from "../components/header"
import FooterBlock from "../components/fotter"
import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
        <input type="checkbox" name="navigation" value="" className="d-none" id="navigation" />
        <HeaderBlock />
        <main className="pt-md-60 pb-md-60 pt-md-30 pb-md-30">{children}</main>
        <div className="container"><Bio /></div>
        <FooterBlock />
    </div>
  )
}

export default Layout

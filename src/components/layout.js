import React from "react"
import { Link } from "gatsby"
import HeaderBlock from "../components/header"
import FooterBlock from "../components/fotter"
import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
        <HeaderBlock />
        <main className="pt-60 pb-60">{children}</main>
        <div className="container"><Bio /></div>
        <FooterBlock />
    </div>
  )
}

export default Layout

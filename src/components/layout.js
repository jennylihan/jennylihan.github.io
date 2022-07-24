import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/name.png" // Tell webpack this JS file uses this image

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer

  if (!isRootPath) {
    header = (
      <Link className="header-link-home" to="/">
        <img src={logo} alt="Logo" style={{ width: "10vw", fill: "green" }} />
      </Link>
    )
    footer = (
      <div>
        {" "}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout

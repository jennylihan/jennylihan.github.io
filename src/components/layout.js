import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.jpg" // Tell webpack this JS file uses this image

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = <p>Jenny Han</p>
  // } else {
  header = (
    <Link className="header-link-home" to="/">
      <img src={logo} alt="Logo" style={{ width: "10vw" }} />
    </Link>
  )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

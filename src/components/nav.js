/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"
const Bio = () => {
  return (
    <div className="bio">
      <div className="header-bar">
        <button className="header-link-bar" onClick={() => scrollTo("#about")}>
          about
        </button>
        <button>✦</button>
        <Link
          className="header-link-bar"
          style={{ padding: "8px" }}
          to="/JennyHan.pdf"
        >
          cv
        </Link>
        <button>✦</button>
        <button
          className="header-link-bar"
          onClick={() => scrollTo("#research")}
        >
          research
        </button>
        <button>✦</button>
        <button
          className="header-link-bar"
          onClick={() => scrollTo("#teaching")}
        >
          teaching
        </button>
        <button>✦</button>
        <button className="header-link-bar" onClick={() => scrollTo("#design")}>
          design
        </button>
      </div>
    </div>
  )
}

export default Bio

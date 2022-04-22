/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const Bio = () => {
  return (
    <div className="bio">
      <div className="header-bar">
        <button className="header-link-bar" onClick={() => scrollTo("#about")}>
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "png", "avif"]}
            src="../images/stamp2.png"
            width={120}
            quality={95}
            alt="about"
            // style={{ transform: "rotate(7deg)" }}
          />
          about
        </button>
        <a className="header-link-bar" rel="noreferrer" href="/JennyHan.pdf">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/stamp1.png"
            placeholder="blurred"
            width={120}
            quality={95}
            alt="resume"
          />
          cv
        </a>
        <button
          className="header-link-bar"
          onClick={() => scrollTo("#research")}
        >
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/me.png"
            placeholder="blurred"
            width={120}
            quality={95}
            alt="Profile picture"
          />
          research
        </button>
        <button
          className="header-link-bar"
          onClick={() => scrollTo("#teaching")}
        >
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/stamp4.png"
            placeholder="blurred"
            width={120}
            quality={95}
            alt="Profile picture"
          />
          teaching
        </button>
        <button className="header-link-bar" onClick={() => scrollTo("#design")}>
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
            src="../images/stamp3.png"
            width={120}
            quality={95}
            alt="design"
          />
          design
        </button>
      </div>
    </div>
  )
}

export default Bio

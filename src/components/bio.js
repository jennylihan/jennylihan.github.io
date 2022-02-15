/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <div className="header-bar">
        <a className="header-link-bar" rel="noreferrer" href="#about">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "png", "avif"]}
            src="../images/stamp2.png"
            width={120}
            quality={95}
            alt="about"
          />
          about
        </a>
        <a className="header-link-bar" rel="noreferrer" href="/JennyHan.pdf">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/stamp1.png"
            width={120}
            quality={95}
            alt="resume"
          />
          cv
        </a>
        <a className="header-link-bar" rel="noreferrer" href="#research">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/me.png"
            width={120}
            quality={95}
            alt="Profile picture"
          />
          research
        </a>
        <a className="header-link-bar" rel="noreferrer" href="#teaching">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/stamp4.png"
            width={120}
            quality={95}
            alt="Profile picture"
          />
          teaching
        </a>
        <a className="header-link-bar" rel="noreferrer" href="#design">
          <StaticImage
            className="stamp"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/stamp3.png"
            width={120}
            quality={95}
            alt="design"
          />
          design
        </a>
      </div>
    </div>
  )
}

export default Bio

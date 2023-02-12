/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import cards from "../images/gallery/cards.jpg"
import snapacademies from "../images/gallery/snapacademies.png"
import protests from "../images/gallery/protests.png"
import bikes from "../images/gallery/bikes.png"
import collisions from "../images/gallery/collisions.jpg"
import chapsnat from "../images/gallery/chapsnat.png"
import cs9 from "../images/gallery/cs9.png"
import yearinreview from "../images/gallery/yearinreview.png"
import luckydraw from "../images/gallery/luckydraw.png"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projectList {
            title
            year
            description
            siteUrl
            imageUrl
          }
        }
      }
    }
  `)
  function getImage(imageUrl) {
    switch (imageUrl) {
      case "cards":
        return cards
      case "snapacademies":
        return snapacademies
      case "protests":
        return protests
      case "bikes":
        return bikes
      case "replit":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png"
      case "grammars":
        return "https://user-images.githubusercontent.com/26272095/137962447-b0131652-7d50-489a-b4a6-5661e362fec1.png"
      case "collisions":
        return collisions
      case "chapsnat":
        return chapsnat
      case "yearinreview":
        return yearinreview
      case "luckydraw":
        return luckydraw
      case "cs9":
        return cs9
    }
  }
  return (
    <div className="table">
      {data.site.siteMetadata.projectList.map(node => (
        <Link
          className="outline"
          to={node.siteUrl}
          style={{ textDecoration: "none" }}
        >
          <div className="table-contents">
            <img
              src={getImage(node.imageUrl)}
              alt={node.imageUrl}
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "150px",
              }}
            ></img>
            <div className="table-text">
              <h3>{node.title}</h3>
              <p>{node.year}</p>
              <p className="table-text">{node.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Gallery

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
              src={node.imageUrl}
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

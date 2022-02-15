/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import { cardBox, stamp } from "./postcard.module.css"
import me from "../images/me.png" // Tell webpack this JS file uses this image

const Stamp = stamp_name => {
  let name = stamp_name === "stamp1" ? stamp : me
  return (
    <div style={{}}>
      <img src={name} className={stamp} />
    </div>
  )
}

export default Stamp

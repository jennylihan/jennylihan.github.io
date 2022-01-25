/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {
  cardBox,
  card,
  frontDesign,
  front,
  greetings,
} from "./postcard.module.css"
import greetingsImage from "../images/greetings.png" // Tell webpack this JS file uses this image
const Postcard = () => {
  return (
    <div>
      <div className={cardBox}>
        <div className={frontDesign}>
          <div className={card}>
            <div className={front}>
              <div style={{ display: "block" }}>
                <div style={{ marginTop: "18%" }}></div>
                <img src={greetingsImage} className={greetings} alt="test" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Postcard

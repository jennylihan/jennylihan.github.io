import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import {
  cardBox,
  cardFront,
  cardBack,
  image,
  gridContainer,
  left,
  right,
  stamp,
  fineprint,
} from "./postcard.module.css"
import WelcomeSign from "./welcomesign"
import { StaticImage } from "gatsby-plugin-image"

export default function Postcard() {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={cardBox} onClick={handleClick}>
        <div className={cardFront}>
          <div className={image}></div>
          <WelcomeSign />
        </div>
      </div>

      <div className={cardBox}>
        <div className={cardBack}>
          <div className={gridContainer}>
            <div className={left}>
              <h1>Hello from Baltimore!</h1>
              <br />
              <p>
                This year, I've been building data visualization tools for math
                teachers as part of the{" "}
                <a href="https://sites.uci.edu/daplab" target="_blank">
                  Design & Partnership Lab
                </a>{" "}
                at UC Irvine.
              </p>
              <p>
                I'm having a blast exploring the corners of Charm City by bike
                while listening to{" "}
                <a
                  href="https://www.google.com/search?q=out+of+the+blocks&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                >
                  WYPR's Out of the Blocks
                </a>{" "}
                and{" "}
                <a
                  href="https://open.spotify.com/episode/1Jc1NuNTKW44RVYBnFAC6g?si=c3bd41ad93214678"
                  target="_blank"
                >
                  Tyler the Creator's IGOR
                </a>
                .
              </p>
              <p>Jenny</p>
              <p className={fineprint}>Winter 2023</p>
            </div>
            <div className={right}>
              <StaticImage
                className="stamp"
                layout="fixed"
                formats={["auto", "webp", "png", "avif"]}
                src="../images/jenny.png"
                width={120}
                quality={95}
                alt="about"
                // style={{ transform: "rotate(7deg)" }}
              />
              <p>Jenny Han</p>
              <a href="linkedin.com/in/jennylihan" target="_blank">
                LinkedIn
              </a>
              <a href="twitter.com/jennyhansolo" target="_blank">
                Twitter
              </a>
              <p onClick={handleClick}>Go back</p>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  )
}

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
  row,
  fineprint,
  middle,
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
              <h1>Hello from Maryland!</h1>
              <br />
              <p>
                Hey! I've been building data visualization tools for math
                teachers as part of the{" "}
                <a href="https://sites.uci.edu/daplab" target="_blank">
                  Design & Partnership Lab
                </a>{" "}
                at UC Irvine (remotely).
              </p>
              <p>
                I'm having a blast exploring the corners of Charm City by bike
                while listening to{" "}
                <a
                  href="https://ootb.thepeale.org/#:~:text=Created%20by%20Aaron%20Henkin%20and,stories%20hidden%20in%20plain%20sight."
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
              <div className={row}>
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
              </div>
              <div className={middle}>
                <a href="https://linkedin.com/in/jennylihan" target="_blank">
                  LinkedIn
                </a>
                <a href="https://twitter.com/jennyhansolo" target="_blank">
                  Twitter
                </a>
                <a href="https://github.com/jennylihan" target="_blank">
                  Github
                </a>
              </div>
              <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-back"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  )
}

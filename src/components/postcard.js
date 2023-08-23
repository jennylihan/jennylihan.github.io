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
import flipUpSound from "../../sounds/flip_up.mp3"
import flipDownSound from "../../sounds/flip_down.mp3"
import useSound from "use-sound"
import POSTCARD_DATA from "../../static/postcards.json"

export default function Postcard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [playUp] = useSound(flipUpSound)
  const [playDown] = useSound(flipDownSound)

  function handleClick(e) {
    e.preventDefault()
    if (isFlipped) playUp()
    else playDown()
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={cardBox} onClick={handleClick}>
        <div className={cardFront}>
          <div
            className={image}
            style={{
              backgroundImage: `url(${POSTCARD_DATA[0].imgUrl})`,
            }}
          ></div>
          <WelcomeSign />
        </div>
      </div>

      <div className={cardBox}>
        <div className={cardBack}>
          <div className={gridContainer}>
            <div className={left}>
              <h1>Hello from {POSTCARD_DATA[0].location}!</h1>
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(JSON.stringify(POSTCARD_DATA[0].html)),
                }}
              ></div>

              <p>Jenny</p>
              <p className={fineprint}>{POSTCARD_DATA[0].date}</p>
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

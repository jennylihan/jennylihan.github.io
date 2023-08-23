import * as React from "react"
import { Link, graphql } from "gatsby"

import Nav from "../components/nav"
import Postcard from "../components/postcard"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Seo from "../components/seo"
import postcards from "../images/cards.jpg" // Tell webpack this JS file uses this image
import scifi from "../../static/gallery/scifi.jpg" // Tell webpack this JS file uses this image
import edfest from "../../static/gallery/edfest.jpg" // Tell webpack this JS file uses this image
import theorytheory from "../../static/gallery/theorytheory.jpg" // Tell webpack this JS file uses this image

// import { annotate } from "./rough-notation"
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const BlogIndex = ({ data, location }) => {
  // React.useEffect(() => {
  //   const a1 = annotate(sectionRef.current, {
  //     type: "circle",
  //     color: "#e2614e",
  //   })
  //   const a2 = annotate(sectionRef.current, {
  //     type: "circle",
  //     color: "#e2614e",
  //   })
  //   a1.show()
  //   a2.show()
  // }, [])
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  // const sectionRef = React.useRef(null)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <div className="container">
      <Layout location={location} title={siteTitle}>
        <Seo title="" />
        <div style={{ minHeight: "20px" }}></div>
        {/* <div ref={sectionRef}> */}

        <Postcard />
        {/* </div> */}

        <Nav />

        <br />

        <section id="about">
          <h2>
            {/* <RoughNotation
              type="underline"
              strokeWidth="2px"
              show={true}
              color="var(--color-primary)"
              animationDelay="3000"
            > */}
            about
            {/* </RoughNotation> */}
          </h2>
          <p>
            I'm equal parts ed + tech. Currently, I'm a web developer building
            tools for teachers at the{" "}
            <a href="https://sites.uci.edu/daplab/">
              UCI Design and Partnership Lab
            </a>
            . I recently graduated from Stanford with a Master's in
            Human-Computer Interaction with a focus on learning technologies.
            I'm working on ways to make computer science education more
            equitable and personally meaningful for all. My experiences center
            around instructional design, web/app dev, and UX research.
          </p>
          <p>
            Previously, I've been a product engineering intern at{" "}
            <a href="https://replit.com" rel="noreferrer" target="_blank">
              replit
            </a>
            , a lead instructional designer at{" "}
            <a
              href="https://nextshiftlearning.com"
              rel="noreferrer"
              target="_blank"
            >
              Next Shift Learning
            </a>
            , and a head TA of the{" "}
            <a
              href="https://symsys.stanford.edu"
              target="_blank"
              rel="noreferrer"
            >
              SYMSYS1 teaching team
            </a>
            . I was the recipient of a{" "}
            <a
              href="http://web.stanford.edu/dept/vpsa/bechtel/fulbright19-20.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Fulbright Study/Research
            </a>{" "}
            award in 2019. (I had planned to do research at Peking University on
            an obscure remote learning platform in rural China... and then COVID
            happened, and the whole world switched to remote learning.){" "}
          </p>
          <p>
            As an undergrad at Stanford, I studied{" "}
            <a
              href="https://symsys.stanford.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Symbolic Systems
            </a>
            , a major combining linguistics, philosophy, psychology and computer
            science. I pursued the questions: How do we learn? and How can we
            design more transformative tools and experiences for learning?
          </p>
          <p>
            Recent news in 2023:
            <ul>
              <li>
                got published with friends and collaborators in{" "}
                <a
                  href="https://twitter.com/tylerangert/status/1689311693195681798"
                  target="_blank"
                >
                  UIST 2023
                </a>{" "}
                (about generative AI interfaces for creative coding) and{" "}
                <a
                  href="https://chrisproctor.net/research/wolf_2023_growing/wolf_2023_growing.pdf"
                  target="_blank"
                >
                  ISLS 2023
                </a>{" "}
                (about identity authorship in CS classrooms)!
              </li>
              <li>
                shipped a beginner-friendly set of tutorials for Niantic's WebAR
                platform,{" "}
                <a href="https://www.8thwall.com/" target="_blank">
                  8th Wall
                </a>
                , as a learning experience design consultant
              </li>
              <li>
                traveled to the Association for the Sciences of Limnology and
                Oceanography to interview graduate students about{" "}
                <a href="https://www.aslo.org/lorex/" target="_blank">
                  their experiences conducting research abroad{" "}
                </a>
              </li>
            </ul>
          </p>
        </section>

        <section id="research">
          <h2>research publications </h2>
          <p>
            I research tools for teaching and learning computer science. I'm
            also interested in online learning communities and child-computer
            interaction.
          </p>
          <ul>
            <li>
              Angert, T.*, Suzara, M.*, <b>Han, J.*</b>, Pondoc, C., &
              Subramonyam, H. (2023). Spellburst: A Node-based Interface for
              Exploratory Creative Coding with Natural Language Prompts. UIST
              2023.{" "}
              <a href="https://arxiv.org/abs/2308.03921" rel="noreferrer">
                [link]
              </a>{" "}
              *equal first authors
            </li>

            <li>
              Bigman, M., Gilon, Y., <b>Han, J.</b>, & Mitchell, J. (2022).
              Insights for post-pandemic pedagogy across one CS department.
              Arxiv.{" "}
              <a href="https://arxiv.org/abs/2203.09050" rel="noreferrer">
                [link]
              </a>
            </li>
            <li>
              Dietz, G., Le, J. K., Tamer, N., <b>Han, J.</b>, Gweon, H.,
              Murnane, E. L., & Landay, J. A. (2021). StoryCoder: Teaching
              computational thinking concepts through storytelling in a
              voice-guided app for children. Proceedings of the 2021 CHI
              Conference on Human Factors in Computing Systems, 1–15.{" "}
              <b>Best Paper Honorable Mention.</b>{" "}
              <a
                href="https://hci.stanford.edu/research/storycoder/"
                rel="noreferrer"
              >
                [link]
              </a>
            </li>
            <li>
              Dietz, G., <b>Han, J.</b>, Gweon, H., & Landay, J. A. (2021).
              Design guidelines for early childhood computer science education
              tools. Design thinking research (pp. 291–306). Springer.{" "}
              <a
                href="https://hci.stanford.edu/research/storycoder/"
                rel="noreferrer"
              >
                [link]
              </a>
            </li>
            <li>
              Proctor, C., <b>Han, J.</b>, Wolf, J., Ng, K., & Blikstein, P.
              (2020). Recovering Constructionism in computer science: Design of
              a ninth-grade introductory computer science course. In B. Tangney,
              J. Rowan Byrne, & C. Girvan (Eds.) Proceedings of the 2020
              Constructionism Conference. (pp. 473-481). Dublin, Ireland:
              University of Dublin.{" "}
              <a
                rel="noreferrer"
                href="https://chrisproctor.net/research/proctor_2020_recovering/proctor_2020_recovering.pdf"
              >
                [link]
              </a>
            </li>
            <li>
              Blikstein, P., <b>Han, J.</b>, Jue, K., & Shroff, A. (2018, June).
              domino: mobile phones as accessible microcontrollers. In
              Proceedings of the 17th ACM Conference on Interaction Design and
              Children (pp. 505-508).{" "}
              <a
                rel="noreferrer"
                href="https://dl.acm.org/doi/abs/10.1145/3202185.3213524"
              >
                [link]
              </a>
            </li>
          </ul>
        </section>

        <section id="teaching">
          <h2>teaching</h2>
          <p>
            I've taught and designed curriculum for high school, community
            college, undergraduate, and graduate students. In the classroom, I
            strive for student-directed learning, personally meaningful
            projects, and equity at all times.
          </p>
          <h6>University teaching at a glance:</h6>
          <ul>
            <li>
              <b>Instructor</b>, CS106B: Programming Abstractions (Summer 2022)
            </li>
            <li>
              <b>Head TA</b>, SYMSYS1: Minds and Machines (Fall 2021, Winter
              2022)
            </li>
            <li>
              <b>TA</b>, SYMSYS1: Minds and Machines (Fall 2020, Winter 2021)
            </li>
            <li>
              <b>TA</b>, CS377U: Understanding Users (Spring 2020, Spring 2022)
            </li>
            <li>
              <b>TA</b>, EDUC211: Beyond Bits and Atoms (Winter 2019)
            </li>
          </ul>
          <h6>Some teaching experiences that I'm proud of:</h6>
          <ul>
            <li>
              [2022] Co-lectured CS106B in the summer with one of my best
              friends, and we had a great time experimenting with{" "}
              <a href="https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1228/">
                mastery-based and project-based approaches to learning
              </a>
              .
            </li>
            <li>
              [2020, 2021] Head TA-ed / was four-time TA for <b>SYMSYS1</b>, the
              undergraduate introduction to cognitive science at Stanford.
              Authored two of the four projects, including this one in which
              students coded their own{" "}
              <a
                rel="noreferrer"
                href="http://symsys1.herokuapp.com/"
                target="_blank"
              >
                grammars
              </a>
              . Very nifty. Definitely a formative experience in grad school for
              me.
            </li>
            <li>
              [2019] Co-designed and co-taught{" "}
              <a
                href="https://cs.fablearn.org/"
                rel="noreferrer"
                target="_blank"
              >
                Making with Code
              </a>
              , a ninth-grade <b>constructionist computer science</b> curriculum
              in python, as a research assistant for Fablearn / Transformative
              Learning Technologies Lab and ISF Academy.
            </li>
            <li>
              [2020, 2021] With Snap Inc., LA-Tech.org, and Next Shift Learning,
              built out{" "}
              <b>tech talent pathways for community college students</b> in LA
              by designing the{" "}
              <a
                href="https://la-tech.org/snap-academies-class-of-2020"
                rel="noreferrer"
                target="_blank"
              >
                Snap Engineering Academy
              </a>
              . Watching my students land internships at Snap, Microsoft,
              Code2040, Nextdoor, IDEO, and beyond >>>>>.
            </li>
            <li>
              [2019] Worked as a Makery Mentor in the Graduate School of
              Education
              <b> makerspace</b> (digital fabrication: laser-cutting, 3-d
              printing, microcontrollers, etc.).
            </li>
            <li>
              [2019] Codirected{" "}
              <a
                href="https://www.instagram.com/stanfordalternativebreaks/"
                rel="noreferrer"
              >
                Alternative Spring Break
              </a>{" "}
              , one of the largest <b>public service</b> and peer-learning
              programs at Stanford.
            </li>
            <li>
              [2018] Practiced English with janitors on the night shift at
              Stanford through the student group{" "}
              <a
                href="https://habla.stanford.edu"
                rel="noreferrer"
                target="_blank"
              >
                Habla
              </a>
              .
            </li>
            <li>
              [2017] Highlighted community-driven public spaces in Santiago &
              Hong Kong with the{" "}
              <a
                href="https://humancities.org"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Human Cities Initiative
              </a>
              .
            </li>

            <li>
              [2016-2018] Led{" "}
              <a
                href="https://fast.stanford.edu/"
                rel="noreferrer"
                target="_blank"
              >
                college access and CS education workshops (funded via Google
                igniteCS)
              </a>{" "}
              in San Jose and [2016] student-taught ninth graders at
              Breakthrough Silicon Valley.
            </li>
          </ul>
        </section>

        <section id="teachingvideos">
          <h2>teaching videos</h2>
          <div className="table">
            <Link
              className="outline"
              to={"https://vimeo.com/684013951"}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <div className="table-contents">
                <img
                  src={
                    "https://uploads-ssl.webflow.com/5ff8fc486c14537c168fc87d/63e6c2aea9829573f02e58bc_837d83b1-ecbc-401f-9866-844e27d6a567.png"
                  }
                  alt={"Snap Academies"}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "150px",
                  }}
                ></img>
                <div className="table-text">
                  <h3>Snap Academies Sizzle Reel</h3>
                  <p>2021</p>
                  <p className="table-text">
                    A 6 minute sizzle reel highlighting the students and staff
                    behind the virtual Snap Academies in 2021. I was
                    co-instructor for the Snap Engineering Academy, which I also
                    created as the lead curriculum designer and program
                    designer.{" "}
                  </p>
                </div>
              </div>
            </Link>
            <Link
              className="outline"
              to={"https://www.youtube.com/watch?v=vT1IrszcE1E&t=268s"}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <div className="table-contents">
                <img
                  src={edfest}
                  alt={
                    "A poster of Replit's Ed Fest 2022 with the text, 'Twitter Bots with Replit: An Interdisciplinary Approach to CS Education'"
                  }
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "150px",
                  }}
                ></img>
                <div className="table-text">
                  <h3>Twitter Bots with Replit</h3>
                  <p>2022</p>
                  <p className="table-text">
                    A 30-minute virtual workshop showcasing a beginner-friendly,
                    interdisciplinary CS project. I was invited to present this
                    as part of Replit's Ed Fest 2022 for computer science
                    educators.{" "}
                    <a
                      href="https://jennylihan.notion.site/jennylihan/Twitter-Bots-with-Replit-26f307a09de84c5689dafc4c5f5bee23"
                      target="_blank"
                    >
                      Materials here.
                    </a>
                  </p>
                </div>
              </div>
            </Link>
            <Link
              className="outline"
              to={"https://youtu.be/i2UlXG_RUEU"}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <div className="table-contents">
                <img
                  src={scifi}
                  alt={
                    "A powerpoint slide with brain cells with the text 'why take a science fiction perspective to symsys1?'"
                  }
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "150px",
                  }}
                ></img>
                <div className="table-text">
                  <h3>Science Fiction and Symbolic Systems</h3>
                  <p>2021</p>
                  <p className="table-text">
                    What science fiction can teach us about minds and machines.
                    A short video created for my students in SYMSYS1: Minds and
                    Machines.{" "}
                    <a
                      href="https://docs.google.com/presentation/d/1KmdAHtNWwrE_KAZgshWhO9C0BsMoxEfmz3Ch72jUlGw/edit?usp=sharing"
                      target="_blank"
                    >
                      Slides here.
                    </a>
                  </p>
                </div>
              </div>
            </Link>
            <Link
              className="outline"
              to={"https://youtu.be/Yr1XCVekmbM"}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <div className="table-contents">
                <img
                  src={theorytheory}
                  alt={
                    "A powerpoint slide with the text: What the theory theory tells us about school"
                  }
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "150px",
                  }}
                ></img>
                <div className="table-text">
                  <h3>Play and Learning</h3>
                  <p>2020</p>
                  <p className="table-text">
                    A very high-level exploration of play- and discovery-based
                    learning in cognitive science research. Created for my
                    students in SYMSYS1: Minds and Machines.{" "}
                    <a
                      href="https://docs.google.com/presentation/d/1m3J2rNZK2oU__2_dNCTE5L5voSldhpQnqJW7ccQqkwk/edit?usp=sharing"
                      target="_blank"
                    >
                      Materials here
                    </a>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section id="design">
          <h2>design and development</h2>
          <Gallery></Gallery>
        </section>

        <section id="other">
          <h2>also about me</h2>
          <ul>
            <li>
              Growing up, I loved school; I once got sent home sick in
              kindergarten and cried about missing out. My teachers were my
              greatest role models growing up in Bay Area public schools, and I
              feel strongly about contributing to public education in the
              future.
            </li>
            <li>
              For 3 months, I studied abroad in Santiago, Chile, and learned all
              about linguistic relativity and Gepe.
            </li>
            <li>
              My senior year of college, I worked as community manager at{" "}
              <a
                href="http://instagram.com/instahammarskjold"
                rel="noreferrer"
                target="_blank"
              >
                Hammarskjöld
              </a>
              , a 33-person housing cooperative from 2018 - 2019.
            </li>
            <li>
              I could talk your head off about the following podcasts: Reply
              All, Throughline, The Experiment, California Love, Floodlines,
              Radiolab (ft. Dolly Parton's America, Mixtape), Trojan Horse
              Affair.{" "}
            </li>
            <li>I collect postcards ~ </li>
          </ul>
          <img
            src={postcards}
            style={{ width: "100%" }}
            alt="picture of my postcard collection sprawled on the floor"
          ></img>
        </section>

        {/* 
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
      </Layout>
      <div className="PaperLayout"></div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

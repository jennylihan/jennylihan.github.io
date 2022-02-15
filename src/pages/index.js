import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Postcard from "../components/Postcard"
import Layout from "../components/layout"
import Seo from "../components/seo"
import postcards from "../images/cards.jpg" // Tell webpack this JS file uses this image

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
    <Layout location={location} title={siteTitle}>
      <Seo title="" />

      <Postcard />

      <Bio />

      <br />

      <section id="about">
        <h2>about</h2>
        <p>
          I'm equal parts ed + tech. Currently, I'm a Master's student at
          Stanford studying Human-Computer Interaction with a focus on learning
          technologies. I'm working on ways to make computer science education
          more equitable and personally meaningful for all. My experiences
          center around instructional design, web/app dev, and UX research.
        </p>
        <p>
          Previously, I've been a product engineering intern at{" "}
          <a href="replit.com" rel="noreferrer" target="_blank">
            replit
          </a>
          , a lead instructional designer at{" "}
          <a href="nextshiftlearning.com" rel="noreferrer" target="_blank">
            Next Shift Learning
          </a>
          , and a head TA of the{" "}
          <a href="symsys.stanford.edu" rel="noreferrer">
            SYMSYS1 teaching team
          </a>
          . I was the recipient of a{" "}
          <a
            href="https://news.stanford.edu/thedish/2019/06/10/twenty-seven-from-stanford-win-fulbright-u-s-student-program-grants/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Fulbright Study/Research
          </a>{" "}
          award in 2019.
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
          science. I chased the questions: How do we learn? and How can we
          design more transformative tools and experiences for learning?
        </p>
      </section>

      <section id="research">
        <h2>research publications</h2>
        <p>
          I research tools for teaching and learning computer science. I'm also
          interested in online learning communities and child-computer
          interaction.
        </p>
        <ul>
          <li>
            Dietz, G., Le, J. K., Tamer, N., <b>Han, J.</b>, Gweon, H., Murnane,
            E. L., & Landay, J. A. (2021). StoryCoder: Teaching computational
            thinking concepts through storytelling in a voice-guided app for
            children. Proceedings of the 2021 CHI Conference on Human Factors in
            Computing Systems, 1–15. <b>Best Paper Honorable Mention.</b>{" "}
            <a
              href="https://hci.stanford.edu/research/storycoder/"
              rel="noreferrer"
            >
              [link]
            </a>
          </li>
          <li>
            Dietz, G., <b>Han, J.</b>, Gweon, H., & Landay, J. A. (2021). Design
            guidelines for early childhood computer science education tools.
            Design thinking research (pp. 291–306). Springer.{" "}
            <a
              href="https://hci.stanford.edu/research/storycoder/"
              rel="noreferrer"
            >
              [link]
            </a>
          </li>
          <li>
            Proctor, C., <b>Han, J.</b>, Wolf, J., Ng, K., & Blikstein, P.
            (2020). Recovering Constructionism in computer science: Design of a
            ninth-grade introductory computer science course. In B. Tangney, J.
            Rowan Byrne, & C. Girvan (Eds.) Proceedings of the 2020
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
            domino: mobile phones as accessible microcontrollers. In Proceedings
            of the 17th ACM Conference on Interaction Design and Children (pp.
            505-508).{" "}
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
        <h2>teaching </h2>
        <p>
          I've taught and designed curriculum for high school, community
          college, undergraduate, and graduate students. In the classroom, I
          strive for student-directed learning, personally meaningful projects,
          and equity at all times. Some teaching experiences that I'm proud of:
        </p>
        <ul>
          <li>
            [2020,2021] Head TA-ed / was four-time TA for <b>SYMSYS1</b>, the
            undergraduate introduction to cognitive science at Stanford.
            Authored two of the four projects, including this one in which
            students coded their own{" "}
            <a
              rel="noreferrer"
              href="http://symsys1.herokuapp.com/grammars.html"
              target="_blank"
            >
              grammars
            </a>
            . Definitely one of the most formative experiences of my grad school
            experience.
          </li>
          <li>
            [2019] Co-designed and co-taught{" "}
            <a href="https://cs.fablearn.org/" rel="noreferrer" target="_blank">
              Making with Code
            </a>
            , a ninth-grade <b>constructionist computer science</b> curriculum
            in python, as a research assistant for Fablearn / Transformative
            Learning Technologies Lab and ISF Academy.
          </li>
          <li>
            [2020, 2021] With Snap Inc., LA-Tech.org, and Next Shift Learning,
            built out <b>tech talent pathways for community college students</b>{" "}
            in LA by designing the{" "}
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
            [2019] Worked as a Makery Mentor in the Graduate School of Education
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
            , one of the largest public service and peer-learning programs at
            Stanford.
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
            [2017] Highlighted community-driven public spaces in Santiago & Hong
            Kong with the{" "}
            <a href="https://humancities.org" rel="noreferrer" target="_blank">
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
              college access workshops
            </a>{" "}
            in San Jose and [2016] student-taught ninth graders at Breakthrough
            Silicon Valley.
          </li>
        </ul>
      </section>

      <section id="design">
        <h2>design </h2>

        <ul>
          <li>
            [2022] <b>Digital brand identity and website design</b> for the{" "}
            <a
              href="https://snaparchallenge.com/"
              rel="noreferrer"
              target="_blank"
            >
              Snap AR Challenge
            </a>
            . Built with Webflow. Client: Snap Philanthropy and Next Shift
            Learning.
          </li>
          <li>
            [2021] <b>Data visualization</b> of{" "}
            <a
              href="https://observablehq.com/@4bd20473306f283e/cs448bfinalproject"
              rel="noreferrer"
              target="_blank"
            >
              the monopoly of Lyft bikeshare
            </a>{" "}
            across U.S. cities. Built with d3.js and vegalite.{" "}
          </li>
          <li>
            [2021] Data visualization of{" "}
            <a
              href="https://observablehq.com/@jennylihan/mass-mobilization-over-the-years"
              rel="noreferrer"
              target="_blank"
            >
              the most common demands from protestors worldwide from 1990 - 2020
            </a>
            . Built with vegalite.{" "}
          </li>
          <li>
            [2021] Product engineering intern at{" "}
            <a href="replit.com" rel="noreferrer" target="_blank">
              replit
            </a>
            . Shipped features for onboarding, accessibility-friendly
            autocomplete, and community moderation tools. Presented designs and
            vision for future of <b>interactive code tutorials</b>.{" "}
          </li>
          <li>
            [2020] A smol exploration of{" "}
            <a href="drawingwindows.glitch.me" rel="noreferrer" target="_blank">
              chinese lattice geometry
            </a>{" "}
            for Camille Utterback's Drawing with Code studio course. Built with
            p5.js.{" "}
          </li>
        </ul>
      </section>

      <section id="other">
        <h2>also about me</h2>
        <ul>
          <li>
            Growing up, I loved school; I once got sent home sick in
            kindergarten and cried about missing out. My teachers were my
            greatest role models growing up in Bay Area public schools, and I
            feel strongly about contributing to public education in the future.
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
            I could talk your head off about the following podcasts: Reply All,
            Throughline, The Experiment, California Love, Floodlines, Radiolab
            (ft. Dolly Parton's America, Mixtap), Trojan Horse Affair.{" "}
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

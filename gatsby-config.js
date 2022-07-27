module.exports = {
  siteMetadata: {
    title: `jenny han`,
    author: {
      name: `Jenny Han`,
      summary: `who is learning and teaching @stanfordhci and @stanfordsymsys.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `jennyhansolo`,
    },
    projectList: [
      {
        title: `Snap Academies`,
        year: `2022 | Website Design (Webflow)`,
        description: `Digital brand identity and website design for Snap Inc. Philanthropy.`,
        siteUrl: `https://www.snapacademies.com`,
        imageUrl: `snapacademies`,
      },
      {
        title: `Traffic Collisions`,
        year: `2022 | Web Article Design (Vev)`,
        description: `A scrollytelling piece detailing recent fatal traffic collisions in the Bay Area.`,
        siteUrl: `https://peninsulapress.com/2022/06/10/fatal-collisions-involving-juvenile-cyclists-highlight-road-safety-issues-in-the-bay-area/`,
        imageUrl: `collisions`,
      },
      {
        title: `Grammars for All`,
        year: `2021 | Web App (JS) + Curriculum`,
        description: `Built a playground and a bunch of twitter bots to teach context-free grammars.`,
        siteUrl: `https://github.com/jennylihan/symsys-cfg`,
        imageUrl: `grammars`,
      },
      {
        title: `Replit`,
        year: `2021 | Product Engineering`,
        description: `Designed future of interactive code tutorials.`,
        siteUrl: `https://replit.com`,
        imageUrl: `replit`,
      },
      {
        title: `E-bikes Deep Dive`,
        year: `2021 | Data Viz (d3.js, vegalite)`,
        description: `Visualizing the distribution and use of bikeshare across U.S. cities.`,
        siteUrl: `https://observablehq.com/@4bd20473306f283e/cs448bfinalproject`,
        imageUrl: `bikes`,
      },
      {
        title: `Protests on the rise?`,
        year: `2021 | Data Visualization (vegalite)`,
        description: `Visualizing mass mobilizations around the world in 2019.`,
        siteUrl: `https://observablehq.com/@jennylihan/mass-mobilization-over-the-years`,
        imageUrl: `protests`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: true, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

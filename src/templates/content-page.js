import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"

import HeroJumbotron from "../components/hero-jumbotron"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentPage = ({ data }) => {
  const hero = data.contentfulPages.hero
  const title = data.contentfulPages.title
  const headline = data.contentfulPages.headline
  const body = data.contentfulPages.body
  return (
    <Layout>
      <SEO
        title={title}
        keywords={[
          `Galveston`,
          `vacation homes`,
          `galveston vacation homes`,
          `galveston rentals`,
          `galveston airbnbs`,
          `galveston airbnb`,
          `places to rent in galveston`,
          `galveston speakeasy`,
          `galveston speakeasy cottage`
        ]}
      />
      <HeroJumbotron hero={hero} title={headline.headline} />
      <div
        style={{
          maxWidth: `960px`,
          margin: `0 auto`,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 40
        }}
      >
        <MDXRenderer>{body.childMdx.body}</MDXRenderer>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: 60,
          padding: 20
        }}
      >
        <Button
          variant="outline-danger"
          size="lg"
          href="https://www.airbnb.com/rooms/39031320"
        >
          Book the Galveston Speakeasy Cottage on Airbnb
        </Button>
      </div>
    </Layout>
  )
}

export default ContentPage

export const ContentQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      title
      slug
      hero {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      headline {
        headline
      }
      body {
        childMdx {
          body
        }
      }
    }
  }
`

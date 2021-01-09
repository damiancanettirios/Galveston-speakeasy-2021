import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"

import HeroJumbotron from "../components/hero-jumbotron"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HousePage = ({ data }) => {
  const hero = data.contentfulPageContent.hero
  const title = data.contentfulPageContent.title
  // const body = data.contentfulPages.body
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
      <HeroJumbotron hero={hero} title={title} />
      {/* <div
        style={{
          maxWidth: `960px`,
          margin: `0 auto`,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 40
        }}
      >
        <MDXRenderer>{body.childMdx.body}</MDXRenderer>
      </div> */}
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

export default HousePage

export const HouseQuery = graphql`
  {
    contentfulPageContent {
      id
      slug
      title
      hero: backgroundimage1 {
        id
        description
        fluid(quality: 99) {
          src
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

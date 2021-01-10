import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"

import HeroJumbotron from "../components/hero-jumbotron"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AwardPage = ({ data }) => {
  const title = data.page.title
  const hero = data.page.hero
  const headline = data.page.headline
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
      <HeroJumbotron hero={hero} headline={headline} />
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

export default AwardPage

export const AwardQuery = graphql`
  {
    # housefeatures: allContentfulHouseFeaturePost {
    #   id
    #   image: heroImage {
    #     fluid {
    #       ...GatsbyContentfulFluid_noBase64
    #     }
    #     description
    #   }
    #   title: houseFeatureName
    #   shortDescription
    #   slug
    # }
    galvestonAward: contentfulAsset(
      title: { eq: "Galveston Historical Foundation" }
    ) {
      id
      title
      description
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    page: contentfulPageContent(slug: { eq: "award-winning" }) {
      id
      slug
      title
      headline
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

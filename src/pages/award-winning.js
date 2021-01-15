import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import HeroJumbotron from "../components/hero-jumbotron"
import Feature from "../components/house-feature"
import Layout from "../components/layout"
import SEO from "../components/seo"

import useHouseFeatures from "../hooks/use-house-features"

const HouseFeatureDiv = styled("div")`
  display: flex;
  padding: 40px 0px 40px 0px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const AwardPage = ({ data }) => {
  const title = data.page.title
  const hero = data.page.hero
  const headline = data.page.headline
  const body = data.page.longtext1.childMdx.body
  const features = useHouseFeatures()
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
      <Container>
        <h2>{headline}</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <HouseFeatureDiv>
        {features.map(feature => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </HouseFeatureDiv>
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
      longtext1 {
        childMdx {
          body
        }
      }
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

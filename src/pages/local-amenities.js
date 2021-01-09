import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Places from "../components/places"

const AmenitiesDiv = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 40px;
  margin-top: 40px;
`

const LocalAmenitiesPage = ({ data }) => {
  const food = data.food.edges
  const entertainment = data.entertainment.edges
  const hero = data.hero
  return (
    <Layout>
      <SEO
        title="Local Amenities"
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
      <BackgroundImage Tag="section" fluid={hero.fluid}>
        <Jumbotron
          style={{
            background: `#34495ebb`,
            paddingTop: 120,
            paddingBottom: 120
          }}
        >
          <Container>
            <h1 style={{ color: `white` }}>
              Local Amenities in
              <br />
              Galveston
            </h1>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <h3 style={{ textAlign: `center`, fontWeight: `normal` }}>
        Some of our favorite places in Galveston that you can enjoy during your
        next visit
      </h3>
      <hr style={{ margin: `0 auto`, marginTop: 50 }} />
      <h1 style={{ margin: `20px 0px 20px 0px`, textAlign: `center` }}>Food</h1>
      <hr style={{ margin: `0 auto` }} />
      <AmenitiesDiv>
        {food.map(({ node }) => (
          <Places key={node.id} place={node} />
        ))}
      </AmenitiesDiv>
      <hr style={{ margin: `0 auto` }} />
      <h1 style={{ margin: `20px 0px 20px 0px`, textAlign: `center` }}>
        Entertainment
      </h1>
      <hr style={{ margin: `0 auto` }} />
      <AmenitiesDiv>
        {entertainment.map(({ node }) => (
          <Places key={node.id} place={node} />
        ))}
      </AmenitiesDiv>
    </Layout>
  )
}

export default LocalAmenitiesPage

export const LocalQuery = graphql`
  {
    food: allContentfulLocalAmenities(filter: { type: { eq: "Food" } }) {
      edges {
        node {
          title
          id
          url
          longDescript {
            longDescript
          }
          address
          googleMapsUrl
          type
          picture {
            title
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
    entertainment: allContentfulLocalAmenities(
      filter: { type: { eq: "Entertainment" } }
    ) {
      edges {
        node {
          title
          id
          url
          longDescript {
            longDescript
          }
          address
          googleMapsUrl
          type
          picture {
            title
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    hero: contentfulAsset(title: { eq: "GalvestonLocalAmenities" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

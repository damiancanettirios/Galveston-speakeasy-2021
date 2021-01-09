import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Galveston = ({ children }) => {
  const { photo } = useStaticQuery(
    graphql`
      query {
        photo: contentfulAsset(title: { eq: "GalvestonLocalAmenities" }) {
          title
          fluid(quality: 99) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    `
  )

  return (
    <BackgroundImage Tag="section" fluid={photo.fluid}>
      <div
        style={{
          background: `#34495ebb`,
          paddingTop: 120,
          paddingBottom: 120
        }}
      >
        {children}
      </div>
    </BackgroundImage>
  )
}

export default Galveston

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Award = ({ children }) => {
  const { photo } = useStaticQuery(
    graphql`
      query {
        photo: contentfulAsset(title: { eq: "QueenBedRoom" }) {
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
          background: `#ffffffdd`,
          paddingTop: 50,
          paddingBottom: 50
        }}
      >
        {children}
      </div>
    </BackgroundImage>
  )
}

export default Award

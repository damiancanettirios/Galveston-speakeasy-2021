import React from "react"

import BackgroundImage from "gatsby-background-image"

const Award = ({ children, awardPhoto }) => (
  <BackgroundImage Tag="section" fluid={awardPhoto.fluid}>
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

export default Award

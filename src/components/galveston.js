import React from "react"

import BackgroundImage from "gatsby-background-image"

const Galveston = ({ children, galvestonPhoto }) => (
  <BackgroundImage Tag="section" fluid={galvestonPhoto.fluid}>
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

export default Galveston

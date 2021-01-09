import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

const HeroTitle = styled("h1")`
  text-align: center;
  color: white;
  @media (min-width: 701px) {
    text-align: left;
  }
`

const HeroJumbotron = ({ hero, title }) => (
  <BackgroundImage Tag="section" fluid={hero.fluid}>
    <Jumbotron
      style={{
        background: `#34495ebb`,
        paddingTop: 120,
        paddingBottom: 120
      }}
    >
      <Container>
        <HeroTitle>{title}</HeroTitle>
      </Container>
    </Jumbotron>
  </BackgroundImage>
)

export default HeroJumbotron

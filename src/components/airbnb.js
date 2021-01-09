import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const HeroSection = styled("div")`
  padding: 40px 20px 40px 20px;
  width: 95vw;
  margin: 0 auto;
  @media (min-width: 701px) {
    display: flex;
    padding: 40px 0px 40px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const Headline = styled("h3")`
  font-weight: 400;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  @media (min-width: 701px) {
    font-weight: 500;
  }
`

const SuperhostImage = styled("a")`
  margin: 10px;
  padding-bottom: 20px;
  width: 300px;
  &:hove {
    cursor: pointer;
  }
  border: none;
  text-decoration: none;
`

const SuperhostDiv = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
`

const Airbnb = ({ superhost }) => (
  <HeroSection>
    <Headline
      css={css`
        border-bottom: 1px solid #dcdde1;
        padding-bottom: 20px;
      `}
    >
      The Galveston Speakeasy Cottage is an award-winning, fully-restored
      historical home in the heart of Galveston's historical district now
      availabile for short-term rental on{" "}
      <a
        href="https://www.airbnb.com/rooms/39031320"
        style={{ color: `#fd5c63`, border: 0 }}
      >
        Airbnb
      </a>
    </Headline>
    <SuperhostDiv>
      <SuperhostImage
        key={superhost.id}
        href={
          "https://www.airbnb.com/rooms/39031320/reviews?source_impression_id=p3_1609914740_NtvWllkuJTQmC54y"
        }
      >
        <Img fluid={superhost.fluid} alt={superhost.description} />
      </SuperhostImage>
    </SuperhostDiv>
  </HeroSection>
)

export default Airbnb

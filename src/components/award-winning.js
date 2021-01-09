import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Award from "../components/award"

import Button from "react-bootstrap/Button"

const AwardSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
  @media (min-width: 701px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`

const AwardImage = styled("a")`
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
  border: none;
  text-decoration: none;
`

const AwardText = styled("div")`
  text-align: center;
  @media (min-width: 701px) {
    text-align: left;
    width: 50%;
  }
`

const ImageDiv = styled("div")`
  width: 300px;
  margin-top: 50px;
  @media (min-width: 701px) {
    margin-top: 0;
  }
`

const AwardWinning = ({ award }) => (
  <Award>
    <AwardSection>
      <AwardText>
        <h2 style={{ marginBottom: 30, padding: `10px` }}>
          Learn about the projects that made the Speakeasy Cottage an
          award-winning restoration
        </h2>
        <Link to="/gallery" style={{ border: `none` }}>
          <Button variant="primary" size="lg">
            Take a Look
          </Button>
        </Link>
      </AwardText>
      <ImageDiv>
        <div>
          <AwardImage
            key={award.id}
            href={
              "https://www.galvestonhistory.org/preservation/sally-b-wallace-awards-for-historic-preservation"
            }
          >
            <Img
              style={{ margin: `0 auto` }}
              key={award.id}
              fluid={award.fluid}
              alt={award.description}
            />
          </AwardImage>
        </div>
      </ImageDiv>
    </AwardSection>
  </Award>
)

export default AwardWinning

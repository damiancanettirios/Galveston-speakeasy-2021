import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Button from "react-bootstrap/Button"

const GallerySection = styled("div")`
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

const Subtitle = styled("h5")`
  font-weight: 400;
  padding: 0;
  text-align: center;
  font-style: italic;
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (min-width: 701px) {
    font-weight: 500;
  }
`

const GalleryGrid = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
`

const ImageItem = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 5px;
`

const GalleryImage = styled(Link)`
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  border: none;
`

const HouseGallery = ({ gallery }) => (
  <GallerySection>
    <Subtitle>
      Please see our photo gallery of the Galveston Speakeasy Cottage
    </Subtitle>
    <div style={{ paddingBottom: `20px` }}>
      <GalleryGrid>
        {gallery.map(image => (
          <GalleryImage key={image.id} to="/gallery">
            <ImageItem fluid={image.fluid} alt={image.description} />
          </GalleryImage>
        ))}
      </GalleryGrid>
    </div>
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        paddingBottom: 60,
        paddingTop: 40
      }}
    >
      <Link to="/gallery" style={{ border: `none` }}>
        <Button variant="outline-primary" size="lg">
          Click for More Pictures
        </Button>
      </Link>
    </div>
  </GallerySection>
)

export default HouseGallery

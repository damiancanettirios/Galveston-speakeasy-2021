import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Grid = styled("div")`
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

const PictureGrid = ({ pictures }) => (
  <Grid>
    {pictures.map(({ node }) => (
      <ImageItem key={node.id} fluid={node.picture.fluid} alt={node.title} />
    ))}
  </Grid>
)

export default PictureGrid

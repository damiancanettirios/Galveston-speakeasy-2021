import React from "react"
import { graphql } from "gatsby"
import StackGrid from "react-stack-grid"
import { useMediaQuery } from "react-responsive"

import Container from "react-bootstrap/Container"

import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => {
  const pictures = data.pictures.images
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  })
  return (
    <Layout>
      <SEO
        title="Gallery"
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
      <div style={{ paddingBottom: 60, paddingTop: 60 }}>
        <Container>
          <h2 style={{ paddingBottom: 40, textAlign: `center` }}>
            Here is a gallery of photos of the Galveston Speakeasy Cottage
          </h2>
        </Container>
        {!isTabletOrMobileDevice ? (
          <StackGrid columnWidth={350} duration={0} monitorImagesLoaded={true}>
            {pictures.map(image => (
              <Card key={image.id}>
                <Card.Img
                  variant="top"
                  src={image.fixed.src}
                  style={{ margin: 0 }}
                />
                <Card.Body style={{ padding: 5 }}>
                  <Card.Text>{image.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </StackGrid>
        ) : (
          <>
            {pictures.map(image => (
              <Card key={image.id} style={{ marginTop: 10 }}>
                <Card.Img
                  variant="top"
                  src={image.fixed.src}
                  style={{ margin: 0 }}
                />
                <Card.Body style={{ padding: 5 }}>
                  <Card.Text>{image.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}

export default GalleryPage

export const GalleryQuery = graphql`
  query {
    pictures: contentfulGallery(name: { eq: "Main" }) {
      name
      images {
        id
        description
        fixed(width: 300) {
          src
        }
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

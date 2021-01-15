import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentPage = ({ data }) => {
  const pictures = data.contentfulBlog.allImages
  const title = data.contentfulBlog.title
  const subtitle = data.contentfulBlog.shortDescription
  const body = data.contentfulBlog.body.childMdx.body
  return (
    <Layout>
      <SEO
        title={title}
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
      <div
        style={{
          maxWidth: `700px`,
          margin: `0 auto`,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 40,
          paddingTop: 50
        }}
      >
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Carousel style={{ margin: `0 auto`, width: `95vw` }}>
          {pictures.map(image => (
            <Carousel.Item key={image.id} style={{ objectFit: `contain` }}>
              <Img fluid={image.fluid} alt={image.description} />
            </Carousel.Item>
          ))}
        </Carousel>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: 60,
          padding: 20
        }}
      >
        <Button
          variant="outline-danger"
          size="lg"
          href="https://www.airbnb.com/rooms/39031320"
        >
          Book the Galveston Speakeasy Cottage on Airbnb
        </Button>
      </div>
    </Layout>
  )
}

export default ContentPage

export const ContentQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      title: postName
      shortDescription
      slug
      body: longDescription {
        childMdx {
          body
        }
      }
      allImages: allPictures {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
        description
        id
      }
    }
  }
`

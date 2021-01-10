import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  // const hero = data.contentfulPages.hero
  const title = data.contentfulHouseFeaturePost.title
  // const body = data.contentfulPages.body
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
      <h1>{title}</h1>
      {/* <h3></h3>
      <Img fluid={hero.fluid} alt={hero.description} /> */}
      {/* <div
        style={{
          maxWidth: `960px`,
          margin: `0 auto`,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 40
        }}
      >
        <MDXRenderer>{body.childMdx.body}</MDXRenderer>
      </div> */}
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

export default BlogPage

export const ContentQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulHouseFeaturePost(slug: { eq: $slug }) {
      id
      hero: heroImage {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
        description
      }
      title: houseFeatureName
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

import React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleDisplay from "../components/article-display"
import HeroJumbotron from "../components/hero-jumbotron"

const MediaPage = ({ data }) => {
  const articles = data.articles.nodes
  const hero = data.hero
  return (
    <Layout>
      <SEO
        title="Media"
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
      <HeroJumbotron
        hero={hero}
        title={"Articles about the Galveston Speakeasy Cottage"}
      />
      <Container style={{ paddingBottom: 40, marginTop: 30 }}>
        {articles.map(article => (
          <ArticleDisplay key={article.id} article={article} />
        ))}
      </Container>
    </Layout>
  )
}

export default MediaPage

export const MediaQuery = graphql`
  query {
    articles: allContentfulMedia {
      nodes {
        id
        title
        publication
        date
        articleUrl
        picture {
          title
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        description {
          description
        }
      }
    }
    hero: contentfulAsset(title: { eq: "KingBedroomDresser" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
  const hero = data.hero
  return (
    <Layout>
      <SEO
        title="Contact Us"
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
      <BackgroundImage
        Tag="section"
        fluid={hero.fluid}
        style={{
          width: `100%`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`
        }}
      >
        <Jumbotron
          style={{
            background: `#34495ebb`,
            paddingTop: 120,
            paddingBottom: 120
          }}
        >
          <Container style={{ color: `white` }}>
            <h2>Please reach out to us with any questions</h2>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <Container>
        <div style={{ margin: `0 auto`, marginBottom: 70 }}>
          <form action="https://formspree.io/mnqqljvy" method="POST">
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" size="lg" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="name@example.com"
                name="_replyto"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Question</Form.Label>
              <Form.Control as="textarea" name="message" size="lg" rows="8" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const ContactQuery = graphql`
  query {
    hero: contentfulAsset(title: { eq: "Telephones" }) {
      title
      fluid {
        src
      }
    }
  }
`

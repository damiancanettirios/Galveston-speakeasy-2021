import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import styled from "@emotion/styled"

const CardTitleLink = styled(Link)`
  color: #8c7ae6;
  text-decoration: underline;
  border: 0;
  &:hover {
    color: #fbc531;
  }
`

const Feature = ({ feature }) => (
  <Card
    style={{ width: `19rem`, height: `20rem`, margin: `20px 10px 20px 10px` }}
  >
    <Card.Img
      variant="top"
      src={feature.hero.fluid.src}
      alt={feature.title}
      style={{ margin: 0, height: `50%` }}
    />
    <Card.Body>
      <Card.Title>
        <CardTitleLink to={`/blog/${feature.slug}`}>
          {feature.title}
        </CardTitleLink>
      </Card.Title>
      <Card.Text style={{ marginTop: 10 }}>{feature.headline}</Card.Text>
    </Card.Body>
  </Card>
)

export default Feature

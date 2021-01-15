import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

const Feature = ({ feature }) => (
  <Card
    style={{ width: `19rem`, height: `15rem`, margin: `20px 10px 20px 10px` }}
  >
    <Card.Img
      variant="top"
      src={feature.hero.fluid.src}
      alt={feature.title}
      style={{ margin: 0, height: `75%` }}
    />
    <Card.Body>
      <Card.Title>
        <Link to={feature.slug}>{feature.title}</Link>
      </Card.Title>
      <Card.Text style={{ marginTop: 10 }}>
        {feature.shortDescription}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default Feature

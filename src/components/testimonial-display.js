import React from "react"

import Card from "react-bootstrap/Card"
import Stars from "../components/stars"

const TestimonialDisplay = ({ testimonial, body }) => (
  <Card style={{ margin: `0 auto`, marginBottom: 20 }}>
    <Card.Header>
      <a href="https://www.airbnb.com/rooms/39031320" style={{ border: 0 }}>
        <Stars count={testimonial.stars} />
      </a>
      <span style={{ marginLeft: 10 }} />
      {testimonial.stay + " from "}
      <span>
        <a
          href="https://www.airbnb.com/rooms/39031320"
          style={{ color: `#fd5c63`, border: 0 }}
        >
          Airbnb
        </a>
      </span>
    </Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>{body}</p>
        <footer className="blockquote-footer">{testimonial.name}</footer>
      </blockquote>
    </Card.Body>
  </Card>
)

export default TestimonialDisplay

import React from "react"

import styled from "@emotion/styled"
import Img from "gatsby-image"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ArticleTitle = styled("h3")`
  text-align: center;
  font-size: 140%;
  padding-top: 10px;
  @media (min-width: 701px) {
    text-align: left;
  }
`

const ArticleDesc = styled("p")`
  text-align: center;
  padding-top: 10px;
  @media (min-width: 701px) {
    text-align: left;
  }
`

const ArticleDisplay = ({ article }) => (
  <Card style={{ margin: `0 auto`, marginBottom: 20 }}>
    <Card.Body>
      <Row>
        <Col md="3" xs="12">
          <Img
            key={article.id}
            fluid={article.picture.fluid}
            alt={article.picture.title}
          />
        </Col>
        <Col md="9" xs="12">
          <a href={article.articleUrl} style={{ border: `none` }}>
            <ArticleTitle>{article.title}</ArticleTitle>
          </a>
          <ArticleDesc>{article.description.description}</ArticleDesc>
          <ArticleDesc>
            <a href={article.articleUrl} style={{ border: `none` }}>
              {article.publication}
            </a>
            <br />
            {article.date}
          </ArticleDesc>
        </Col>
      </Row>
    </Card.Body>
  </Card>
)

export default ArticleDisplay

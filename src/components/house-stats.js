import React from "react"
import styled from "@emotion/styled"

const StatSection = styled("div")`
  padding: 40px 20px 40px 20px;
  width: 95vw;
  margin: 0 auto;
  @media (min-width: 701px) {
    display: flex;
    padding: 40px 0px 40px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const StatBox = styled("div")`
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 0px 0px 40px 0px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 701px) {
    width: 150px;
  }
`

const Headline = styled("h3")`
  font-weight: 400;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  @media (min-width: 701px) {
    font-weight: 500;
  }
`

const Stat = styled("h1")`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 0;
`

const HouseStats = ({ stats }) => (
  <StatSection>
    {stats.map(({ node }) => (
      <StatBox key={node.id}>
        <Headline>{node.title}</Headline>
        <Stat>{node.statistic}</Stat>
      </StatBox>
    ))}
  </StatSection>
)

export default HouseStats

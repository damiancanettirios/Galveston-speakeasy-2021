import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled("button")`
  align-self: center;
  height: 60px;
  width: auto;
  border: 1px solid #009688;
  background: transparent;
  text-decoration: none;
  margin: 3rem 0;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 1.25rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 200ms;
  display: inline-block;
  h1,
  h2,
  h3,
  h4 {
    color: #009688;
  }
  &:hover {
    background: #009688;
    cursor: pointer;
    h1,
    h2,
    h3,
    h4 {
      color: white;
    }
  }
`

const Button = ({ children }) => (
  <StyledButton>
    <h4>{children}</h4>
  </StyledButton>
)

export default Button

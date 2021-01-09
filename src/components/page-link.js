import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const LinkBox = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    color: #009688;
  }
`

const PageLink = ({ children, page }) => <LinkBox to={page}>{children}</LinkBox>

export default PageLink

import React from "react"
import styled from "@emotion/styled"

const LinkList = styled("section")`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const PageList = ({ children }) => <LinkList>{children}</LinkList>

export default PageList

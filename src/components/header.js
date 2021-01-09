import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "@emotion/styled"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import CloseButton from "react-bootstrap/CloseButton"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledHeader = styled("header")`
  background: transparent;
  margin: 0 auto;
  width: 100vw;
`

const HeaderDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media (min-width: 701px) {
    justify-content: space-between;
    width: 95vw;
    margin: 0 auto;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 0px;
`

const Header = ({ siteData }) => {
  const [active, setActive] = useState(false)

  return (
    <StyledHeader>
      <Navbar style={{ padding: `10px 10px 0px 0px` }}>
        <HeaderDiv>
          <div>
            <h5 style={{ margin: 0 }}>
              <StyledLink to="/">{siteData.headline}</StyledLink>
            </h5>
            <a href="https://goo.gl/maps/SgyYLnEM7dQ6ghM78">
              <p style={{ marginBottom: 5 }}>{siteData.address}</p>
            </a>
          </div>
          <div style={{ padding: 4 }}>
            {!active ? (
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setActive(!active)}
                style={{ color: `black` }}
              />
            ) : (
              <CloseButton onClick={() => setActive(!active)} />
            )}
          </div>
        </HeaderDiv>
      </Navbar>
      {!active ? null : (
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href={`/`} style={{ paddingLeft: 10 }}>
            Home
          </Nav.Link>
          <Nav.Link href={`/history`} style={{ paddingLeft: 10 }}>
            History
          </Nav.Link>
          <Nav.Link href={`/house`} style={{ paddingLeft: 10 }}>
            House
          </Nav.Link>
          <Nav.Link href={`/gallery`} style={{ paddingLeft: 10 }}>
            Photo Gallery
          </Nav.Link>
          <Nav.Link href={`/testimonials`} style={{ paddingLeft: 10 }}>
            Testimonials
          </Nav.Link>
          <Nav.Link href={`/media`} style={{ paddingLeft: 10 }}>
            Media
          </Nav.Link>
          <Nav.Link href={`/local-amenities`} style={{ paddingLeft: 10 }}>
            Local Amenities
          </Nav.Link>
          <Nav.Link href={`/contact`} style={{ paddingLeft: 10 }}>
            Contact
          </Nav.Link>
        </Nav>
      )}
    </StyledHeader>
  )
}

export default Header

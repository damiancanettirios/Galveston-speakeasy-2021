import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"

import { Global, css } from "@emotion/react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

Modal.setAppElement(`#___gatsby`)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          headline
          address
        }
      }
      file(name: { eq: "bg" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          html,
          body {
            font-size: 18px;
            line-height: 1.4;
            background: repeat url(${data.file.publicURL});
            width: 100vw;
            /* remove margin for main div */
            > div {
              margin-top: 0;
            }
          }
          a {
            color: black;
            border-top: 1px solid silver;
            &:hover {
              color: #fd5c63;
              text-decoration: underline;
            }
          }
        `}
      />
      <Header siteData={data.site.siteMetadata} />
      <div
        css={css`
          margin: 0 auto;
          padding-top: 0;
          width: 100vw;
          @media (min-width: 701px) {
            width: 100%;
          }
        `}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

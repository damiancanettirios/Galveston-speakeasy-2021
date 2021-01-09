import React, { useState } from "react"
import ReactModal from "react-modal"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import CloseButton from "react-bootstrap/CloseButton"
import Container from "react-bootstrap/Container"
import Casousel from "react-bootstrap/Carousel"

const StyledCloseButton = styled(CloseButton)`
  font-size: 400%;
  padding-right: 30px;
  &:hover {
    color: #fd5c63;
  }
`

const GalleryGrid = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
`

const ImageItem = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 5px;
`

const GalleryImage = styled("div")`
  &:hover {
    cursor: pointer;
  }
`

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255)"
  },
  content: {
    position: "cover",
    background: "transparent",
    padding: 0,
    width: "100vw",
    height: "100vh",
    border: 0
  }
}

const GalleryModal = ({ gallery }) => {
  const [show, setShow] = useState(false)
  const [picture, setPicture] = useState(0)

  const handleOpen = index => {
    setShow(true)
    setPicture(index)
  }
  const handleClose = () => setShow(false)

  return (
    <>
      <div style={{ paddingBottom: `20px` }}>
        <GalleryGrid>
          {gallery.map((image, index) => (
            <GalleryImage key={image.id} onClick={() => handleOpen(index)}>
              <ImageItem fluid={image.fluid} alt={image.description} />
            </GalleryImage>
          ))}
        </GalleryGrid>
      </div>
      <ReactModal isOpen={show} style={modalStyles}>
        <StyledCloseButton onClick={handleClose} />
        <Container>
          <div style={{ marginTop: 100 }} />
          <Casousel>
            {gallery.map(image => (
              <Casousel.Item key={image.id}>
                <Img fluid={image.fluid} alt={image.description} />
              </Casousel.Item>
            ))}
          </Casousel>
        </Container>
      </ReactModal>
    </>
  )
}

// const StyledModal = styled("div")`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: inline-block;
//   text-align: center;
//   transition: 1.1s ease-out;
// `

// const FullModal = ({ children }) => {
//   const [show, setShow] = useState(false)
//   const [index, setIndex] = useState(0)

//   const handleClose = () => setShow(false)

//   function handleShow(selected) {
//     setShow(true)
//     setIndex(selected)
//   }

//   return(
//   <div style={{ paddingBottom: `20px` }}>
//         <GalleryGrid>
//           {gallery.map((image, index) => (
//             <GalleryImage key={image.id} onClick={() => handleShow(index)}>
//               <ImageItem fluid={image.fluid} alt={image.description} />
//             </GalleryImage>
//           ))}
//         </GalleryGrid>
//         {show ? (
//           <Modal
//           {...this.props}
//           show={show}
//           onHide={() => setShow(false)}
//           dialogClassName="custom-modal"
//           bsClass="my-modal"
//         >
//           <CloseButton
//               onClick={() => handleClose()}
//               style={{ textAlign: `right`, padding: 10, color: `white` }}
//             />
//             <div style={{ marginTop: 60 }} />
//               <ImageModal gallery={gallery} selected={index} />
//           </Modal>
//         ) : null}
//       </div>

// )}

export default GalleryModal

import React from "react"
import Img from "gatsby-image"

const ImageModal = ({ gallery, selected }) => {
  const selectedImage = gallery[selected]
  const all = gallery.length + 1
  const position = selected + 1
  return (
    <div style={{ width: `90%`, margin: `0 auto` }}>
      <Img
        fixed={selectedImage.fixed}
        objectFit="contain"
        objectPosition="50% 50%"
        alt={selectedImage.description}
        style={{ width: `90vw` }}
      />
      <p style={{ color: `white` }}>
        Image {position + "/" + all + ": " + selectedImage.description}
      </p>
    </div>
  )
}

export default ImageModal

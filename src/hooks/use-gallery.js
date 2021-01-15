import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery: contentfulGallery(name: { eq: "Main" }) {
        images {
          id
          description
          fixed(width: 300) {
            src
          }
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  `)

  return data.gallery.images.map(image => ({
    id: image.id,
    decription: image.description,
    fixed: image.fixed,
    fluid: image.fluid
  }))
}

export default useGallery

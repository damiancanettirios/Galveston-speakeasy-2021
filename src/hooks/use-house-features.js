import { graphql, useStaticQuery } from "gatsby"

const useHouseFeatures = () => {
  const data = useStaticQuery(graphql`
    query {
      houseFeatures: allContentfulBlog(
        filter: { postType: { eq: "House Feature" } }
      ) {
        nodes {
          id
          slug
          shortDescription
          postName
          longDescription {
            childMdx {
              body
            }
          }
          heroImage {
            description
            fluid(quality: 99) {
              src
              ...GatsbyContentfulFluid_noBase64
            }
          }
          allPictures {
            description
            id
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `)

  return data.houseFeatures.nodes.map(houseFeature => ({
    id: houseFeature.id,
    slug: houseFeature.slug,
    title: houseFeature.postName,
    headline: houseFeature.shortDescription,
    hero: houseFeature.heroImage,
    body: houseFeature.longDescription.childMdx.body,
    gallery: houseFeature.allPictures
  }))
}

export default useHouseFeatures

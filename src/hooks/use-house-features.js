import { graphql, useStaticQuery } from "gatsby"

const useHouseFeatures = () => {
  const data = useStaticQuery(graphql`
    query {
      houseFeatures: allContentfulHouseFeaturePost {
        nodes {
          id
          slug
          houseFeatureName
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
            description
          }
          longDescription {
            childMdx {
              body
            }
          }
          allPictures {
            id
            description
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `)

  return data.houseFeatures.edges.node(houseFeature => ({
    id: houseFeature.id,
    slug: houseFeature.slug,
    title: houseFeature.houseFeatureName,
    hero: houseFeature.heroImage,
    body: houseFeature.longDescription.childMdx.body,
    gallery: houseFeature.allPictures
  }))
}

export default useHouseFeatures

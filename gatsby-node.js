exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allContentfulHouseFeaturePost {
        nodes {
          slug
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.pages.nodes
  const pagesTemplate = require.resolve(`./src/templates/content-page.js`)

  pages.forEach(node => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: pagesTemplate,
      context: {
        slug: node.slug
      }
    })
  })

  // const blogpages = result.data.blogpages.nodes
  // const blogpagesTemplate = require.resolve(`./src/templates/blog-page.js`)

  // blogpages.forEach(node => {
  //   createPage({
  //     path: `blog/${node.slug}/`,
  //     component: blogpagesTemplate,
  //     context: {
  //       slug: node.slug
  //     }
  //   })
  // })
}

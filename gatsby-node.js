exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allContentfulPages {
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
      path: `/${node.slug}/`,
      component: pagesTemplate,
      context: {
        slug: node.slug
      }
    })
  })
}

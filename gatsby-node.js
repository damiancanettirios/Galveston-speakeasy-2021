exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allContentfulBlog {
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

  const posts = result.data.pages.nodes
  const postsTemplate = require.resolve(`./src/templates/content-page.js`)

  posts.forEach(node => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: postsTemplate,
      context: {
        slug: node.slug
      }
    })
  })
}

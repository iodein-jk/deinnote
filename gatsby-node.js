const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogTemplate = path.resolve("./src/templates/blog-list-template.js")
  const blogTagTemplate = path.resolve("src/templates/tags.js")
  const worksPost = path.resolve(`./src/templates/works-post.js`)
  const worksTemplate = path.resolve("./src/templates/works-list-template.js")
  const worksTagTemplate = path.resolve("src/templates/works-tags.js")


  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { category: { in: ["blog"] } } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }

        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  const tagsNode = tags.nodes

  // Make tag pages
  tags.forEach(tag => {
      const numTagPages = Math.ceil(tag.nodes.length / postsPerPage)
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: blogTagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
  })


  // Get all markdown blog posts sorted by date
  const resultWorks = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { category: { in: ["works"] } } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }

        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
            }
          }
        }
      }
    `
  )

  const works = resultWorks.data.allMarkdownRemark.nodes
  const worksPerPage = 4
  const worksNumPages = Math.ceil(works.length / worksPerPage)

  Array.from({ length: worksNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/works` : `/works/${i + 1}`,
      component: worksTemplate,
      context: {
        limit: worksPerPage,
        skip: i * worksPerPage,
        worksNumPages,
        currentPage: i + 1,
      },
    })
  })

  if (works.length > 0) {
    works.forEach((work, index) => {
        const previousWorksId = index === 0 ? null : works[index - 1].id
        const nextWorksId = index === works.length - 1 ? null : works[index + 1].id

      createPage({
        path: work.fields.slug,
        component: worksPost,
        context: {
          id: work.id,
          previousWorksId,
          nextWorksId,
        },
      })
    })
  }

  // Extract tag data from query
  const worksTags = result.data.tagsGroup.group
  const worksTagsNode = tags.nodes

  // Make tag pages
  worksTags.forEach(tag => {
      const numTagPages = Math.ceil(tag.nodes.length / worksPerPage)
      createPage({
        path: `/works-tags/${_.kebabCase(tag.fieldValue)}/`,
        component: worksTagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

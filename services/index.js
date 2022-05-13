import {request, gql} from 'graphql-request';

export const getPosts = async () => {
  const query = gql `
    query MyQuery {
      query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        tile
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}
    }
  `
}
import { gql } from '@apollo/client';

export const getCategories = gql`
  query GetCategories {
    categories {
      items {
        id
        name
        slug
        image {
          url
          alt
          dimension {
            width
            height
          }
        }
      }
    }
  }
`;

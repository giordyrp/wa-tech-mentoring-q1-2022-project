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

export const getProducts = gql`
  query GetProducts {
    products {
      count
      pagination {
        page
        pages
      }
      items {
        id
        name
        slug
        images {
          url
          alt
          dimension {
            width
            height
          }
        }
        sku
        tags
        stock
        price
        category {
          name
        }
      }
    }
  }
`;

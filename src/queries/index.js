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
  query GetProducts($query: ProductsQuery) {
    products(query: $query) {
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

export const getProductById = gql`
  query GetProductById($id: ID) {
    product(id: $id) {
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
      description
      specs {
        name
        description
      }
      category {
        name
        slug
      }
    }
  }
`;

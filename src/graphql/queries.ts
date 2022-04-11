/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      slug
      sku
      tags
      images {
        url
        alt
        dimension {
          width
          height
        }
      }
      stock
      price
      categoryId
      category {
        id
        name
        image {
          url
          alt
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        sku
        tags
        images {
          url
          alt
        }
        stock
        price
        categoryId
        category {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        categoryProductsId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      image {
        url
        alt
        dimension {
          width
          height
        }
      }
      products {
        items {
          id
          name
          slug
          sku
          tags
          stock
          price
          categoryId
          createdAt
          updatedAt
          categoryProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image {
          url
          alt
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
      id
      title
      description
      image {
        url
        alt
        dimension {
          width
          height
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image {
          url
          alt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

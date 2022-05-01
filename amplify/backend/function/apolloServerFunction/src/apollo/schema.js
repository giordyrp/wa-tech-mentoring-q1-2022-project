const { gql } = require('apollo-server-lambda');

exports.typeDefs = gql`
  type Query {
    hello: String
    products(query: ProductsQuery): ProductsResponse
    product(id: ID): Product
    categories: CategoriesResponse
  }

  type ImageDimension {
    width: Int!
    height: Int!
  }

  type Image {
    url: String!
    alt: String
    dimension: ImageDimension!
  }

  type Product {
    id: ID!
    name: String!
    slug: String!
    sku: String!
    tags: [String!]!
    images: [Image!]!
    stock: Int!
    price: Float!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    slug: String
    image: Image
  }

  input ProductsQuery {
    limit: Int
    page: Int
    category: [ID]
  }

  type Pagination {
    page: Int
    pages: Int
    limit: Int
  }

  type CategoriesResponse {
    count: Int
    pagination: Pagination
    items: [Category!]!
  }

  type ProductsResponse {
    count: Int
    pagination: Pagination
    items: [Product!]!
  }
`;

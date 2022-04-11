/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
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
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
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
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
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

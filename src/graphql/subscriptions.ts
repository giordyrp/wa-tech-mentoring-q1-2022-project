/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateBanner = /* GraphQL */ `
  subscription OnCreateBanner {
    onCreateBanner {
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
export const onUpdateBanner = /* GraphQL */ `
  subscription OnUpdateBanner {
    onUpdateBanner {
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
export const onDeleteBanner = /* GraphQL */ `
  subscription OnDeleteBanner {
    onDeleteBanner {
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

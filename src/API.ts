/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  slug: string,
  sku: string,
  tags: Array< string >,
  images: Array< ImageInput >,
  stock: number,
  price: number,
  categoryId?: string | null,
  categoryProductsId?: string | null,
};

export type ImageInput = {
  url: string,
  alt?: string | null,
  dimension: ImageDimensionInput,
};

export type ImageDimensionInput = {
  width: number,
  height: number,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  sku?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  categoryProductsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  slug: string,
  sku: string,
  tags: Array< string >,
  images:  Array<Image >,
  stock: number,
  price: number,
  categoryId?: string | null,
  category?: Category | null,
  createdAt: string,
  updatedAt: string,
  categoryProductsId?: string | null,
};

export type Image = {
  __typename: "Image",
  url: string,
  alt?: string | null,
  dimension: ImageDimension,
};

export type ImageDimension = {
  __typename: "ImageDimension",
  width: number,
  height: number,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  image?: Image | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  sku?: string | null,
  tags?: Array< string > | null,
  images?: Array< ImageInput > | null,
  stock?: number | null,
  price?: number | null,
  categoryId?: string | null,
  categoryProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  image?: ImageInput | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  image?: ImageInput | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateBannerInput = {
  id?: string | null,
  title: string,
  description: string,
  image: ImageInput,
};

export type ModelBannerConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBannerConditionInput | null > | null,
  or?: Array< ModelBannerConditionInput | null > | null,
  not?: ModelBannerConditionInput | null,
};

export type Banner = {
  __typename: "Banner",
  id: string,
  title: string,
  description: string,
  image: Image,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBannerInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: ImageInput | null,
};

export type DeleteBannerInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  sku?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  categoryProductsId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelBannerFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBannerFilterInput | null > | null,
  or?: Array< ModelBannerFilterInput | null > | null,
  not?: ModelBannerFilterInput | null,
};

export type ModelBannerConnection = {
  __typename: "ModelBannerConnection",
  items:  Array<Banner | null >,
  nextToken?: string | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBannerMutationVariables = {
  input: CreateBannerInput,
  condition?: ModelBannerConditionInput | null,
};

export type CreateBannerMutation = {
  createBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBannerMutationVariables = {
  input: UpdateBannerInput,
  condition?: ModelBannerConditionInput | null,
};

export type UpdateBannerMutation = {
  updateBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBannerMutationVariables = {
  input: DeleteBannerInput,
  condition?: ModelBannerConditionInput | null,
};

export type DeleteBannerMutation = {
  deleteBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      slug: string,
      sku: string,
      tags: Array< string >,
      images:  Array< {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } >,
      stock: number,
      price: number,
      categoryId?: string | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categoryProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBannerQueryVariables = {
  id: string,
};

export type GetBannerQuery = {
  getBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBannersQueryVariables = {
  filter?: ModelBannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBannersQuery = {
  listBanners?:  {
    __typename: "ModelBannerConnection",
    items:  Array< {
      __typename: "Banner",
      id: string,
      title: string,
      description: string,
      image:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    slug: string,
    sku: string,
    tags: Array< string >,
    images:  Array< {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } >,
    stock: number,
    price: number,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      image?:  {
        __typename: "Image",
        url: string,
        alt?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image?:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        slug: string,
        sku: string,
        tags: Array< string >,
        stock: number,
        price: number,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBannerSubscription = {
  onCreateBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBannerSubscription = {
  onUpdateBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBannerSubscription = {
  onDeleteBanner?:  {
    __typename: "Banner",
    id: string,
    title: string,
    description: string,
    image:  {
      __typename: "Image",
      url: string,
      alt?: string | null,
      dimension:  {
        __typename: "ImageDimension",
        width: number,
        height: number,
      },
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

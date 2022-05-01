export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CategoriesResponse = {
  __typename?: 'CategoriesResponse';
  count: Scalars['Int'];
  items: Array<Category>;
  pagination: Pagination;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  dimension: ImageDimension;
  url: Scalars['String'];
};

export type ImageDimension = {
  __typename?: 'ImageDimension';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type Pagination = {
  __typename?: 'Pagination';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  category: Category;
  description: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  price: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
  specs: Array<Spec>;
  stock: Scalars['Int'];
  tags: Array<Scalars['String']>;
};

export type ProductsQuery = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  category?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  count: Scalars['Int'];
  items: Array<Product>;
  pagination: Pagination;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoriesResponse>;
  hello?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  products?: Maybe<ProductsResponse>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  query?: InputMaybe<ProductsQuery>;
};

export type Spec = {
  __typename?: 'Spec';
  description: Scalars['String'];
  name: Scalars['String'];
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';
import { IGrid, ICartProduct } from 'types';
import CartProductCount from '../CartProductCount';
import Button from '../Button';
import FlexDiv from '../FlexDiv';
import * as Styled from './ProductCard.styled';
import Col from '../Col';

interface ProductCardProps {
  product: any;
  cartProduct: ICartProduct;
  addProductToCart: (id: string, count: number) => void;
  removeProductFromCart: (id: string) => void;
  setProductCountFromCart: (id: string, count: number) => void;
  grid: IGrid;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({
    product,
    cartProduct,
    addProductToCart,
    removeProductFromCart,
    setProductCountFromCart,
    grid,
  }) => {
    const {
      id,
      name,
      price,
      images: [image],
      stock,
      category: { name: category },
    } = product;

    const history = useHistory();
    return (
      <Col {...grid}>
        <Styled.ProductCard
          cover={<Styled.Image src={image.url} alt={image.alt} />}
          onClick={() => history.push(`/product/${id}`)}
          data-testid="product-card"
        >
          <Styled.StyledFlexDiv direction="column" align="flex-start" width="100%">
            <Styled.Category data-testid="product-card-category">
              {category}
            </Styled.Category>
            <Styled.Name data-testid="product-name">{name}</Styled.Name>
            <FlexDiv
              justify="space-between"
              align="center"
              width="100%"
              onClick={(e) => e.stopPropagation()}
            >
              <Styled.Price>${price}</Styled.Price>
              {cartProduct ? (
                <CartProductCount
                  count={cartProduct.count}
                  setCount={setProductCountFromCart}
                  removeProduct={removeProductFromCart}
                  stock={stock}
                  id={id}
                  inCart
                />
              ) : (
                <Button
                  color="primary"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faPlus} />}
                  onClick={() => addProductToCart(id, 1)}
                  data-testid="add-to-cart-button"
                />
              )}
            </FlexDiv>
          </Styled.StyledFlexDiv>
        </Styled.ProductCard>
      </Col>
    );
  },
  (prevProps, nextProps) => _isEqual(prevProps.cartProduct, nextProps.cartProduct)
);

export default ProductCard;

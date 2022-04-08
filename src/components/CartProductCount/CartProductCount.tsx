import React, { useEffect, useState } from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './CartProductCount.styled';

interface CartProductCountProps<T> {
  count: number;
  setCount: T;
  removeProduct: (id: string) => void;
  inCart: boolean;
  stock: number;
  id: string;
}

const CartProductCount = <T extends Function>({
  count,
  setCount,
  removeProduct,
  inCart,
  stock,
  id,
}: CartProductCountProps<T>) => {
  const [internalCount, setInternalCount] = useState(count);
  const onDecreaseCount = () => {
    count > 1 && setInternalCount(count - 1);
    inCart && count > 0
      ? setCount(id, count - 1)
      : setCount((count: number) => count - 1);
    if (count === 1 && inCart) {
      removeProduct(id);
    }
  };

  const onChangeCount = () => {
    const newCount = ['', '0'].includes(`${internalCount}`)
      ? 1
      : internalCount > stock
      ? stock
      : parseInt(`${internalCount}`);
    setInternalCount(newCount);
    inCart ? setCount(id, newCount) : setCount(newCount);
  };

  const onIncreaseCount = () => {
    setInternalCount(count + 1);
    inCart ? setCount(id, count + 1) : setCount((count: number) => count + 1);
  };

  useEffect(() => {
    setInternalCount(count);
  }, [count]);
  return (
    <div>
      <Styled.CountButton
        icon={<FontAwesomeIcon icon={count === 1 && inCart ? faTrash : faMinus} />}
        onClick={onDecreaseCount}
        disabled={count <= 0 || (count === 1 && !inCart)}
        data-testid="decrease-count-button"
      />
      <Styled.Count
        value={internalCount}
        type="number"
        onChange={(evt) => setInternalCount(parseInt(evt.target.value))}
        onBlur={onChangeCount}
        data-testid="quantity-input"
      />
      <Styled.CountButton
        icon={<FontAwesomeIcon icon={faPlus} />}
        onClick={onIncreaseCount}
        disabled={count >= stock}
        data-testid="increase-count-button"
      />
    </div>
  );
};

export default CartProductCount;

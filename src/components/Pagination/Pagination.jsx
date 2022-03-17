import React, { useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './Pagination.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ page, totalPages, onChange }) => {
  const [paginationWidth, setPaginationWidth] = useState(0);
  const divRef = useRef(null);
  const itemWidth = 40;
  const maxPagesInDiv = Math.floor(paginationWidth / itemWidth - 2);

  const pages = () => {
    const pageItem = (i) => (
      <Styled.Page key={i} color={i === page ? 'primary' : 'white'} onClick={() => onChange(i)} data-testid={i === page ? 'pagination-page-active' : 'pagination-page'}>
        {i}
      </Styled.Page>
    );
    const delta = maxPagesInDiv - 4;
    const range = [];

    for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
      range.push(pageItem(i));
    }

    if (page - delta > 2) {
      range.unshift(<p key={'leftDots'}>...</p>);
    }
    if (page + delta < totalPages - 1) {
      range.push(<p key={'rightDots'}>...</p>);
    }

    if (totalPages > 1) range.unshift(pageItem(1));
    range.push(pageItem(totalPages));

    return range;
  };

  useLayoutEffect(() => {
    setPaginationWidth(divRef.current.clientWidth === 0 ? 1200 : divRef.current.clientWidth);
  }, []);

  return (
    <div ref={divRef} data-testid="pagination">
      <FlexDiv justify="center" align="center">
        <Styled.Page onClick={() => onChange(page - 1)} disabled={page === 1} data-testid="pagination-prev-page">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Styled.Page>
        {pages()}
        <Styled.Page onClick={() => onChange(page + 1)} disabled={page === totalPages} data-testid="pagination-next-page">
          <FontAwesomeIcon icon={faChevronRight} />
        </Styled.Page>
      </FlexDiv>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;

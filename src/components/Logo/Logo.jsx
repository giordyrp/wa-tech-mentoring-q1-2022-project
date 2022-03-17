import React from 'react';
import LogoLight from '../../assets/images/ehome-light.png';
import LogoDark from '../../assets/images/ehome-dark.png';
import * as Styled from './Logo.styled';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Logo = ({ dark, ...restProps }) => {
  const history = useHistory();
  return <Styled.Logo src={dark ? LogoDark : LogoLight} onClick={() => history.push('/')} {...restProps} />;
};

Logo.propTypes = {
  dark: PropTypes.bool,
};

export default Logo;

import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoLight from '../../assets/images/ehome-light.png';
import LogoDark from '../../assets/images/ehome-dark.png';
import * as Styled from './Logo.styled';

interface LogoProps {
  dark?: boolean;
  'data-testid'?: string;
}

const Logo: React.FC<LogoProps> = ({ dark, ...restProps }) => {
  const history = useHistory();
  return (
    <Styled.Logo
      src={dark ? LogoDark : LogoLight}
      onClick={() => history.push('/')}
      {...restProps}
    />
  );
};

export default Logo;

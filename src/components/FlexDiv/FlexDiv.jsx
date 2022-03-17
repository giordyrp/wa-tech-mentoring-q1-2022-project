import * as Styled from './FlexDiv.styled';
import PropTypes from 'prop-types';

const FlexDiv = (props) => {
  const { children } = props;
  return <Styled.FlexDiv {...props}>{children}</Styled.FlexDiv>;
};

FlexDiv.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  direction: PropTypes.string,
  flex: PropTypes.string,
  witdh: PropTypes.string,
};

export default FlexDiv;

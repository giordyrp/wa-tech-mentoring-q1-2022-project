import PropTypes from 'prop-types';

export const gridType = PropTypes.shape({
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
});

export const cartProductType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  count: PropTypes.number.isRequired,
});

export const formElementType = PropTypes.shape({
  type: PropTypes.oneOf(['input', 'textarea']),
  config: PropTypes.object
});

export const formType = PropTypes.shape({
  inputs: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.any,
      config: PropTypes.shape({
        element: formElementType,
        label: PropTypes.string
      }),
    })
  ),
  grid: gridType
});

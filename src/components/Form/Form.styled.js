import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Form = styled.div(({ bordered }) =>
  bordered
    ? {
        border: '2px solid #e1e3e8',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
      }
    : null
);

const Title = styled(Typography)({
  marginBottom: 20,
  color: '#6e6e6e',
});

const HiddenGrid = styled(Grid)({
  display: 'none',
});

const Styled = {
  Form,
  Title,
  HiddenGrid,
};

export default Styled;

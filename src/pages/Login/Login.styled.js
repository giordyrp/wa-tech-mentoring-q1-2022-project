import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import MyLogo from '../../components/Logo';

const Layout = styled.div({
  backgroundColor: 'rgb(250, 251, 251)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Content = styled.div({
  padding: 50,
  width: 450,
});

const Logo = styled(MyLogo)({
  display: 'block',
  margin: 'auto',
  marginBottom: 40,
});

const Divider = styled.div({
  textAlign: 'center',
  position: 'relative',
  ':before': {
    content: '""',
    background: 'rgb(236, 240, 242)',
    height: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 12,
  },
  '& > span': {
    background: 'rgb(255, 255, 255)',
    position: 'relative',
    padding: 10,
  },
});

const GoogleButton = styled(Button)({
  color: '#DB4437 !important',
  borderColor: '#DB4437 !important',
  margin: '20px 5px 0 0',
});

const FacebookButton = styled(Button)({
  color: '#4267B2 !important',
  borderColor: '#4267B2 !important',
  margin: '20px 0 0 5px',
});

const Styled = { Layout, Content, Logo, Divider, GoogleButton, FacebookButton };

export default Styled;

import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import FlexDiv from '../FlexDiv';

export const Nav = styled(FlexDiv)`
  margin: 0 auto;
  padding: 0 2rem;
  height: 65px;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const MenuLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  color: black;
  text-align: center;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MenuLinks = styled.div`
  height: 100%;
  width: 20%;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Menu = styled.nav`
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: -100%;
  top: 62px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 2;
  ${({ active }) =>
    active &&
    css`
      left: 0;
    `}
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 15px;
  z-index: 3;
  transition: 0.3s;

  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background-color: black;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  ${({ active }) =>
    active &&
    css`
      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      span:nth-child(3) {
        transform: translateY(-4px) rotate(-45deg);
      }
    `}
`;

export const ShowSearchButton = styled(Button)`
  display: none;
  margin-right: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const DesktopSearchInput = styled(Input.Search)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MobileSearchInput = styled(Input.Search)`
  flex-grow: 1;
`;

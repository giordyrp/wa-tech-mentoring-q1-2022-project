import styled from 'styled-components';
import Button from '../Button';
import FlexDiv from '../FlexDiv';

export const Category = styled.p`
  color: grey;
  margin-bottom: 0;
  text-transform: capitalize;
`;

export const Name = styled.h2`
  margin: 5px 0;
`;

export const SKU = styled.p`
  font-size: 12px;
  margin: 0 0 10px 0;
`;

export const Tag = styled.span`
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: white;
  padding: 2px 6px;
  margin: 0 4px 4px 0;
  border-radius: 5px;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const ActionButton = styled(Button)`
  flex-grow: 1;
`;

export const ActionsFlexDiv = styled(FlexDiv)`
  gap: 10px;
`;

export const SpecsTable = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;

  td {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: 5px;
  }

  tr:first-child td {
    border-top: none;
  }

  td:first-child {
    background-color: white;
    width: 150px;
    border-left: none;
  }
`;

export const UnavailableMessage = styled.p`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.warning};
  padding: 10px;
  border-radius: 8px;
`;

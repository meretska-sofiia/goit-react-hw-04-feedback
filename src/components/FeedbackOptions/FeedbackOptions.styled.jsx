import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  background-color: #3ea4a4;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

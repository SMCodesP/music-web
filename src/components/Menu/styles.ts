import styled from 'styled-components';

export const ContainerMenu = styled.nav``;

export const ListMenu = styled.ul`
  margin: 15px 0;
  display: flex;
  gap: 15px;
  list-style: none;
  justify-content: center;
`;

export const ItemMenu = styled.li`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.75;
  transition: font-weight 0.4s, opacity 0.4s;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    opacity: 1;
  }
`;

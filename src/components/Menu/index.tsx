import React from 'react';

import { ContainerMenu, ItemMenu, ListMenu } from './styles';

const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <ListMenu>
        <ItemMenu>Início</ItemMenu>
        <ItemMenu>Artístas</ItemMenu>
        <ItemMenu>Playlists</ItemMenu>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
      </ListMenu>
    </ContainerMenu>
  );
};

export default Menu;

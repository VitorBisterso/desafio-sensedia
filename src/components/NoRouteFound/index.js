import React from 'react';
import { useLocation } from 'react-router-dom';

function NoRouteFound() {
  const { pathname } = useLocation();

  return (
    <h1>
      Não há nenhuma rota com o caminho de <code>{pathname}</code>
    </h1>
  );
}

export default NoRouteFound;

import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';

function NoRouteFound() {
  const { pathname } = useLocation();

  return (
    <div className="noRouteFound-container">
      <h2>
        Não há nenhuma rota com o caminho de <code>{pathname}</code>
      </h2>
    </div>
  );
}

export default NoRouteFound;

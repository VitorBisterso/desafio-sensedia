import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './styles.css';

function User() {
  const location = useLocation();
  const userDetails = location.value;

  const renderTableRow = () =>
    Object.keys(userDetails).map(
      item =>
        item !== 'img' && (
          <tr key={item}>
            <td>
              <p className="user-text">{item}:</p>
            </td>
            <td>
              <p className="user-text">{userDetails[item]}</p>
            </td>
          </tr>
        ),
    );

  const renderUserDetails = () => (
    <>
      <img
        className="user-image"
        src={userDetails.img}
        alt="Imagem de perfil do usuário"
      />
      <div className="user-details">
        <div>
          <p className="user-title">Detalhes da conta</p>
          <table className="user-table">
            <tbody>{renderTableRow()}</tbody>
          </table>
        </div>
        <div>
          <p className="user-title">Tecnologias utilizadas</p>
          <ul className="user-text">
            <li>React</li>
            <li>react-router-dom</li>
            <li>react-google-login</li>
          </ul>
        </div>
      </div>
      <p className="user-text">
        Link para o repositório com o código:{' '}
        <a
          className="user-link"
          href="https://github.com/VitorBisterso/desafio-sensedia/"
        >
          https://github.com/VitorBisterso/desafio-sensedia/
        </a>
      </p>
    </>
  );

  const renderEmptyDetails = () => (
    <>
      <p className="user-title">Calma lá, pessoa!</p>
      <p className="user-text">
        Você ainda não está logado com nenhuma conta. Clique
        <Link className="user-link" to="/">
          aqui
        </Link>
        para ser redirecionado à pagina de login.
      </p>
    </>
  );

  const renderContent = () =>
    userDetails ? renderUserDetails() : renderEmptyDetails();

  return <div className="user-container">{renderContent()}</div>;
}

export default User;

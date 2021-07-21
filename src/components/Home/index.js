import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import clientId from '../../config/clientId';

import './styles.css';

function Home() {
  const [userObj, setUserObj] = useState();
  const [hasError, setHasError] = useState(false);

  const responseGoogle = response => {
    if (response.error) {
      setHasError(true);
    } else {
      setUserObj(response.profileObj);
    }
  };

  const renderContent = () => {
    const parseUserObj = () => ({
      Email: userObj.email,
      img: userObj.imageUrl,
      Nome: userObj.name,
    });

    return userObj ? (
      <Redirect
        to={{
          pathname: '/user',
          value: parseUserObj(),
        }}
      />
    ) : (
      <div className="home-button">
        <GoogleLogin
          clientId={clientId}
          buttonText="Faça login com o google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div>
    );
  };

  const renderError = () =>
    hasError ? (
      <p className="home-error">Ocorreu um erro, tente novamente</p>
    ) : null;

  return (
    <div className="home-container">
      <h1>Desafio Sensedia</h1>
      <p>Faça login com a sua conta da google para acessar mais detalhes</p>
      {renderContent()}
      {renderError()}
    </div>
  );
}

export default Home;

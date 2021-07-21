import React from 'react';

import GoogleLogin from 'react-google-login';
import clientId from '../../config/clientId';

const responseGoogle = response => {
  console.log(response);
};

function Home() {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Faça login com o google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
}

export default Home;

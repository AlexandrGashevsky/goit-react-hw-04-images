import React from 'react';
import {RotatingSquare} from 'react-loader-spinner';
const LoaderApp = () => (
  <div>
    <RotatingSquare type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
  </div>
);

export default LoaderApp;

import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './Button.module.css';

const Button = ({ onClick }) => (
  <div>
    <button type="button" className={buttonStyles.Button} onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

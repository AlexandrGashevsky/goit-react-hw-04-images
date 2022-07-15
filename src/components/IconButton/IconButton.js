import PropTypes from 'prop-types';
import iconButtonStyles from './IconButton.module.css';
const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className={iconButtonStyles.iconButton} onClick={onClick} {...allyProps}>
    {children}
  </button>
);


IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;

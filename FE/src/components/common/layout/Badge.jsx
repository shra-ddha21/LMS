import React from 'react';
import PropTypes from 'prop-types';
import { BADGE_STYLES } from '../../../constants/styles';

/**
 * Reusable badge component for labels and tags.
 * Provides consistent badge styling across the application.
 */
const Badge = ({ text, variant = 'blue', className = '' }) => {
  const badgeClass = BADGE_STYLES[variant] || BADGE_STYLES.blue;

  return (
    <span className={`${badgeClass} ${className}`.trim()}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['blue', 'green', 'orange']),
  className: PropTypes.string,
};

export default Badge;

import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';
import { TEXT_FIELD_STYLES, FORM_STYLES } from '../../../constants/styles';

/**
 * Reusable form field component with consistent styling.
 * Eliminates repeated TextField sx props across forms.
 */
const FormField = ({ 
  label, 
  placeholder, 
  multiline = false, 
  rows = 1,
  showLabel = true,
  ...props 
}) => {
  return (
    <div>
      {showLabel && label && (
        <Typography variant="h6" className={FORM_STYLES.label}>
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        placeholder={placeholder}
        variant="outlined"
        multiline={multiline}
        rows={multiline ? rows : undefined}
        sx={TEXT_FIELD_STYLES}
        {...props}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  showLabel: PropTypes.bool,
};

export default FormField;

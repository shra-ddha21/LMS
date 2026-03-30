import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES } from '../../../constants/styles';

/**
 * Reusable primary button component with consistent styling.
 * Supports both button and link variants.
 */
const PrimaryButton = ({
    children,
    onClick,
    to,
    variant = 'blue',
    fullWidth = false,
    size = 'medium',
    className = '',
    ...props
}) => {
    const variantClass = variant === 'green'
        ? BUTTON_STYLES.green.base
        : BUTTON_STYLES.primary.base;

    const sizeClass = {
        small: 'px-6 py-2',
        medium: 'px-8 py-3',
        large: 'px-10 py-4',
    }[size] || 'px-8 py-3';

    const buttonProps = {
        variant: 'contained',
        fullWidth,
        className: `${variantClass} ${BUTTON_STYLES.primary.rounded} ${sizeClass} ${className}`.trim(),
        sx: { textTransform: 'uppercase' },
        onClick,
        ...props,
    };

    if (to) {
        return (
            <Button component={Link} to={to} {...buttonProps}>
                {children}
            </Button>
        );
    }

    return <Button {...buttonProps}>{children}</Button>;
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string,
    variant: PropTypes.oneOf(['blue', 'green']),
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
};

export default PrimaryButton;

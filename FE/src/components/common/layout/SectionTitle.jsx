import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { DIVIDER_STYLES } from '../../../constants/styles';

/**
 * Reusable section title component with optional underline and subtitle.
 * Provides consistent title styling across all pages.
 */
const SectionTitle = ({
    title,
    subtitle,
    showUnderline = true,
    underlineColor = 'blue',
    align = 'center',
    className = ''
}) => {
    const alignClass = align === 'center' ? 'text-center' : 'text-left';
    const underlineAlignClass = align === 'center' ? 'mx-auto' : '';

    const underlineClass = {
        blue: DIVIDER_STYLES.blue,
        blueLarge: DIVIDER_STYLES.blueLarge,
        green: DIVIDER_STYLES.green,
        greenLarge: DIVIDER_STYLES.greenLarge,
    }[underlineColor] || DIVIDER_STYLES.blue;

    return (
        <div className={`${alignClass} ${className}`.trim()}>
            <Typography
                variant="h3"
                className="text-[#001a3d] font-black leading-tight mb-4"
                sx={{ fontWeight: 900 }}
            >
                {title}
            </Typography>
            {showUnderline && (
                <div className={`${underlineClass} ${underlineAlignClass} mt-4`} />
            )}
            {subtitle && (
                <Typography
                    variant="body1"
                    className="text-gray-600 mt-6 leading-relaxed"
                >
                    {subtitle}
                </Typography>
            )}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    showUnderline: PropTypes.bool,
    underlineColor: PropTypes.oneOf(['blue', 'blueLarge', 'green', 'greenLarge']),
    align: PropTypes.oneOf(['left', 'center']),
    className: PropTypes.string,
};

export default SectionTitle;

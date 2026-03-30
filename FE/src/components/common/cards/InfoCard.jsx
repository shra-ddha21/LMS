import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { ICON_CONTAINER, CARD_STYLES, TRANSITIONS } from '../../../constants/styles';

/**
 * Reusable info card component for feature grids and icon-based content.
 * Used in feature sections across multiple pages.
 */
const InfoCard = ({
    icon,
    title,
    description,
    variant = 'blue',
    className = ''
}) => {
    const iconColorClass = {
        blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
        green: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
        orange: 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white',
        purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    }[variant] || 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';

    return (
        <div className={`${CARD_STYLES.base} ${CARD_STYLES.paddingLarge} ${CARD_STYLES.shadow} flex flex-col items-center text-center group ${CARD_STYLES.hover} h-full ${className}`.trim()}>
            <div className={`${ICON_CONTAINER.large} ${iconColorClass} mb-6 ${TRANSITIONS.colors}`}>
                {icon}
            </div>
            <Typography
                variant="h6"
                className="text-[#001a3d] font-bold text-sm md:text-base leading-tight"
                sx={{ fontWeight: 700 }}
            >
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="body2"
                    className="text-gray-500 mt-3 leading-relaxed"
                >
                    {description}
                </Typography>
            )}
        </div>
    );
};

InfoCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    variant: PropTypes.oneOf(['blue', 'green', 'orange', 'purple']),
    className: PropTypes.string,
};

export default InfoCard;

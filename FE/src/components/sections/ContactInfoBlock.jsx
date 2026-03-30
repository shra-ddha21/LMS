import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { ICON_CONTAINER, TRANSITIONS } from '../../constants/styles';

/**
 * Reusable contact info block component.
 * Used for displaying contact information with icon, label, and value.
 */
const ContactInfoBlock = ({
    icon,
    label,
    value,
    iconColor = 'blue',
    href,
    className = ''
}) => {
    const iconColorClass = {
        blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
        green: 'bg-green-50 text-[#2cc939] group-hover:bg-[#2cc939] group-hover:text-white',
        orange: 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white',
    }[iconColor] || 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';

    const textColorClass = {
        blue: 'group-hover:text-blue-600',
        green: 'group-hover:text-[#2cc939]',
        orange: 'group-hover:text-orange-500',
    }[iconColor] || 'group-hover:text-blue-600';

    const content = (
        <div className={`flex items-center gap-6 group ${className}`.trim()}>
            <div className={`${ICON_CONTAINER.medium} ${iconColorClass} shrink-0 ${TRANSITIONS.colors}`}>
                {icon}
            </div>
            <div>
                <Typography variant="caption" className="text-gray-400 font-bold uppercase tracking-widest block mb-1">
                    {label}
                </Typography>
                <Typography variant="h6" className={`text-[#001a3d] font-black ${textColorClass} ${TRANSITIONS.colors} leading-tight`}>
                    {value}
                </Typography>
            </div>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline cursor-pointer"
            >
                {content}
            </a>
        );
    }

    return content;
};

ContactInfoBlock.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    iconColor: PropTypes.oneOf(['blue', 'green', 'orange']),
    href: PropTypes.string,
    className: PropTypes.string,
};

export default ContactInfoBlock;

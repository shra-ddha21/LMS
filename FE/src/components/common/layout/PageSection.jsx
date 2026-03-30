import React from 'react';
import PropTypes from 'prop-types';
import { SECTION_PADDING, BACKGROUNDS } from '../../../constants/styles';

/**
 * Reusable page section wrapper with consistent padding and background.
 * Eliminates repeated padding classes across pages.
 */
const PageSection = ({
    children,
    background = 'white',
    padding = 'default',
    className = ''
}) => {
    const backgroundClass = BACKGROUNDS[background] || BACKGROUNDS.white;

    const paddingClass = {
        default: SECTION_PADDING.full,
        large: SECTION_PADDING.fullLarge,
        vertical: SECTION_PADDING.vertical,
        verticalLarge: SECTION_PADDING.verticalLarge,
        horizontal: SECTION_PADDING.default,
        none: '',
    }[padding] || SECTION_PADDING.full;

    return (
        <section className={`${backgroundClass} ${paddingClass} ${className}`.trim()}>
            {children}
        </section>
    );
};

PageSection.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.oneOf(['white', 'gray', 'grayAlt', 'transparent']),
    padding: PropTypes.oneOf(['default', 'large', 'vertical', 'verticalLarge', 'horizontal', 'none']),
    className: PropTypes.string,
};

export default PageSection;

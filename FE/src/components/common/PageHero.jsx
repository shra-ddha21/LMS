import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

/**
 * Reusable Hero section for inner pages.
 * Features a dark overlay on a static background image.
 */
const PageHero = ({ title, subtitle }) => {
    return (
        <section className="relative w-full h-[180px] md:h-[260px] flex items-center overflow-hidden">
            {/* Static Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')`,
                }}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-[#001a3d]/85" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-10 md:px-24 lg:px-40 w-full text-left">
                <div className="max-w-4xl">
                    <Typography
                        variant="h5"
                        className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight mb-4"
                        sx={{ fontWeight: 500, lineHeight: 1.3 }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="body1"
                            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </div>
            </div>
        </section>
    );
};

PageHero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default PageHero;

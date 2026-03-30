import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CAROUSEL_STYLES } from '../../../constants/styles';

/**
 * Reusable carousel component with navigation controls and pagination.
 * Eliminates duplicate carousel logic across pages.
 */
const Carousel = ({
    items,
    itemsPerPage = 6,
    renderItem,
    spacing = 4,
    showControls = true,
    showDots = true,
    className = ''
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className={`relative ${className}`.trim()}>
            {/* Navigation Controls */}
            {showControls && totalPages > 1 && (
                <>
                    <div className={`${CAROUSEL_STYLES.controls.position} ${CAROUSEL_STYLES.controls.left}`}>
                        <IconButton onClick={prevSlide} className={CAROUSEL_STYLES.controls.button}>
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </div>
                    <div className={`${CAROUSEL_STYLES.controls.position} ${CAROUSEL_STYLES.controls.right}`}>
                        <IconButton onClick={nextSlide} className={CAROUSEL_STYLES.controls.button}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </>
            )}

            {/* Carousel Content */}
            <div className={CAROUSEL_STYLES.container}>
                <div
                    className={CAROUSEL_STYLES.track}
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {[...Array(totalPages)].map((_, pageIdx) => (
                        <div key={pageIdx} className={CAROUSEL_STYLES.slide}>
                            <Grid container spacing={spacing}>
                                {items
                                    .slice(pageIdx * itemsPerPage, (pageIdx + 1) * itemsPerPage)
                                    .map((item, idx) => renderItem(item, idx))}
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            {showDots && totalPages > 1 && (
                <div className={CAROUSEL_STYLES.dots.container}>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`${CAROUSEL_STYLES.dots.dot} ${i === activeIndex
                                    ? CAROUSEL_STYLES.dots.active
                                    : CAROUSEL_STYLES.dots.inactive
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    itemsPerPage: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    spacing: PropTypes.number,
    showControls: PropTypes.bool,
    showDots: PropTypes.bool,
    className: PropTypes.string,
};

export default Carousel;

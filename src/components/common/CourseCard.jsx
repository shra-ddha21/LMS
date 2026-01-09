import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Rating } from '@mui/material';

/**
 * Reusable Course Card component.
 * Features an image, rating, title, and description.
 */
const CourseCard = ({ image, title, description, rating = 5 }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
            {/* Course Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="mb-2">
                    <Rating
                        value={rating}
                        readOnly
                        size="small"
                        sx={{ color: '#ffb400' }}
                    />
                </div>

                {/* Title */}
                <Typography
                    variant="h6"
                    className="text-[#001a3d] font-bold text-lg mb-3 leading-tight transition-colors group-hover:text-blue-600"
                    sx={{ fontWeight: 700 }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                    <Typography
                        variant="body2"
                        className="text-gray-500 line-clamp-2 md:text-sm"
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

export default CourseCard;

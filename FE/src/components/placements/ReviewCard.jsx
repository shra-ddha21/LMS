import React from 'react';
import { Typography, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const ReviewCard = ({ name, review, rating = 5 }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full min-h-[400px] hover:shadow-xl transition-all duration-300 relative group mx-2">
            {/* Top Quote Icon */}
            <div className="text-blue-100 group-hover:text-blue-600 transition-colors absolute top-4 right-6">
                <FormatQuoteIcon sx={{ fontSize: 60 }} />
            </div>

            {/* Rating */}
            <div className="mb-4">
                <Rating value={rating} readOnly size="small" sx={{ color: '#2cc939' }} />
            </div>

            {/* Review Text */}
            <Typography variant="body1" className="text-gray-600 italic leading-relaxed mb-8 relative z-10 text-base">
                "{review}"
            </Typography>

            {/* Author Info */}
            <div className="mt-auto pt-6 border-t border-gray-100">
                <Typography variant="h6" className="text-[#001a3d] font-black">
                    {name}
                </Typography>
                <Typography variant="caption" className="text-gray-400 font-bold uppercase tracking-widest">
                    Linkcode Student
                </Typography>
            </div>
        </div>
    );
};

export default ReviewCard;

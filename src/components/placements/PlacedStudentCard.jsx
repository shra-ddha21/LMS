import React from 'react';
import { Typography, Box } from '@mui/material';

const PlacedStudentCard = ({ name, company, package: salary, image, excitement }) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden text-center p-8 flex flex-col items-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
            {/* Profile Image Circle */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner group-hover:border-[#2cc939] transition-colors shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                />
            </div>

            {/* Name */}
            <Typography variant="h5" className="text-[#001a3d] font-black mb-1">
                {name}
            </Typography>

            {/* Project/Company */}
            <Typography variant="body1" className="text-gray-500 font-bold uppercase tracking-wider mb-2">
                Placed at <span className="text-blue-600">{company}</span>
            </Typography>

            {/* Separator */}
            <div className="w-32 h-[1.5px] bg-gray-200 mb-4 group-hover:bg-[#2cc939] transition-colors mx-auto" />

            {/* Excitement Text */}
            <Typography variant="body2" className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-4 italic">
                "{excitement || "I am extremely grateful to Linkcode for the incredible learning experience and placement support that helped me start my dream career!"}"
            </Typography>

            {/* Package */}
            <div className="bg-green-50 text-[#2cc939] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mt-auto">
                {salary} Package
            </div>
        </div>
    );
};

export default PlacedStudentCard;

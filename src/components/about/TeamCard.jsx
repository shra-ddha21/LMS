import React from 'react';
import { Typography, Box } from '@mui/material';

const TeamCard = ({ name, role, bio, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden text-center p-8 flex flex-col items-center h-full transition-all hover:shadow-2xl hover:-translate-y-2 group">
            {/* Profile Image Circle */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner group-hover:border-blue-50 transition-colors">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            {/* Name & Role */}
            <Typography variant="h5" className="text-[#001a3d] font-black mb-1">
                {name}
            </Typography>
            <Typography variant="body2" className="text-gray-500 font-bold uppercase tracking-wider mb-4">
                {role}
            </Typography>

            {/* Separator */}
            <div className="w-40 h-[1.5px] bg-gray-200 mb-6 group-hover:bg-blue-600 transition-colors mx-auto" />

            {/* Bio */}
            <Typography variant="body2" className="text-gray-600 leading-relaxed text-sm">
                {bio}
            </Typography>
        </div>
    );
};

export default TeamCard;

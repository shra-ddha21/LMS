import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const AchievementsBanner = () => {
    return (
        <div className="relative overflow-hidden bg-[#0a2342] rounded-3xl p-8 md:p-16 text-white text-center md:text-left">
            {/* Background Decorative patterns could be added here */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <Grid container spacing={6} alignItems="center">
                {/* Left side: Text */}
                <Grid item xs={12} lg={7}>
                    <div className="relative z-10">
                        <Typography variant="h4" className="font-black mb-6 uppercase tracking-wider text-2xl md:text-3xl">
                            Our Achievements
                        </Typography>
                        <Typography variant="body1" className="text-gray-300 leading-relaxed max-w-2xl text-base md:text-lg">
                            At Linkcode, we are committed to shaping the future of aspiring IT professionals. Our <span className="text-white font-bold">comprehensive training programs, expert mentorship, and 100% placement support</span> have helped thousands of students build successful careers in the IT industry. These numbers reflect our dedication and hard work in providing top-quality education and career guidance.
                        </Typography>
                    </div>
                </Grid>

                {/* Right side: Stats */}
                <Grid item xs={12} lg={5}>
                    <Grid container spacing={4} justifyContent="center" className="relative z-10">
                        {[
                            { value: '20K+', label: 'Students Trained' },
                            { value: '60LPA+', label: 'Highest Package Received' },
                            { value: '5K+', label: 'Students Placed' }
                        ].map((stat, idx) => (
                            <Grid item xs={12} sm={4} lg={idx === 2 ? 12 : 6} xl={4} key={idx} className="text-center">
                                <div className="p-4">
                                    <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Simplified for the specific layout in the image if needed, but Grid is better for responsiveness */}
                </Grid>
            </Grid>
        </div>
    );
};

export default AchievementsBanner;

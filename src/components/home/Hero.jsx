import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Grid } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import StatsGrid from '../common/StatsGrid';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#f8fbff] pt-6 pb-16 lg:pt-14 lg:pb-24">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/2" />
            <div className="absolute bottom-10 left-0 w-48 h-48 bg-green-100/40 rounded-full blur-3xl" />

            <div className="px-10 md:px-24 lg:px-56 relative z-10">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid item xs={12} lg={6}>
                        <div className="max-w-xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1976d2] text-sm font-semibold mb-6">
                                100% Placement Assistance
                            </span>
                            <h1 className="text-3xl md:text-3xl font-extrabold text-[#001a3d] leading-[1.2] mb-6">
                                Leading <span className="text-blue-600">IT Training Institute in Pune,</span> Assured job placement in top MNC’s
                            </h1>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                As Pune's leading IT training institute, we provide industry-relevant courses designed to enhance your technical skills. With assured job placement in top MNCs, we help you secure a successful career in the IT industry.
                            </p>

                            <div className="flex flex-wrap items-center gap-8">
                                <Button
                                    component={Link}
                                    to="/courses"
                                    variant="contained"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-md font-bold text-base shadow-lg shadow-blue-200"
                                    sx={{ borderRadius: '4px', textTransform: 'uppercase' }}
                                >
                                    Explore Courses
                                </Button>

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600">
                                        <CallIcon />
                                    </div>
                                    <div>
                                        <Typography className="text-xs text-gray-500 font-medium">Have any Question?</Typography>
                                        <a 
                                            href="tel:+919604430489" 
                                            className="text-xl font-bold text-[#001a3d] hover:text-blue-600 transition-colors no-underline block"
                                        >
                                            960-443-0489
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    {/* Right Content - Image and Floating Cards */}
                    <Grid item xs={12} lg={6} className="relative mt-12 lg:mt-0">
                        <div className="relative mx-auto max-w-lg lg:max-w-none">
                            {/* Illustration / Image Placeholder */}
                            <div className="relative z-10 w-full aspect-square flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://www.linkcode.in/assets/img/banner/banner_img.png"
                                    alt="Student"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute top-40 left-0 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 animate-bounce-slow min-w-[170px]">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <GroupIcon />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] text-gray-400 font-bold">Total Students</div>
                                    <div className="text-xl font-black text-[#001a3d]">15K</div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute bottom-20 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 animate-bounce-slow min-w-[170px]" style={{ animationDelay: '1s' }}>
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <SchoolIcon />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] text-gray-400 font-bold">Complete Graduation</div>
                                    <div className="text-xl font-black text-[#001a3d]">34K</div>
                                </div>
                            </div>

                            {/* Decorative swirls could be added here as absolute icons/images */}
                        </div>
                    </Grid>
                </Grid>

                {/* Bottom Stats Row */}
                <div className="mt-10">
                    <StatsGrid
                        itemProps={{ xs: 12, sm: 6, md: 3 }}
                        stats={[
                            { value: '15+', label: 'Years' },
                            { value: '20K+', label: 'Students Trained' },
                            { value: '60LPA+', label: 'Highest Package Received' },
                            { value: '5K+', label: 'Students Placed' }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

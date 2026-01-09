import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import StatsGrid from './StatsGrid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const StatsSection = ({ badge, title, subtitle, stats }) => {
    return (
        <section className="py-20 bg-white">
            <div className="px-10 md:px-24 lg:px-56">
                <Grid container spacing={8} alignItems="center">
                    {/* Left Column: Text Content */}
                    <Grid item xs={12} lg={6}>
                        <div>
                            {badge && (
                                <span className="inline-block px-4 py-1.5 rounded bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                                    {badge}
                                </span>
                            )}
                            <Typography
                                variant="h3"
                                className="text-[#001a3d] font-black leading-tight mb-6"
                                sx={{ fontWeight: 900 }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="text-gray-600 text-base leading-relaxed mb-12"
                            >
                                {subtitle}
                            </Typography>
                            <Button
                                component={Link}
                                to="/courses"
                                variant="contained"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold"
                                sx={{ textTransform: 'uppercase', borderRadius: '10px' }}
                            >
                                Explore Courses
                            </Button>
                        </div>
                    </Grid>

                    {/* Right Column: Stats Grid */}
                    <Grid item xs={12} lg={6}>
                        <StatsGrid stats={stats} />
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default StatsSection;

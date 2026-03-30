import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';
import PageSection from './layout/PageSection';
import Badge from './layout/Badge';
import PrimaryButton from './buttons/PrimaryButton';
import StatsGrid from './StatsGrid';

const StatsSection = ({ badge, title, subtitle, stats }) => {
    return (
        <PageSection background="white" padding="large">
            <Grid container spacing={8} alignItems="center">
                {/* Left Column: Text Content */}
                <Grid item xs={12} lg={6}>
                    <div>
                        {badge && <Badge text={badge} variant="blue" className="mb-6" />}
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
                        <PrimaryButton to="/courses" variant="blue" size="medium">
                            Explore Courses
                        </PrimaryButton>
                    </div>
                </Grid>

                {/* Right Column: Stats Grid */}
                <Grid item xs={12} lg={6}>
                    <StatsGrid stats={stats} />
                </Grid>
            </Grid>
        </PageSection>
    );
};

StatsSection.propTypes = {
    badge: PropTypes.string,
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};

export default StatsSection;

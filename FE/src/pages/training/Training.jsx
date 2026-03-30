import React from 'react';
import { Typography } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import PageSection from '../../components/common/layout/PageSection';

const Training = () => {
    return (
        <div>
            <PageHero
                title="Training"
                subtitle="Industry-leading technical training programs designed to bridge the gap between academia and industry."
            />
            <PageSection background="white" padding="default">
                <Typography variant="h4" className="mb-4 font-bold text-[#001a3d]">
                    Advanced Training Modules
                </Typography>
                <Typography variant="body1">
                    Explore our hands-on training sessions with industry experts. Detailed curriculum and schedules coming soon.
                </Typography>
            </PageSection>
        </div>
    );
};

export default Training;

import React from 'react';
import { Typography } from '@mui/material';
import PageHero from '../../components/common/PageHero';

const HiredFromUs = () => {
  return (
    <div>
      <PageHero
        title="Hired From Us"
        subtitle="Meet our talented students who have been successfully placed in world-class organizations."
      />
      <div className="px-10 md:px-24 lg:px-56 py-20">
        <Typography variant="h4" className="mb-4 font-bold text-[#001a3d]">Our Wall of Fame</Typography>
        <Typography variant="body1">See who's making an impact in the tech world after training with Linkcode. Success stories and alumni profiles coming soon.</Typography>
      </div>
    </div>
  );
};

export default HiredFromUs;

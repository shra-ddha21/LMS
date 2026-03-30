import React from 'react';
import { Typography } from '@mui/material';
import PageHero from '../../components/common/PageHero';

const Resources = () => {
  return (
    <div>
      <PageHero
        title="Resources"
        subtitle="Access our curated collection of learning materials, cheat sheets, and technical guides."
      />
      <div className="px-10 md:px-24 lg:px-56 py-20">
        <Typography variant="h4" className="mb-4 font-bold text-[#001a3d]">Learning Library</Typography>
        <Typography variant="body1">Stay updated with the latest documentation and resources. Our resource library is currently being updated.</Typography>
      </div>
    </div>
  );
};

export default Resources;

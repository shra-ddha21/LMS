import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

/**
 * Reusable Feature Grid component.
 * Renders a grid of themed cards with icons and text.
 */
const FeatureGrid = ({ title, features }) => {
  return (
    <section className="py-20 bg-white">
      <div className="px-10 md:px-24 lg:px-56">
        <div className="text-center mb-16">
          <Typography
            variant="h4"
            className="text-[#001a3d] font-extrabold"
            sx={{ fontWeight: 800, textAlign: 'center' }}
          >
            {title}
          </Typography>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <Typography
                  variant="h6"
                  className="text-[#001a3d] font-bold text-sm md:text-base leading-tight"
                  sx={{ fontWeight: 700 }}
                >
                  {feature.label}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

FeatureGrid.propTypes = {
  title: PropTypes.node.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default FeatureGrid;

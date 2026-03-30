import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import PageSection from './layout/PageSection';
import SectionTitle from './layout/SectionTitle';
import InfoCard from './cards/InfoCard';

/**
 * Reusable Feature Grid component.
 * Renders a grid of themed cards with icons and text.
 */
const FeatureGrid = ({ title, features }) => {
  return (
    <PageSection background="white" padding="large">
      <SectionTitle title={title} className="mb-16" />

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <InfoCard 
              icon={feature.icon}
              title={feature.label}
            />
          </Grid>
        ))}
      </Grid>
    </PageSection>
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

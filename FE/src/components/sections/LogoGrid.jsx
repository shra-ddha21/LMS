import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import SectionTitle from '../common/layout/SectionTitle';
import PageSection from '../common/layout/PageSection';

/**
 * Reusable logo grid component for displaying company logos.
 * Used in Placements page and potentially other pages.
 */
const LogoGrid = ({ logos, title, subtitle, background = 'gray' }) => {
    return (
        <PageSection background={background} padding="large">
            {title && (
                <SectionTitle
                    title={title}
                    subtitle={subtitle}
                    underlineColor="greenLarge"
                    className="mb-16"
                />
            )}

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                <Grid container spacing={4}>
                    {logos.map((logo, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <div className="h-40 bg-white flex items-center justify-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="w-48 h-24 object-contain"
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </PageSection>
    );
};

LogoGrid.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.node,
    subtitle: PropTypes.string,
    background: PropTypes.string,
};

export default LogoGrid;

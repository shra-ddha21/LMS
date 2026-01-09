import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

/**
 * Reusable Stats Grid component.
 * Renders a grid of stats cards with alternating colors.
 */
const StatsGrid = ({ stats, itemProps = { xs: 12, sm: 6 } }) => {
    return (
        <Grid container spacing={3} alignItems="stretch">
            {stats.map((stat, index) => {
                const isNavy = index % 2 === 0;
                return (
                    <Grid item {...itemProps} key={index}>
                        <div
                            className={`p-8 rounded-2xl text-center transition-all hover:-translate-y-2 cursor-default h-full flex flex-col justify-center ${isNavy ? 'bg-[#002b5c] text-white' : 'bg-[#2cc939] text-white'
                                }`}
                        >
                            {stat.icon && <div className="mb-4 opacity-90">{stat.icon}</div>}
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1">
                                {stat.value}
                            </div>
                            <div className={`text-sm md:text-base font-medium ${isNavy ? 'text-gray-300' : 'opacity-90'}`}>
                                {stat.label}
                            </div>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    );
};

StatsGrid.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.element,
        })
    ).isRequired,
    itemProps: PropTypes.object,
};

export default StatsGrid;

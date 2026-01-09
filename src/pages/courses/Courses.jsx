import React from 'react';
import { Grid, Typography } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import CourseCard from '../../components/common/CourseCard';
import { COURSES_DATA } from '../../constants/courses';

const Courses = () => {

    return (
        <div className="bg-white">
            <PageHero
                title="Our Courses"
                subtitle="Explore our wide range of professional IT courses designed to make you industry-ready."
            />

            <section className="px-10 md:px-24 lg:px-56 py-24">
                <div className="text-center mb-16">
                    <Typography
                        variant="h4"
                        className="text-[#001a3d] font-extrabold mb-4"
                        sx={{ fontWeight: 800 }}
                    >
                        Trending Tech <span className="text-blue-600">Courses</span>
                    </Typography>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                <Grid container spacing={6}>
                    {COURSES_DATA.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CourseCard {...course} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </div>
    );
};

export default Courses;

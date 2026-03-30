import React from 'react';
import { Grid } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import PageSection from '../../components/common/layout/PageSection';
import SectionTitle from '../../components/common/layout/SectionTitle';
import CourseCard from '../../components/common/CourseCard';
import { COURSES_DATA } from '../../constants/courses';

const Courses = () => {
    return (
        <div className="bg-white">
            <PageHero
                title="Our Courses"
                subtitle="Explore our wide range of professional IT courses designed to make you industry-ready."
            />

            <PageSection background="white" padding="large">
                <SectionTitle
                    title={
                        <>
                            Trending Tech <span className="text-blue-600">Courses</span>
                        </>
                    }
                    className="mb-16"
                />

                <Grid container spacing={6}>
                    {COURSES_DATA.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CourseCard {...course} />
                        </Grid>
                    ))}
                </Grid>
            </PageSection>
        </div>
    );
};

export default Courses;

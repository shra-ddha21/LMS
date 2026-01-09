import React from 'react';
import Hero from '../../components/home/Hero';
import FeatureGrid from '../../components/common/FeatureGrid';
import CourseCard from '../../components/common/CourseCard';
import { COURSES_DATA } from '../../constants/courses';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';


// Icons for Features (Why Choose)
import GroupsIcon from '@mui/icons-material/Groups';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ComputerIcon from '@mui/icons-material/Computer';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Icons for the new About section
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const Home = () => {

  const featuresData = [
    { label: 'Experienced and Certified Trainers', icon: <GroupsIcon fontSize="large" /> },
    { label: 'Internship Opportunities with real clients', icon: <WorkHistoryIcon fontSize="large" /> },
    { label: 'Support and Career guidance', icon: <SupportAgentIcon fontSize="large" /> },
    { label: 'Hands-on projects from Day one', icon: <ComputerIcon fontSize="large" /> },
    { label: 'Internship on Live Projects', icon: <ArchitectureIcon fontSize="large" /> },
    { label: 'Build Your Own Projects', icon: <ModelTrainingIcon fontSize="large" /> },
    { label: 'Soft Skill Training', icon: <AssignmentIcon fontSize="large" /> },
    { label: 'Get Placed in Top MNCs', icon: <TrendingUpIcon fontSize="large" /> },
  ];

  return (
    <div className="bg-[#f8fbff]">
      <Hero />

      {/* About Section with Image Composition */}
      <div className="px-10 md:px-24 lg:px-56 py-20 bg-white">
        <Grid container spacing={4} alignItems="center">
          {/* Left: Image Composition */}
          <Grid item xs={12} lg={6}>
            <div className="relative max-w-[480px] mx-auto lg:ml-0">
              {/* Main Image (Large) */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ml-14">
                <img
                  src="https://www.linkcode.in/assets/img/about/ab2.jpg"
                  alt="Professional Training"
                  className="w-full h-auto"
                />
              </div>

              {/* Overlapping Image (Small) */}
              <div className="absolute -bottom-8 -left-4 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-[60%]">
                <img
                  src="https://www.linkcode.in/assets/img/about/ab3.jpg"
                  alt="Students Group"
                  className="w-full h-auto"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-10 -left-6 z-30 bg-blue-600 text-white p-4 rounded-2xl shadow-xl border-4 border-white text-center min-w-[120px]">
                <Typography variant="h5" className="font-black">15+</Typography>
                <Typography variant="caption" className="font-bold block leading-tight">Years of<br />experiences</Typography>
              </div>
            </div>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} lg={6}>
            <div className="lg:pl-0">
              <span className="inline-block px-4 py-1.5 rounded bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                Get To Know About Us
              </span>
              <Typography variant="h3" className="text-[#001a3d] font-black leading-tight mb-6">
                Pune's Best Professional<br />
                <span className="text-blue-600">IT Training Institute</span>
              </Typography>
              <Typography variant="body1" className="text-gray-600 text-base leading-relaxed mb-8">
                As Pune's best professional IT training institute, we at LinkCode Technologies are committed to providing top-tier education and career support for aspiring IT professionals.
              </Typography>

              {/* Features List */}
              <Grid container spacing={4} className="mb-10">
                {[
                  { icon: <VerifiedUserIcon className="text-blue-600" />, text: "100% Placement Assistance" },
                  { icon: <EngineeringIcon className="text-green-600" />, text: "Industry-Oriented Hands-On Training" },
                  { icon: <SchoolIcon className="text-purple-600" />, text: "Work on the Live Projects" },
                  { icon: <VideoCameraFrontIcon className="text-red-500" />, text: "Online Live Training with Recorded Sessions" }
                ].map((item, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                        {item.icon}
                      </div>
                      <Typography variant="body2" className="font-bold text-[#001a3d] leading-snug">
                        {item.text}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-1"
                sx={{ textTransform: 'uppercase' }}
              >
                Discover More
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Specialized Courses Section */}
      <section className="px-10 md:px-24 lg:px-56 py-24 bg-gray-50/50">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Typography
            variant="h3"
            className="text-[#001a3d] font-black leading-tight mb-4"
            sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
          >
            Transform Your Career: <span className="text-blue-600">Linkcode IT Training Institute</span> Unveils Specialized Courses
          </Typography>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6" />
        </div>

        <Grid container spacing={4}>
          {COURSES_DATA.slice(0, 6).map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Why To Choose Section */}
      <FeatureGrid
        title={
          <>
            Why To Choose <span className="text-blue-600">Linkcode IT Training Institute</span> In Pune, India
          </>
        }
        features={featuresData}
      />
    </div>
  );
};

export default Home;

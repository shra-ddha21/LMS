import React from 'react';
import PageHero from '../../components/common/PageHero';
import StatsSection from '../../components/common/StatsSection';
import FeatureGrid from '../../components/common/FeatureGrid';
import AchievementsBanner from '../../components/about/AchievementsBanner';
import TeamCard from '../../components/about/TeamCard';
import { Grid, Typography, Container, Box } from '@mui/material';

// Stats Icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// Feature Icons
import GroupsIcon from '@mui/icons-material/Groups';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ComputerIcon from '@mui/icons-material/Computer';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const About = () => {
    const statsData = [
        { value: '15+', label: 'Years', icon: <CheckCircleOutlineIcon fontSize="large" /> },
        { value: '20K+', label: 'Students Trained', icon: <AssignmentIndIcon fontSize="large" /> },
        { value: '60LPA+', label: 'Highest Package Received', icon: <EmojiEventsIcon fontSize="large" /> },
        { value: '5K+', label: 'Students Placed', icon: <PeopleAltIcon fontSize="large" /> },
    ];

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

    const teamData = [
        {
            name: "Rahul Ahire",
            role: "Founder & CEO",
            bio: "Rahul Ahire is a Microsoft and SUN certified IT trainer with 15+ years of experience in corporate training and mentoring. His expert guidance has helped countless students secure placements in top MNCs.",
            image: "https://www.linkcode.in/assets/img/instructor/2.jpg"
        },
        {
            name: "Pritam Kamble",
            role: "Director",
            bio: "Pritam Kamble is a Director at Linkcode Technologies, with technical expertise in Angular, Node.js, and project management, he bridges talent and opportunities effectively.",
            image: "https://www.linkcode.in/assets/img/instructor/1.jpg"
        },
        {
            name: "Technical Trainers",
            role: "Our Trainers",
            bio: "The technical trainers at Linkcode Technologies are industry experts with 3-10+ years of experience, specializing in Full Stack Development, Data Analytics, AI, and more. Their practical, hands-on approach empowers students to excel in IT careers.",
            image: "https://www.linkcode.in/assets/img/instructor/3.1.jpg"
        }
    ];

    return (
        <div className="bg-white">
            <PageHero
                title="About Us"
                subtitle="Learn about our mission to empower students with industry-ready skills and transform careers through quality IT education."
            />

            <StatsSection
                badge="Our Story"
                title={
                    <div className="text-[#001a3d]">
                        IT Training Institute In<br />
                        <span className="text-[#2cc939]">Pune LinkCode Technology</span>
                    </div>
                }
                subtitle="Linkcode Technologies is Pune's No. 1 IT training and placement institute, committed to shaping careers and bridging the gap between talent and opportunity. With a mission to empower students with in-demand technical skills, we offer comprehensive training programs tailored to the ever-evolving IT industry."
                stats={statsData}
                variant="light"
            />

            <FeatureGrid
                title={
                    <>
                        Why To Choose <span className="text-blue-600">Linkcode IT Training Institute</span> In Pune, India
                    </>
                }
                features={featuresData}
            />

            {/* Off-Campus Placement Section */}
            <section className="px-10 md:px-24 lg:px-56 py-24 bg-white">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={7}>
                        <div>
                            <Typography variant="h3" className="text-[#001a3d] font-black leading-tight mb-8">
                                Preparing Students For <span className="text-[#2cc939]">Off-Campus Placement</span>
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                                Breaking into the IT industry is becoming increasingly competitive. Simply holding a degree is no longer enough—practical skills, industry knowledge, and hands-on experience are essential to securing a job in top companies. The more you learn and practice, the better your chances of success.
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                                At Linkcode, we bridge the gap between academics and industry expectations by providing comprehensive placement training. Our expert mentors guide students through technical training, coding assessments, mock interviews, and resume building, ensuring they are fully prepared for off-campus opportunities.
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 leading-relaxed">
                                Our efforts have been recognized time and again, and we continue to uphold our commitment to quality training and student success. With personalized mentorship, corporate tie-ups, and real-world projects, we empower our students to achieve their dream jobs in the IT sector.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://www.linkcode.in/assets/img/others/place2.1.jpg"
                                alt="Students Team"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </Grid>
                </Grid>
            </section>

            {/* Achievements Banner Section */}
            <section className="px-10 md:px-24 lg:px-56 pb-24 bg-white">
                <div className="mb-12 text-left">
                    <Typography variant="h3" className="text-[#001a3d] font-black leading-tight mb-4">
                        Our <span className="text-blue-600">Achievements</span>
                    </Typography>
                    <Typography variant="body1" className="text-gray-600 max-w-5xl">
                        At Linkcode, we are committed to shaping the future of aspiring IT professionals. Our <span className="font-bold text-[#001a3d]">comprehensive training programs, expert mentorship, and 100% placement support</span> have helped thousands of students build successful careers in the IT industry. These numbers reflect our dedication and hard work in providing top-quality education and career guidance.
                    </Typography>
                </div>
                <AchievementsBanner />
            </section>

            {/* Team Members Section */}
            <section className="px-10 md:px-24 lg:px-56 py-24 bg-gray-50/50">
                <div className="mb-16">
                    <span className="inline-block px-4 py-1.5 rounded bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                        Our Qualified People Matter
                    </span>
                    <Typography variant="h3" className="text-[#001a3d] font-black leading-tight">
                        Our <span className="text-blue-600">Team</span> Members
                    </Typography>
                </div>

                <Grid container spacing={4}>
                    {teamData.map((member, idx) => (
                        <Grid item xs={12} md={4} key={idx}>
                            <TeamCard {...member} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </div>
    );
};

export default About;

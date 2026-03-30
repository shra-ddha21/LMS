import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FacebookLogo, TwitterLogo, WhatsAppLogo, LinkedInLogo, InstagramLogo, YouTubeLogo } from '../common/SocialIcons';
import { FOOTER_QUICK_LINKS, FOOTER_COURSES, OFFICE_ADDRESS } from '../../constants/navigation';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#001a3d] text-white pt-16 pb-8">
            <div className="px-10 md:px-24 lg:px-56">
                <Grid container spacing={6}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="mb-6">
                            <span className="text-3xl font-bold tracking-tight">
                                <span className="text-blue-400">Link</span>
                                <span className="text-green-400">code</span>
                            </span>
                            <div className="text-[14px] uppercase font-bold text-gray-400 leading-none mt-1">
                                Technologies Pvt. Ltd.
                            </div>
                            <div className="text-[12px] text-gray-500 mt-2">
                                AN ISO CERTIFIED : 9001 : 2015
                            </div>
                        </div>
                        <Typography variant="body1" className="text-gray-400 leading-relaxed mb-6">
                            Linkcode Technologies is Pune's No. 1 IT training and placement institute,
                            committed to shaping careers and bridging the gap between talent and opportunity.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="font-bold mb-6 text-xl">
                            Quick Links
                        </Typography>
                        <ul className="space-y-4">
                            {FOOTER_QUICK_LINKS.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-base">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>

                    {/* Courses */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="font-bold mb-6 text-xl">
                            Courses
                        </Typography>
                        <ul className="space-y-4">
                            {FOOTER_COURSES.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-base">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="font-bold mb-6 text-xl">
                            Contact
                        </Typography>
                        <Typography variant="body1" className="text-gray-400 mb-6 text-sm leading-relaxed uppercase">
                            {OFFICE_ADDRESS.address}
                        </Typography>
                        <div className="space-y-3 mb-8 text-white font-medium">
                            {OFFICE_ADDRESS.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\s+/g, '')}`}
                                    className="block text-white text-base hover:text-blue-400 transition-colors"
                                >
                                    {phone}
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            {[
                                { icon: <FacebookLogo />, link: 'https://www.facebook.com/LinkcodeTechnologiesPune/' },
                                { icon: <TwitterLogo />, link: 'https://twitter.com/linkcodetech' },
                                { icon: <WhatsAppLogo />, link: 'https://wa.me/919604430489' },
                                { icon: <LinkedInLogo />, link: 'https://www.linkedin.com/company/linkcode-technologies/' },
                                { icon: <InstagramLogo />, link: 'https://www.instagram.com/linkcodetechnologies/' },
                                { icon: <YouTubeLogo />, link: 'https://www.youtube.com/@rahulahire0708' },
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    component="a"
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white shadow-lg hover:bg-gray-50 transition-all p-2.5 hover:-translate-y-1"
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </div>
                    </Grid>
                </Grid>

                <Box className="border-t border-white/5 mt-16 pt-8 flex flex-col items-center justify-center relative">
                    <Typography variant="body1" className="text-gray-400 text-base text-center">
                        Copyright © 2026 LinkCode. All Rights Reserved.
                    </Typography>
                    <div className="absolute right-0 top-8">
                        <IconButton
                            onClick={scrollToTop}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2"
                            sx={{ borderRadius: '4px' }}
                        >
                            <KeyboardArrowUpIcon />
                        </IconButton>
                    </div>
                </Box>
            </div>
        </footer>
    );
};


export default Footer;

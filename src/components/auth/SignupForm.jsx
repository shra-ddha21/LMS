import React from 'react';
import { Button, TextField, IconButton } from '@mui/material';
import { FacebookLogo, YouTubeLogo, LinkedInLogo } from '../common/SocialIcons';

const SignupForm = () => {
    return (
        <div className="flex flex-col w-full max-w-md mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Signup</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-lg bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Button
                    variant="contained"
                    fullWidth
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md shadow-blue-200 capitalize text-xl"
                    sx={{ textTransform: 'none', py: 1.5 }}
                >
                    Signup
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-500 mb-4">Connect with us</p>
                <div className="flex justify-center gap-4">
                    <IconButton
                        component="a"
                        href="https://www.facebook.com/LinkcodeTechnologiesPune/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md hover:bg-gray-50 transition-transform hover:-translate-y-1"
                    >
                        <FacebookLogo />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.youtube.com/@rahulahire0708"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md hover:bg-gray-50 transition-transform hover:-translate-y-1"
                    >
                        <YouTubeLogo />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/company/linkcode-technologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md hover:bg-gray-50 transition-transform hover:-translate-y-1"
                    >
                        <LinkedInLogo />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

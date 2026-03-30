import React, { useState } from 'react';
import { Button, IconButton, Alert } from '@mui/material';
import { FacebookLogo, YouTubeLogo, LinkedInLogo } from '../common/SocialIcons';
import useAuth from '../../hooks/useAuth';

const SignupForm = ({ onClose }) => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (formData.password !== formData.confirmPassword) {
                throw new Error("Passwords do not match");
            }
            await register(formData);
            if (onClose) onClose();
        } catch (err) {
            setError(err.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Signup</h2>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md shadow-blue-200 capitalize text-xl"
                    sx={{ textTransform: 'none', py: 1.5 }}
                >
                    {loading ? 'Signing up...' : 'Signup'}
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

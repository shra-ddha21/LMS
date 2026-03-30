import React, { useState } from 'react';
import { Button, IconButton, Alert } from '@mui/material';
import { FacebookLogo, YouTubeLogo, LinkedInLogo } from '../common/SocialIcons';
import useAuth from '../../hooks/useAuth';

const SigninForm = ({ onClose }) => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
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
            await login(formData.email, formData.password);
            if (onClose) onClose();
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Sign In</h2>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                <div className="text-right">
                    <a href="#" className="text-base text-blue-600 hover:text-blue-800 font-medium">
                        Forgot Password?
                    </a>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md shadow-blue-200 capitalize text-xl"
                    sx={{ textTransform: 'none', py: 1.5 }}
                >
                    {loading ? 'Signing In...' : 'Sign In'}
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

export default SigninForm;

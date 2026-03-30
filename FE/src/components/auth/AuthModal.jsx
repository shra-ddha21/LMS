import React, { useState } from 'react';
import Modal from '../common/Modal';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import { Button } from '@mui/material';

const AuthModal = ({ open, onClose, initialView = 'signup' }) => {
    const [view, setView] = useState(initialView); // 'signup' or 'signin'

    React.useEffect(() => {
        if (open) {
            setView(initialView);
        }
    }, [initialView, open]);

    const isSignup = view === 'signup';

    const toggleView = () => {
        setView(isSignup ? 'signin' : 'signup');
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col md:flex-row w-full min-h-[650px]">
                {/* Left Side - Info Panel */}
                <div className={`w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center items-center text-center text-white transition-colors duration-300 ${isSignup ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                    <h2 className="text-3xl font-bold mb-4">
                        {isSignup ? 'Come join us!' : 'Welcome Back!'}
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                        {isSignup
                            ? "We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts."
                            : "To keep connected with us please login with your personal info."
                        }
                    </p>

                    <div className=" bg-blue-700/30 rounded-full p-1 inline-flex items-center">
                        <span className="text-base px-4 py-2 text-blue-100">
                            {isSignup ? "Already have an account?" : "Don't have an account?"}
                        </span>
                        <Button
                            onClick={toggleView}
                            variant="outlined"
                            className="rounded-full border-white text-white hover:bg-white hover:text-blue-600 px-6"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                borderRadius: '9999px',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#2563eb',
                                    borderColor: 'white'
                                }
                            }}
                        >
                            {isSignup ? "Signin" : "Signup"}
                        </Button>
                    </div>
                </div>

                {/* Right Side - Form Panel */}
                <div className="w-full md:w-7/12 bg-white flex items-center justify-center p-4">
                    {isSignup ? <SignupForm onClose={onClose} /> : <SigninForm onClose={onClose} />}
                </div>
            </div>
        </Modal>
    );
};

export default AuthModal;

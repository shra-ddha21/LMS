import React from 'react';
import { Modal as MuiModal, Fade, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ open, onClose, children }) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            closeAfterTransition
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 2, md: 4 },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(255, 255, 255, 1)' // Fully opaque white background
                }
            }}
        >
            <Fade in={open}>
                <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden outline-none">
                    <IconButton
                        onClick={onClose}
                        className="absolute right-4 top-4 z-50 text-gray-500 hover:text-gray-700"
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'grey.500'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {children}
                </div>
            </Fade>
        </MuiModal>
    );
};

export default Modal;

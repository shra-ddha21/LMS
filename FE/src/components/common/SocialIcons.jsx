import React from 'react';

// Icons are set to 24x24 by default to match standard icon sizes, but can be scaled via className or style.

export const FacebookLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <circle cx="24" cy="24" r="24" fill="#1877F2" />
        <path fill="#FFF" d="M29.7 24h-4.3v15.6h-6.4V24h-3v-5.6h3v-3.6c0-4.6 1.8-8.2 7.7-8.2 2.8 0 4.6.4 4.6.4l-.6 5.6s-1.9-.1-3.7-.1c-1.8 0-2.3 1-2.3 2.5v3.4h5.6l-.6 5.6z" />
    </svg>
);

export const InstagramLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <radialGradient id="instagram-gradient" cx="19.38" cy="42.035" r="27.601" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f09433" />
            <stop offset=".25" stopColor="#e6683c" />
            <stop offset=".5" stopColor="#dc2743" />
            <stop offset=".75" stopColor="#cc2366" />
            <stop offset="1" stopColor="#bc1888" />
        </radialGradient>
        <path fill="url(#instagram-gradient)" d="M24 6.8c5.6 0 6.3 0 8.5.1 2 .1 3.1.4 3.8.7 1 .4 1.7.9 2.4 1.6.7.7 1.2 1.4 1.6 2.4.3.7.6 1.8.7 3.8.1 2.2.1 2.9.1 8.5s0 6.3-.1 8.5c-.1 2-.4 3.1-.7 3.8-.4 1-.9 1.7-1.6 2.4-.7.7-1.4 1.2-2.4 1.6-.7.3-1.8.6-3.8.7-2.2.1-2.9.1-8.5.1s-6.3 0-8.5-.1c-2-.1-3.1-.4-3.8-.7-1-.4-1.7-.9-2.4-1.6-.7-.7-1.2-1.4-1.6-2.4-.3-.7-.6-1.8-.7-3.8-.1-2.2-.1-2.9-.1-8.5s0-6.3.1-8.5c.1-2 .4-3.1.7-3.8.4-1 .9-1.7 1.6-2.4.7-.7 1.4-1.2 2.4-1.6.7-.3 1.8-.6 3.8-.7 2.2-.1 2.9-.1 8.5-.1zm0-4.3c-5.7 0-6.4 0-8.6.1-2.2.1-3.7.5-5 1-1.4.5-2.5 1.2-3.7 2.3-1.1 1.1-1.8 2.3-2.3 3.7-.5 1.3-.9 2.8-1 5-.1 2.2-.1 2.9-.1 8.6s0 6.4.1 8.6c.1 2.2.5 3.7 1 5 .5 1.4 1.2 2.5 2.3 3.7 1.1 1.1 2.3 1.8 3.7 2.3 1.3.5 2.8.9 5 1 2.2.1 2.9.1 8.6.1s6.4 0 8.6-.1c2.2-.1 3.7-.5 5-1 1.4-.5 2.5-1.2 3.7-2.3 1.1-1.1 1.8-2.3 2.3-3.7.5-1.3.9-2.8 1-5 .1-2.2.1-2.9.1-8.6s0-6.4-.1-8.6c-.1-2.2-.5-3.7-1-5-.5-1.4-1.2-2.5-2.3-3.7-1.1-1.1-2.3-1.8-3.7-2.3-1.3-.5-2.8-.9-5-1-2.2-.1-2.9-.1-8.6-.1z" />
        <path fill="url(#instagram-gradient)" d="M24 11.2c-7.1 0-12.8 5.7-12.8 12.8S16.9 36.8 24 36.8 36.8 31.1 36.8 24 31.1 11.2 24 11.2zm0 21.3c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
        <circle fill="url(#instagram-gradient)" cx="35.3" cy="12.7" r="2.9" />
    </svg>
);

export const LinkedInLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <path fill="#0077b5" d="M44 4H4v40h40V4z" />
        <path fill="#FFF" d="M14 19h-4v13h4V19zm-2-6c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3S15.3 13 14 13zm20 19h-4v-7c0-1.7 0-4-3-4s-3 1.9-3 4v7h-4V19h4v2c.5-1 4-2 4-2 3.5 0 6 3 6 8v5z" />
    </svg>
);

export const YouTubeLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <path fill="#FF0000" d="M43.2 11.5c-.5-1.8-2-3.3-3.8-3.8C35.9 7 24 7 24 7s-11.9 0-15.4.7c-1.8.5-3.3 2-3.8 3.8C4 15 4 24 4 24s0 9 4.8 12.5c.5 1.8 2 3.3 3.8 3.8 3.5.7 15.4.7 15.4.7s11.9 0 15.4-.7c1.8-.5 3.3-2 3.8-3.8C44 33 44 24 44 24s0-9-.8-12.5z" />
        <path fill="#FFF" d="M20 31l10-7-10-7z" />
    </svg>
);

export const TwitterLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <path fill="#000" d="M26.6 19.3L44 0h-4.3L24.7 16.7 12 0H1l18.3 24.8L1 44h4.3l15.9-17.7L35 44h11L26.6 19.3zM18 28.9l-2-2.7-10.7-14.8h6.4l7.1 9.8 2 2.7 11.5 15.9h-6.4L18 28.9z" />
    </svg>
);

export const WhatsAppLogo = ({ className = "w-6 h-6", ...props }) => (
    <svg viewBox="0 0 48 48" className={className} {...props}>
        <path fill="#25D366" d="M24 4C13 4 4 13 4 24c0 3.6 1 6.9 2.7 9.8L4.2 44l10.5-2.7c2.8 1.5 5.9 2.4 9.3 2.4 11 0 20-9 20-20S35 4 24 4z" />
        <path fill="#FFF" d="M35.1 33.3c-.6 1.7-3 3-4.2 3.2-2.7.4-9.3-2.6-12.7-8.1-2.9-4.8-2.6-7.8-1-9.3 2-1.9 2.6-.4 3.7 2.1.8 1.9.4 3.1-.4 4.1-.7.9-1.5 2 .2 4.9 2.5 4.3 6.3 5.6 8.5 4 .9-.6 1.1-1.7 1.5-2.7.3-1 .9-1.2 2.3-.6 1.4.6 3 1.4 3.3 1.9.3.5.3 3.1-1.2 4.8z" />
    </svg>
);

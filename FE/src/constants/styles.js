/**
 * Centralized style constants for consistent styling across the application.
 * These constants help eliminate code duplication and maintain design consistency.
 */

// Section padding variants
export const SECTION_PADDING = {
    default: 'px-10 md:px-24 lg:px-56',
    vertical: 'py-20',
    verticalLarge: 'py-24',
    full: 'px-10 md:px-24 lg:px-56 py-20',
    fullLarge: 'px-10 md:px-24 lg:px-56 py-24',
};

// Color palette
export const COLORS = {
    primary: {
        navy: '#001a3d',
        navyDark: '#002b5c',
        blue: '#1976d2',
        blueLight: '#2196f3',
    },
    secondary: {
        green: '#2cc939',
        greenLight: '#4caf50',
    },
    accent: {
        orange: '#ff9800',
        red: '#f44336',
        purple: '#9c27b0',
    },
    neutral: {
        white: '#ffffff',
        gray50: '#f8faff',
        gray100: '#eef2f6',
        gray300: '#cbd5e1',
        gray500: '#64748b',
        gray600: '#475569',
    },
};

// Background variants
export const BACKGROUNDS = {
    white: 'bg-white',
    gray: 'bg-gray-50/50',
    grayAlt: 'bg-[#f8faff]',
    transparent: 'bg-transparent',
};

// Text field styles (Material-UI sx props)
export const TEXT_FIELD_STYLES = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '16px',
        backgroundColor: '#fcfdfe',
        '& fieldset': { borderColor: '#eef2f6' },
        '&:hover fieldset': { borderColor: '#1976d2' },
    },
};

// Button base styles
export const BUTTON_STYLES = {
    primary: {
        base: 'bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition-all hover:-translate-y-1',
        rounded: 'rounded-lg',
        roundedFull: 'rounded-2xl',
    },
    secondary: {
        base: 'bg-white hover:bg-gray-50 text-blue-600 font-bold border-2 border-blue-600 transition-all',
        rounded: 'rounded-lg',
    },
    green: {
        base: 'bg-[#2cc939] hover:bg-green-600 text-white font-bold shadow-lg transition-all hover:-translate-y-1',
        rounded: 'rounded-lg',
    },
};

// Common transitions
export const TRANSITIONS = {
    default: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    fast: 'transition-all duration-150',
    transform: 'transition-transform duration-300',
    colors: 'transition-colors duration-300',
};

// Shadow variants
export const SHADOWS = {
    card: 'shadow-[0_5px_15px_rgba(0,0,0,0.05)]',
    cardHover: 'hover:shadow-2xl',
    large: 'shadow-[0_10px_40px_rgba(0,0,0,0.04)]',
    xl: 'shadow-xl',
    blue: 'shadow-lg shadow-blue-200',
};

// Border radius
export const BORDER_RADIUS = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
};

// Typography
export const TYPOGRAPHY = {
    heading: {
        h1: 'text-4xl md:text-5xl lg:text-6xl font-black',
        h2: 'text-3xl md:text-4xl lg:text-5xl font-black',
        h3: 'text-2xl md:text-3xl lg:text-4xl font-black',
        h4: 'text-xl md:text-2xl lg:text-3xl font-extrabold',
    },
    body: {
        large: 'text-lg leading-relaxed',
        default: 'text-base leading-relaxed',
        small: 'text-sm leading-relaxed',
    },
    colors: {
        primary: 'text-[#001a3d]',
        secondary: 'text-gray-600',
        muted: 'text-gray-500',
        accent: 'text-blue-600',
        green: 'text-[#2cc939]',
    },
};

// Badge styles
export const BADGE_STYLES = {
    blue: 'inline-block px-4 py-1.5 rounded bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider',
    green: 'inline-block px-4 py-1.5 rounded bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider',
    orange: 'inline-block px-4 py-1.5 rounded bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-wider',
};

// Underline/divider styles
export const DIVIDER_STYLES = {
    blue: 'w-20 h-1 bg-blue-600 rounded-full',
    blueLarge: 'w-24 h-1.5 bg-blue-600 rounded-full',
    green: 'w-20 h-1 bg-[#2cc939] rounded-full',
    greenLarge: 'w-24 h-1.5 bg-[#2cc939] rounded-full',
};

// Icon container styles
export const ICON_CONTAINER = {
    small: 'w-10 h-10 rounded-full flex items-center justify-center',
    medium: 'w-14 h-14 rounded-2xl flex items-center justify-center',
    large: 'w-16 h-16 rounded-xl flex items-center justify-center',
};

// Grid spacing
export const GRID_SPACING = {
    tight: 3,
    default: 4,
    relaxed: 6,
    loose: 8,
};

// Carousel styles
export const CAROUSEL_STYLES = {
    container: 'relative overflow-hidden',
    track: 'flex transition-transform duration-700 ease-in-out',
    slide: 'w-full shrink-0',
    controls: {
        button: 'bg-white shadow-xl hover:bg-blue-600 hover:text-white transition-colors',
        position: 'absolute top-1/2 -translate-y-1/2 z-10',
        left: '-left-4 md:-left-16',
        right: '-right-4 md:-right-16',
    },
    dots: {
        container: 'flex justify-center gap-4 mt-12',
        dot: 'w-3 h-3 rounded-full transition-all duration-300',
        active: 'bg-blue-600 w-10',
        inactive: 'bg-gray-300',
    },
};

// Form styles
export const FORM_STYLES = {
    label: 'text-[#001a3d] font-black mb-3 ml-1 uppercase tracking-wider text-lg',
    spacing: 'space-y-6',
};

// Card styles
export const CARD_STYLES = {
    base: 'bg-white rounded-xl overflow-hidden border border-gray-100',
    shadow: 'shadow-[0_5px_15px_rgba(0,0,0,0.05)]',
    hover: 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-300',
    padding: 'p-6',
    paddingLarge: 'p-8',
};

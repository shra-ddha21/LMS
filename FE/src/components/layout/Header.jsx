import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Avatar, Menu, MenuItem } from '@mui/material';
import { NAV_LINKS } from '../../constants/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AuthModal from '../auth/AuthModal';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
    const [initialAuthView, setInitialAuthView] = React.useState('signup');
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && !hasScrolled) {
                setHasScrolled(true);
                setShouldAnimate(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled]);

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all duration-300 ${shouldAnimate ? 'animate-header-slide' : ''
                    } ${hasScrolled ? 'shadow-md' : ''}`}
            >
                <div className="px-4 md:px-10 py-2">
                    <div className="flex h-24 items-center justify-between gap-4">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold tracking-tight">
                                    <span className="text-blue-600">Link</span>
                                    <span className="text-green-600">code</span>
                                </span>
                                <span className="text-[12px] uppercase font-bold text-gray-500 leading-none">
                                    Technologies Pvt. Ltd.
                                </span>
                                <span className="text-[10px] text-gray-400 mt-1">
                                    AN ISO CERTIFIED : 9001 : 2015
                                </span>
                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <nav className="hidden xl:flex items-center gap-6">
                            {NAV_LINKS.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`text-base font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Call to Action & Mobile Toggle */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {user ? (
                                <div className="hidden sm:flex items-center gap-3">
                                    <span className="text-gray-700 font-medium">Hello, {user.firstName}</span>
                                    {user.role === 'Admin' && (
                                        <Button component={Link} to="/admin" variant="text" size="small">Admin</Button>
                                    )}
                                    {user.role === 'Instructor' && (
                                        <Button component={Link} to="/instructor" variant="text" size="small">Dashboard</Button>
                                    )}
                                    <Button 
                                        onClick={logout}
                                        variant="outlined" 
                                        color="error"
                                        size="small"
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => {
                                            setInitialAuthView('signin');
                                            setIsAuthModalOpen(true);
                                        }}
                                        variant="text"
                                        className="hidden sm:flex text-gray-600 hover:text-blue-600 capitalize px-4 py-2 rounded-md font-semibold text-sm whitespace-nowrap"
                                        sx={{
                                            color: '#4b5563',
                                            '&:hover': {
                                                color: '#2563eb',
                                                backgroundColor: 'transparent'
                                            }
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setInitialAuthView('signup');
                                            setIsAuthModalOpen(true);
                                        }}
                                        variant="outlined"
                                        className="hidden sm:flex border-blue-600 text-blue-600 hover:bg-blue-50 capitalize px-6 py-2 rounded-md font-semibold text-sm whitespace-nowrap"
                                        sx={{
                                            borderRadius: '4px',
                                            borderColor: '#2563eb',
                                            color: '#2563eb',
                                            '&:hover': {
                                                borderColor: '#1d4ed8',
                                                backgroundColor: '#eff6ff'
                                            }
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white capitalize px-6 py-2 rounded-md shadow-none font-semibold text-sm whitespace-nowrap"
                                sx={{ borderRadius: '4px' }}
                            >
                                Book A Demo
                            </Button>

                            {/* Mobile Toggle Button */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setIsDrawerOpen(true)}
                                className="text-[#001a3d] hover:bg-blue-50 transition-colors"
                                sx={{ display: { xs: 'inline-flex', xl: 'none' } }}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: '300px',
                            padding: '24px',
                            backgroundColor: '#fff'
                        }
                    }}
                >
                    <Box className="flex flex-col h-full">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between mb-10">
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-blue-600">Link</span>
                                <span className="text-green-600">code</span>
                            </span>
                            <IconButton
                                onClick={() => setIsDrawerOpen(false)}
                                className="bg-gray-50 text-gray-500 hover:bg-gray-100"
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>

                        {/* Navigation Links in Drawer */}
                        <List className="space-y-1">
                            {NAV_LINKS.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <ListItem key={link.path} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to={link.path}
                                            onClick={() => setIsDrawerOpen(false)}
                                            selected={isActive}
                                            sx={{
                                                borderRadius: '8px',
                                                py: 1.5,
                                                '&.Mui-selected': {
                                                    bgcolor: 'rgba(37, 99, 235, 0.08)',
                                                    color: '#2563eb',
                                                    '&:hover': { bgcolor: 'rgba(37, 99, 235, 0.12)' }
                                                }
                                            }}
                                        >
                                            <ListItemText
                                                primary={link.label}
                                                primaryTypographyProps={{
                                                    fontWeight: isActive ? 700 : 500,
                                                    fontSize: '1.1rem'
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>

                        {/* CTA in Drawer */}
                        <Box sx={{ mt: 'auto', pt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {user ? (
                                <Button
                                    onClick={() => {
                                        setIsDrawerOpen(false);
                                        logout();
                                    }}
                                    variant="outlined"
                                    color="error"
                                    fullWidth
                                    className="border-red-500 text-red-500 hover:bg-red-50 capitalize py-3 rounded-lg font-bold text-base"
                                >
                                    Logout
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => {
                                            setIsDrawerOpen(false);
                                            setInitialAuthView('signin');
                                            setIsAuthModalOpen(true);
                                        }}
                                        variant="text"
                                        fullWidth
                                        className="text-gray-600 hover:bg-gray-50 capitalize py-3 rounded-lg font-bold text-base"
                                    >
                                        Sign In
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setIsDrawerOpen(false);
                                            setInitialAuthView('signup');
                                            setIsAuthModalOpen(true);
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        className="border-blue-600 text-blue-600 hover:bg-blue-50 capitalize py-3 rounded-lg font-bold text-base"
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                            <Button
                                component={Link}
                                to="/contact"
                                onClick={() => setIsDrawerOpen(false)}
                                variant="contained"
                                fullWidth
                                className="bg-blue-600 hover:bg-blue-700 text-white capitalize py-4 rounded-lg shadow-lg shadow-blue-100 font-bold text-base"
                                sx={{ textTransform: 'uppercase' }}
                            >
                                Book A Demo
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            </header>

            <AuthModal 
                open={isAuthModalOpen} 
                onClose={() => setIsAuthModalOpen(false)} 
                initialView={initialAuthView}
            />
        </>
    );
};

export default Header;

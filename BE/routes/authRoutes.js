const express = require('express');
const {
    register,
    login,
    logout,
    getCurrentUser,
} = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', isAuthenticated, getCurrentUser);

module.exports = router;

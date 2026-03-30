const express = require('express');
const {
    createCourse,
    updateCourseStatus,
    getCourses,
    getCourseById,
} = require('../controllers/courseController');
const { isAuthenticated, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourseById);

router.post(
    '/',
    isAuthenticated,
    authorizeRoles('Instructor'),
    createCourse
);

router.put(
    '/:id/status',
    isAuthenticated,
    authorizeRoles('Admin'),
    updateCourseStatus
);

module.exports = router;

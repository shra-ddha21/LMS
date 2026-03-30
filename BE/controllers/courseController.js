const Course = require('../models/Course');

// @desc    Create a new course
// @route   POST /api/courses
// @access  Instructor
const createCourse = async (req, res) => {
  try {
    const { title, description, fee, seats } = req.body;

    const course = await Course.create({
      title,
      description,
      instructor: req.user._id,
      fee,
      seats,
      status: 'pending',
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve or Reject a course
// @route   PUT /api/courses/:id/status
// @access  Admin
const updateCourseStatus = async (req, res) => {
  try {
    const { status } = req.body; // 'approved' or 'rejected'
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    course.status = status;
    await course.save();

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all approved courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ status: 'approved' }).populate('instructor', 'firstName lastName');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'firstName lastName');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  updateCourseStatus,
  getCourses,
  getCourseById,
};

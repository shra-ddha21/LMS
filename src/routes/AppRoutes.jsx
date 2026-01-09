import { Routes, Route } from 'react-router-dom'
import { Typography } from '@mui/material'
import PageLayout from '../components/layout/PageLayout'
import Home from '../pages/home/Home'
import PageHero from '../components/common/PageHero'
import Training from '../pages/training/Training'
import Resources from '../pages/resources/Resources'
import HiredFromUs from '../pages/placements/HiredFromUs'
import About from '../pages/about/About'
import Courses from '../pages/courses/Courses'
import Contact from '../pages/contact/Contact'
import Placements from '../pages/placements/Placements'
import ScrollToTop from '../components/common/ScrollToTop'

const AppRoutes = () => {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/training" element={<Training />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/hired-from-us" element={<HiredFromUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  )
}

export default AppRoutes

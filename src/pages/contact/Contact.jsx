import React from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import StarIcon from '@mui/icons-material/Star';

const Contact = () => {
  const [mapKey, setMapKey] = React.useState(0);

  const handleMapFocus = () => {
    setMapKey(prev => prev + 1);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We're here to help. Reach out to us for any queries about our courses and admissions."
      />

      {/* Main Content Sections */}
      <section className="px-10 md:px-24 lg:px-56 py-24 bg-[#f8faff]">
        <Grid container spacing={8} justifyContent="center">
          {/* Left Box: Info Section */}
          <Grid item xs={12} lg={5}>
            <div className="bg-white p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col justify-center">
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Get in Touch
                </span>
                <Typography variant="h3" className="text-[#001a3d] font-black leading-tight mb-6" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  Keep In <span className="text-blue-600">Touch</span><br />With Us
                </Typography>
                <Typography variant="body1" className="text-gray-500 leading-relaxed text-lg">
                  Stay connected with us for the latest updates, resources, and learning opportunities.
                  Your journey to excellence starts here. ✨
                </Typography>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@linkcode.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <EmailIcon fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="caption" className="text-gray-400 font-bold uppercase tracking-widest block mb-1">
                      Email address
                    </Typography>
                    <Typography variant="h6" className="text-[#001a3d] font-black group-hover:text-blue-600 transition-colors">
                      info@linkcode.in
                    </Typography>
                  </div>
                </a>

                {/* Mobile Specific Mailto (Hidden on Desktop) */}
                <a href="mailto:info@linkcode.in" className="hidden">Trigger App</a>

                {/* Phone */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#2cc939] shrink-0 group-hover:bg-[#2cc939] group-hover:text-white transition-all duration-300">
                    <LocalPhoneIcon fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="caption" className="text-gray-400 font-bold uppercase tracking-widest block mb-1">
                      Contact numbers
                    </Typography>
                    <Typography variant="h6" className="text-[#001a3d] font-black group-hover:text-[#2cc939] transition-colors leading-tight">
                      <a href="tel:+919604430489" className="hover:underline">+91 9604430489</a>
                      <br />
                      <a href="tel:+917447714489" className="hover:underline">+91 7447714489</a>
                    </Typography>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <LocationOnIcon fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="caption" className="text-gray-400 font-bold uppercase tracking-widest block mb-1">
                      Our Location
                    </Typography>
                    <Typography variant="body1" className="text-[#001a3d] font-bold text-base leading-relaxed">
                      Office No 12, Third floor, Barve Memorial Complex, Jangali Maharaj Rd, opposite Panchali Hotel, Shivajinagar, Pune 411005
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/* Right Box: Contact Form */}
          <Grid item xs={12} lg={7}>
            <div className="bg-white p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
              <Typography variant="h4" className="text-[#001a3d] font-black mb-10 text-3xl">
                Send Us a <span className="text-[#2cc939]">Message</span>
              </Typography>

              <form className="space-y-6">
                <div className="mt-8">
                  <Typography variant="h6" className="text-[#001a3d] font-black mb-3 ml-1 uppercase tracking-wider text-lg">
                    Your Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="John Doe"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: '#fcfdfe',
                        '& fieldset': { borderColor: '#eef2f6' },
                        '&:hover fieldset': { borderColor: '#1976d2' }
                      }
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-[#001a3d] font-black mb-3 ml-1 uppercase tracking-wider text-lg">
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="john@example.com"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: '#fcfdfe',
                        '& fieldset': { borderColor: '#eef2f6' },
                        '&:hover fieldset': { borderColor: '#1976d2' }
                      }
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-[#001a3d] font-black mb-3 ml-1 uppercase tracking-wider text-lg">
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="91-XXXXX-XXXXX"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: '#fcfdfe',
                        '& fieldset': { borderColor: '#eef2f6' },
                        '&:hover fieldset': { borderColor: '#1976d2' }
                      }
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-[#001a3d] font-black mb-3 ml-1 uppercase tracking-wider text-lg">
                    Message Details
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="How can we help you?"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: '#fcfdfe',
                        '& fieldset': { borderColor: '#eef2f6' },
                        '&:hover fieldset': { borderColor: '#1976d2' }
                      }
                    }}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    fullWidth
                    variant="contained"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    sx={{ textTransform: 'uppercase', py: 2, fontSize: '0.9rem', letterSpacing: '2px' }}
                  >
                    Send Message Now
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </section>

      {/* Full Width Map Section */}
      <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden">
        {/* Map Overlay Div */}
        <div 
          onClick={handleMapFocus}
          className="absolute top-10 left-10 z-10 w-[320px] bg-white rounded-xl shadow-2xl p-6 border border-gray-100 hidden md:block cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300"
        >
          <Typography variant="subtitle1" className="text-[#001a3d] font-black mb-1">
            Linkcode Technologies
          </Typography>
          <Typography variant="caption" className="text-gray-500 block mb-3 leading-relaxed">
            Office No 12, Third floor, Barve Memorial Complex, Jangali Maharaj Rd, Pune, 411005
          </Typography>

          <div className="flex items-center gap-1 mb-4">
            <Typography variant="caption" className="text-orange-500 font-bold">4.9</Typography>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} sx={{ fontSize: 14 }} className="text-orange-500" />
              ))}
            </div>
            <Typography variant="caption" className="text-blue-600 ml-1 hover:underline cursor-pointer">226 reviews</Typography>
          </div>

          <hr className="my-4 border-gray-100" />

          <div className="flex justify-between items-center mt-2">
            <a
              href="https://www.google.com/maps/dir//Linkcode+Technologies,+Office+No+12,+Third+floor,+Barve+Memorial+Complex,+Jangali+Maharaj+Rd,+opposite+Panchali+Hotel,+Shivajinagar,+Pune,+Maharashtra+411005/@18.5244342,73.8415655,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c130325433a7:0x7f4749364b63a94a!2m2!1d73.8441404!2d18.5244342?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1 group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                <DirectionsIcon fontSize="small" />
              </div>
              <Typography variant="caption" className="font-bold text-blue-600">Directions</Typography>
            </a>

            <a
              href="https://www.google.com/maps/place/Linkcode+Technologies/@18.5244342,73.8441404,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c130325433a7:0x7f4749364b63a94a!8m2!3d18.5244342!4d73.8441404!16s%2Fg%2F11b6p4q_gq?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-[11px] font-bold hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View larger map
            </a>
          </div>
        </div>

        <iframe
          key={mapKey}
          title="Linkcode Technologies Pune Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1797825595995!2d73.84156547596634!3d18.522927282560875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c130325433a7%3A0x7f4749364b63a94a!2sLinkcode%20Technologies!5e0!3m2!1sen!2sin!4v1704633753234!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Grid, Typography } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import PageSection from '../../components/common/layout/PageSection';
import Badge from '../../components/common/layout/Badge';
import ContactInfoBlock from '../../components/sections/ContactInfoBlock';
import FormField from '../../components/common/form/FormField';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
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
      <PageSection background="grayAlt" padding="large">
        <Grid container spacing={8} justifyContent="center">
          {/* Left Box: Info Section */}
          <Grid item xs={12} lg={5}>
            <div className="bg-white p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col justify-center">
              <div className="mb-10">
                <Badge text="Get in Touch" variant="blue" className="mb-4" />
                <Typography variant="h3" className="text-[#001a3d] font-black leading-tight mb-6" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  Keep In <span className="text-blue-600">Touch</span><br />With Us
                </Typography>
                <Typography variant="body1" className="text-gray-500 leading-relaxed text-lg">
                  Stay connected with us for the latest updates, resources, and learning opportunities.
                  Your journey to excellence starts here. ✨
                </Typography>
              </div>

              <div className="space-y-8">
                <ContactInfoBlock
                  icon={<EmailIcon fontSize="medium" />}
                  label="Email address"
                  value="info@linkcode.in"
                  iconColor="blue"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@linkcode.in"
                />

                {/* Mobile Specific Mailto (Hidden on Desktop) */}
                <a href="mailto:info@linkcode.in" className="hidden">Trigger App</a>

                <ContactInfoBlock
                  icon={<LocalPhoneIcon fontSize="medium" />}
                  label="Contact numbers"
                  value={
                    <>
                      <a href="tel:+919604430489" className="hover:underline">+91 9604430489</a>
                      <br />
                      <a href="tel:+917447714489" className="hover:underline">+91 7447714489</a>
                    </>
                  }
                  iconColor="green"
                />

                <ContactInfoBlock
                  icon={<LocationOnIcon fontSize="medium" />}
                  label="Our Location"
                  value="Office No 12, Third floor, Barve Memorial Complex, Jangali Maharaj Rd, opposite Panchali Hotel, Shivajinagar, Pune 411005"
                  iconColor="orange"
                />
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
                  <FormField
                    label="Your Name"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <FormField
                    label="Email Address"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <FormField
                    label="Phone Number"
                    placeholder="91-XXXXX-XXXXX"
                  />
                </div>

                <div>
                  <FormField
                    label="Message Details"
                    placeholder="How can we help you?"
                    multiline
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <PrimaryButton
                    fullWidth
                    variant="blue"
                    size="large"
                    className="rounded-2xl shadow-xl"
                  >
                    Send Message Now
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </PageSection>

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

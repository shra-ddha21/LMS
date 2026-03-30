import React from 'react';
import { Grid } from '@mui/material';
import PageHero from '../../components/common/PageHero';
import PageSection from '../../components/common/layout/PageSection';
import SectionTitle from '../../components/common/layout/SectionTitle';
import LogoGrid from '../../components/sections/LogoGrid';
import Carousel from '../../components/common/carousel/Carousel';
import PlacedStudentCard from '../../components/placements/PlacedStudentCard';
import ReviewCard from '../../components/placements/ReviewCard';

const Placements = () => {
    const logos = [
        { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
        { name: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' },
        { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Barclays', url: 'https://www.linkcode.in/assets/img/companies/barclays.png' },
        { name: 'Brillio', url: 'https://www.linkcode.in/assets/img/brand/brillio3.jpg' },
        { name: 'Publicis Sapient', url: 'https://www.linkcode.in/assets/img/brand/sapient1.jpg' },
        { name: 'BNY Mellon', url: 'https://www.linkcode.in/assets/img/companies/bny-mellon.png' },
        { name: 'Bajaj', url: 'https://www.linkcode.in/assets/img/companies/bajaj.png' },
        { name: 'Cognizant', url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
        { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
        { name: 'Avaya', url: 'https://www.linkcode.in/assets/img/brand/avaya1.jpg' },
    ];

    const achievements = [
        { id: 1, image: 'https://tse2.mm.bing.net/th/id/OIP.QCNMuZp-ybhD2Aalq6V8rwHaL8?pid=Api&P=0&h=180', name: 'Akanksha', company: 'Intellect', package: '7.25 LPA', excitement: "Linkcode provides hands-on training that is crucial for the industry. The mentors are always there to guide you through complex concepts." },
        { id: 2, image: 'https://tse2.mm.bing.net/th/id/OIP.26ze_8Ky0EKkqNUFdg88BQHaLK?pid=Api&P=0&h=180', name: 'Sarthak', company: 'Homesfy', package: '7 LPA', excitement: "The placement team at Linkcode is dedicated. They helped me with mock interviews and resume building which was a game changer." },
        { id: 3, image: 'https://tse3.mm.bing.net/th/id/OIP.mPn9nhQjKJg8R8-vXyY4YAHaI2?pid=Api&P=0&h=180', name: 'Swapnil', company: 'Airtel', package: '7 LPA', excitement: "I learned so much during my internship on live projects. It gave me the confidence to handle real-world software development." },
        { id: 4, image: 'https://tse3.mm.bing.net/th/id/OIP.1VExMOMCKPwJDtGJZdQzOAHaJY?pid=Api&P=0&h=180', name: 'Lakshita', company: 'Amdocs', package: '6.5 LPA', excitement: "The environment at Linkcode is very supportive. Studying with like-minded peers pushed me to achieve my best." },
        { id: 5, image: 'https://tse1.mm.bing.net/th/id/OIP.YyI5h4U1RS8jKIAKVrNMMAHaHa?pid=Api&P=0&h=180', name: 'Akash', company: 'Altimetrik', package: '6 LPA', excitement: "From Java to React, the curriculum is very comprehensive. It covers everything needed to become a full-stack developer." },
        { id: 6, image: 'https://tse1.mm.bing.net/th/id/OIP.JtOrgieD2K1Ho_2LjZnaUAHaH4?pid=Api&P=0&h=180', name: 'Aditya', company: 'LTIMindtree', package: '5.5 LPA', excitement: "The soft skills training was as important as the technical part. It helped me clear my HR rounds with ease." },
        { id: 7, image: 'https://tse2.mm.bing.net/th/id/OIP.QCNMuZp-ybhD2Aalq6V8rwHaL8?pid=Api&P=0&h=180', name: 'Priya Sharma', company: 'Microsoft', package: '12 LPA', excitement: "Transforming my career was easy with Linkcode. The industry-oriented approach made me ready for a top MNC role." },
        { id: 8, image: 'https://tse2.mm.bing.net/th/id/OIP.26ze_8Ky0EKkqNUFdg88BQHaLK?pid=Api&P=0&h=180', name: 'Rohan Mehta', company: 'Google', package: '18 LPA', excitement: "The depth of knowledge the trainers have is amazing. They explain every topic with high clarity and practical examples." },
        { id: 9, image: 'https://tse3.mm.bing.net/th/id/OIP.mPn9nhQjKJg8R8-vXyY4YAHaI2?pid=Api&P=0&h=180', name: 'Neha Gupta', company: 'Amazon', package: '15 LPA' },
        { id: 10, image: 'https://tse3.mm.bing.net/th/id/OIP.1VExMOMCKPwJDtGJZdQzOAHaJY?pid=Api&P=0&h=180', name: 'Suresh Kumar', company: 'TCS', package: '4.5 LPA' },
        { id: 11, image: 'https://tse1.mm.bing.net/th/id/OIP.YyI5h4U1RS8jKIAKVrNMMAHaHa?pid=Api&P=0&h=180', name: 'Anjali Rai', company: 'Wipro', package: '5 LPA' },
        { id: 12, image: 'https://tse1.mm.bing.net/th/id/OIP.JtOrgieD2K1Ho_2LjZnaUAHaH4?pid=Api&P=0&h=180', name: 'Manoj Singh', company: 'Infosys', package: '6.2 LPA' },
    ];

    const reviews = [
        {
            name: "Sandeep Patil",
            review: "Linkcode provides the best platform for IT aspirants. The practical approach and real-world projects helped me understand the industry standards perfectly. I was able to learn Java Full Stack development in depth, starting from basic syntax to building complex microservices. The support from the placement cell was constant, and they prepared me for every single interview round.",
            rating: 5
        },
        {
            name: "Sneha Deshmukh",
            review: "I joined the Java Full Stack course and it was the best decision. The trainers are very patient and explain everything from scratch, which was very helpful as I was coming from a non-IT background. The mock interviews and technical workshops gave me the confidence I needed to crack my first interview at a top MNC. I highly recommend Linkcode for anyone serious about their IT career.",
            rating: 5
        },
        {
            name: "Amit Verma",
            review: "The placement support is exceptional. They didn't just give me calls but also prepared me for every single interview round. The curriculum is perfectly aligned with what top companies are looking for in terms of full-stack skills. The environment is positive and motivating, making it easier to learn and grow alongside other ambitious students.",
            rating: 5
        },
        {
            name: "Pratiksha K.",
            review: "Learning at Linkcode was a wonderful experience. The soft skills training really boosted my confidence for corporate communications and helped me navigate the professional world. The technical training was hands-on and project-based, which made learning much more engaging and practical for real-world scenarios.",
            rating: 4
        },
        {
            name: "Rahul Mehra",
            review: "The Python Full Stack course at Linkcode is truly comprehensive. From Django to React, everything was covered with great detail. The instructors are industry veterans who bring real-world insights into the classroom, making the sessions interactive and highly informative. I felt completely prepared for my job from day one.",
            rating: 5
        },
        {
            name: "Deepika Singh",
            review: "Software testing training at Linkcode exceeded my expectations. Both manual and automation testing concepts were explained with live examples. The placement assistance was top-notch, leading to multiple job offers from reputed companies. I'm grateful for the mentorship and guidance provided throughout the course.",
            rating: 5
        },
        {
            name: "Vikas Khanna",
            review: "The Web Development course is very well structured. I learned everything from HTML/CSS to MERN stack. The practical assignments after every module helped me grasp the concepts effectively. The trainers are always available to clear doubts, and the pre-placement sessions helped me polish my technical and communication skills significantly.",
            rating: 5
        },
        {
            name: "Anjali Sharma",
            review: "Linkcode is definitely the place to be if you want to kickstart your IT career. The technical knowledge I gained here is invaluable. The placement team is highly efficient and provides ample opportunities with reputed IT firms. The confidence I gained during the mock interviews was the key to my success in the final placement rounds.",
            rating: 5
        },
        {
            name: "Karan Johar",
            review: "The Data Science program is intensive and highly rewarding. The curriculum includes everything from statistics to deep learning. Working on real-world datasets and capstone projects gave me the practical edge needed in the industry. I am now happily placed as a Data Analyst in a top-tier company, thanks to Linkcode.",
            rating: 5
        }
    ];

    return (
        <div className="bg-white">
            <PageHero
                title="Placements"
                subtitle="Join our network of successful alumni placed in top MNCs across the globe."
            />

            {/* Placed AT Section */}
            <LogoGrid 
                logos={logos}
                title={
                    <>
                        Our Students <span className="text-[#2cc939]">Placed AT</span>
                    </>
                }
            />

            {/* Student Achievements Section */}
            <PageSection background="white" padding="large" className="overflow-hidden">
                <SectionTitle 
                    title={
                        <>
                            Student <span className="text-[#2cc939]">Achievements</span>
                        </>
                    }
                    underlineColor="greenLarge"
                    className="mb-16"
                />

                <div className="bg-gray-50/50 p-6 md:p-12 rounded-[40px] border border-gray-100 shadow-inner">
                    <Carousel
                        items={achievements}
                        itemsPerPage={6}
                        renderItem={(item, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <PlacedStudentCard {...item} />
                            </Grid>
                        )}
                        spacing={4}
                    />
                </div>
            </PageSection>

            {/* Student Reviews Section */}
            <PageSection background="gray" padding="large" className="overflow-hidden">
                <SectionTitle 
                    title={
                        <>
                            Student <span className="text-[#2cc939]">Reviews</span>
                        </>
                    }
                    underlineColor="greenLarge"
                    className="mb-16"
                />

                <Carousel
                    items={reviews}
                    itemsPerPage={3}
                    renderItem={(review, idx) => (
                        <Grid item xs={12} md={4} key={idx}>
                            <ReviewCard {...review} />
                        </Grid>
                    )}
                    spacing={4}
                />
            </PageSection>
        </div>
    );
};

export default Placements;

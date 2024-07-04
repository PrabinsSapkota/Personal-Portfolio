import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Project from './Project';
import Contact from './Contact';
import Foter from './Foter';
import Skills from './Skill';
import Testimonial from './Testimonial';
import Education from './Education';
const Main = () => {
    return (    
        <div className='bg-indigo-600'>
           <Nav/>
           <Hero/>
           <Project />
           <Education/>
           {/* <Testimonial/> */}
           <Skills/>
           <Contact/>
           <Foter/>
        </div>
    );
};

export default Main;
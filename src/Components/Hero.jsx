import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import kismat from "../assets/kismat.jpeg";

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-around items-center min-h-screen p-8 lg:space-x-10 sm:space-y-10 text-white">
            <div className="flex-1 flex flex-col lg:items-start space-y-4 text-center lg:text-left">
                <p className="text-4xl text-slate-300">I'm</p>
                <h1 className="text-6xl">Prabin Sapkota</h1>
                <p className="text-3xl text-slate-300">From Nepal.</p>
                <hr className="w-full border-slate-300" />
                <p className="text-xl font-sans text-slate-300 text-justify lg:text-left">I am passionate about front-end development and looking for new challenges. With experience in HTML, CSS, JavaScript, React, and more, I am eager to learn new technologies and improve my skills. Besides coding, I love playing football and enjoy the teamwork.</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={kismat} alt="Kismat" className="rounded-full border-8 border-white" style={{ width: '330px', height: '330px' }} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start space-y-4">
                <p className="text-4xl">About me</p>
                <p className="text-xl font-sans text-slate-300 text-justify">I work with modern JavaScript frameworks like React. In my free time, I enjoy learning about new technologies. Let's build something great together!</p>

                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>Show More..</button>
                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <a href="https://web.facebook.com/prabin.sapkota.75436" >
                        <FaFacebook size={40} className='border-2 hover:border-indig0-800 rounded-full' /></a>
                    <a href="https://www.instagram.com/10_kismat/">
                        <FaInstagram size={40} className='border-2 hover:border-indig0-800 rounded-full' /></a>
                    <a href="https://www.linkedin.com/in/prabin-sapkota-22993a309/"> <FaLinkedin size={40} className='border-2 hover:border-indig0-800 rounded-full' />
                    </a>
                    <a href="https://github.com/PrabinsSapkota">  <FaGithub size={40} className='border-2 hover:border-indig0-800 rounded-full' /></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

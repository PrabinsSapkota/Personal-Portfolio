import React, { useState } from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(!toggle);
    }   

    function closeMenu() {
        setToggle(false);
    }

    return (
        <div>
            <nav className="flex items-center justify-between p-4 lg:flex-row ">
                <div className="flex items-center">
                    <img src="/prabin.jpeg" alt="Prabin" className="opacity-90 h-14 w-14 object-cover rounded-full ml-2" />
                    <a href="" className="text-white font-mono text-2xl font-bold ml-2">PrabinSapkota</a>
                </div>

                <div className="space-x-4">
                    <div className="ssm:hidden lg:block space-x-2">
                        <a href="#" className="text-white hover:bg-indigo-800 rounded px-5 py-2 text-xl">Home</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded px-5 py-2 text-xl">About</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded px-5 py-2 text-xl">Projects</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded px-5 py-2 text-xl">Contact</a>
                        <a
                            href="/CV.pdf" 
                            download="PrabinSapkota_CV.pdf"
                            className="text-white rounded-md mb-2 border-zinc-950 hover:bg-indigo-800 px-2 py-2 text-sm"
                        >
                            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                                Download CV
                            </button>
                        </a>
                    </div>
                    <div className="ssm:block lg:hidden" onClick={openMenu}>
                        {toggle ? (
                            <RiCloseCircleFill size={30} className="text-white" />
                        ) : (
                            <HiMenu size={30} className="text-white" />
                        )}
                    </div>
                </div>
            </nav>

            {toggle && (
                <div className="ssm:block lg:hidden">
                    <div className="flex justify-between ml-10">
                        <ul>
                            <li className="text-white text-xl mb-2 cursor-pointer">Home</li>
                            <li className="text-white text-xl mb-2 cursor-pointer">About</li>
                            <li className="text-white text-xl mb-2 cursor-pointer">Projects</li>
                            <li className="text-white text-xl mb-2 cursor-pointer">Contact</li>
                            <a
                                href="/CV.pdf" 
                                download="PrabinSapkota_CV.pdf"
                                className="text-white rounded-md mb-2 border-zinc-950 hover:bg-indigo-800 px-2 py-2 text-sm"
                            >
                                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                                    Download CV
                                </button>
                            </a>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;

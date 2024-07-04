import React from 'react';
import { FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'Tailwind CSS', level: '60%', icon: <FaCss3Alt className="text-indigo-600" /> },
        { name: 'Bootstrap', level: '50%', icon: <FaBootstrap className="text-indigo-600" /> },
        { name: 'React.js', level: '50%', icon: <FaReact className="text-indigo-600" /> },
        { name: 'Express.js', level: '30%', icon: <FaNodeJs className="text-indigo-600" /> },
        { name: 'MongoDB', level: '60%', icon: <FaDatabase className="text-indigo-600" /> },
        { name: 'SQL', level: '60%', icon: <FaServer className="text-indigo-600" /> }
    ];

    return (
        <section className="bg-gray-100 p-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">My Skills</h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-6">
                        <div className="text-4xl">
                            {skill.icon}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                                <div
                                    className="bg-indigo-600 h-4 rounded-full"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                            <span className="text-gray-600 mt-1 block">{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

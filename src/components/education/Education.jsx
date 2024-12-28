import React from 'react';

const Education = () => {
    return (
        <section id="education" className="my-8 p-6 bg-gray-400 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 bg-gray-400 p-2 rounded-md">Education</h2>
            <div className="space-y-10">
                <div className="relative bg-white p-8 rounded-md shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
                    <div className="relative pl-16 mt-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">University Education</h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">BS in Computer Science</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">National University of Computer and Emerging Science, FAST</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Lahore, Pakistan, 2010 - 2014</p>
                    </div>
                </div>
                <div className="relative bg-white p-8 rounded-md shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
                    <div className="relative pl-16 mt-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">University Courses</h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            Artificial Intelligence, Computer Programming, Data Structures, Design & Analysis of Algorithms, Human-Computer Interaction, Object-Oriented Analysis & Design, Software Engineering, Theory of Automata, Advanced Database Systems
                        </p>
                    </div>
                </div>
                <div className="relative bg-white p-8 rounded-md shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
                    <div className="relative pl-16 mt-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">University Projects</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-4">
                                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Automated Text Positioning for Urdu Newspaper Headline</h4>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                    It was an intelligent rule-based automated system for positioning Urdu text in newspaper's headlines. Newspaper companies hire calligraphers to manually perform Urdu newspaper headline generation. This was a time-consuming task. It did the same work faster and more efficiently. It was my Final Year Project. It got 2nd position in Softec’14 FAST Lahore.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Technologies: C++, MFC, Cbitmap, Image processing</p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Features: Rule-based expert system for headline generation for Urdu newspaper</p>
                            </li>
                            <li>
                                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Compiler</h4>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                    It was a project in Compiler Construction course, a basic compiler for a language (subset of C++). It had 3 primitive data types: integers, character, and string. It also handled functions, Print statements, Input statements, and assignment statements.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Technologies: Java, CFG, Regular Expressions</p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Features: Translation Schemes, Byte Code, variables, arrays, IO, and functions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
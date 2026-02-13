import React from 'react';

const Overview = () => {
    return (
        <section id="overview" className="my-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-10 rounded-3xl relative overflow-hidden text-center border border-white/5 hover:border-primary/20 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -z-10"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10"></div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-white">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                </h2>

                <div className="prose prose-lg prose-invert mx-auto">
                    <p className="text-gray-300 leading-relaxed mb-6">
                        I am a <strong>Senior Software Engineer</strong> specializing in <strong>VoIP</strong> and <strong>Contact Center</strong> technologies.
                        With a passion for solving complex communication challenges, I align advanced technical systems with business needs to drive efficiency and innovation.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, and custom TCP/IP Network Programming. I thrive on building robust, scalable integrations and seamless user experiences.
                    </p>
                </div>

                <div className="mt-10 flex justify-center gap-4">
                    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-primary font-mono">
                        #ProblemSolver
                    </div>
                    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-secondary font-mono">
                        #VoIPSpecialist
                    </div>
                    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-accent font-mono">
                        #FullStack
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;

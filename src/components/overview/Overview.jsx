import React from 'react';

const Overview = () => {
    return (
        <section id="overview" className="my-10 md:my-20 w-full max-w-none px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="md:glass p-0 md:p-10 rounded-none md:rounded-3xl relative overflow-hidden text-left md:border md:border-white/5 md:hover:border-primary/20 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

                {/* Background blobs only on desktop or reduced on mobile */}
                <div className="hidden md:block absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -z-10"></div>
                <div className="hidden md:block absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10"></div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-white mt-10 md:mt-0 text-left">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                </h2>

                <div className="prose prose-lg prose-invert mr-auto px-0 md:px-0 text-left">
                    <p className="text-gray-300 leading-relaxed mb-6 text-left">
                        I'm a <strong>Senior Software Engineer and Conversational AI Engineer</strong> based in <strong>Berlin</strong>. For 12+ years I've built real-time software that helps businesses talk to their customers — first in enterprise contact centers, and now with AI.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-left">
                        Today I build <strong>voice and chat AI agents</strong> that handle real customer conversations — choosing the right LLM, speech-to-text and text-to-speech models, keeping latency low, and testing against real call scenarios. I understand both sides of a voice agent: the AI and the telephony it runs on.
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap justify-start gap-4 px-0 md:px-0">
                    {['#ConversationalAI', '#VoiceAI', '#ContactCenters', '#Telephony', '#VoIP', '#SIP', '#LLMs', '#LangGraph', '#CTI', '#RealTimeSystems', '#FullStack', '#Berlin'].map((tag, index) => {
                        const colors = ['text-primary', 'text-secondary', 'text-accent'];
                        return (
                            <div key={tag} className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono ${colors[index % colors.length]}`}>
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Overview;

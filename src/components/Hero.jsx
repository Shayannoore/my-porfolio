import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import profilePic from '../assets/dp.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-3/5 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Available for new opportunities</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Shayan Ali</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            An <span className="text-slate-900 font-semibold underline decoration-indigo-600 decoration-4">AI Engineer || LangChain & LangGraph Specialist</span> passionate about building intelligent agents, RAG systems, and scalable AI solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                to="projects"
                                smooth={true}
                                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 cursor-pointer"
                            >
                                <span>View My Work</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:border-indigo-600 transition-colors cursor-pointer"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-2/5 relative"
                    >
                        <div className="relative aspect-square w-64 md:w-80 lg:w-96 mx-auto">
                            <div className="absolute inset-0 border-2 border-indigo-600/20 rounded-[40px] rotate-6 scale-105" />
                            <div className="absolute inset-0 border-2 border-purple-600/20 rounded-[40px] -rotate-3 scale-110" />

                            <img
                                src={profilePic}
                                alt="ShayanNoore - Shayan Ali Noori"
                                className="absolute inset-0 w-full h-full object-cover rounded-[32px] shadow-2xl z-10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

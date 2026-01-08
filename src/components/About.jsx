import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Send } from 'lucide-react';
import profilePic from '../assets/dp.jpeg';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-30 transition duration-500" />
                            <img
                                src={profilePic}
                                alt="Shayan Ali Noori"
                                className="relative rounded-[32px] w-full max-w-md mx-auto aspect-square object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100">
                                <div className="bg-indigo-100 p-2 rounded-lg">
                                    <GraduationCap className="text-indigo-600 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Education</p>
                                    <p className="font-bold text-slate-900">Computer Science Graduate (specialized in AI and Machine Learning)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-3/5"
                    >
                        <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold mb-4">
                            <User className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-sm">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
                            Passionate about coding <br /> & <span className="text-indigo-600">AI Innovation</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                I am a dedicated Computer Science graduate with a deep interest in the intersection of mobile technology and Artificial Intelligence. My journey in tech is driven by a desire to solve real-world problems through elegant code.
                            </p>
                            <p>
                                I specialize in building high-performance mobile applications using <span className="text-slate-900 font-bold">React Native</span> and architecting robust backend systems with <span className="text-slate-900 font-bold">FastAPI</span> and <span className="text-slate-900 font-bold">Django REST</span>.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-12">
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <MapPin className="text-indigo-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Location</h4>
                                    <p className="text-slate-600">Available Globally (Remote)</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <Send className="text-indigo-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Status</h4>
                                    <p className="text-slate-600">Open to Projects</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

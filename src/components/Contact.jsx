import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Contact Info */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold mb-4">
                                    <MessageSquare className="w-5 h-5" />
                                    <span className="uppercase tracking-widest text-sm">Contact</span>
                                </div>
                                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Let's work <span className="text-indigo-600">together</span></h2>
                                <p className="text-lg text-slate-600 mb-12">
                                    Have a project in mind or just want to chat about AI? Feel free to reach out across any of these platforms.
                                </p>

                                <div className="space-y-6">
                                    <a href="mailto:Shayan.noore@gmail.com" className="flex items-center space-x-5 p-6 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all group">
                                        <div className="bg-indigo-50 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                                            <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Shayan.noore@gmail.com</p>
                                        </div>
                                    </a>

                                    <div className="flex gap-4">
                                        <a href="https://github.com/s4shayan" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-3 p-6 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
                                            <Github className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                                            <span className="font-bold text-slate-900">GitHub</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/shayan-noore-583a36308/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-3 p-6 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
                                            <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                            <span className="font-bold text-slate-900">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 p-8 md:p-12 bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-100"
                        >
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 ml-1">Your Message</label>
                                    <textarea placeholder="How can I help you?" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all min-h-[150px]" />
                                </div>
                                <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-extrabold flex items-center justify-center space-x-3 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-100 transition-all">
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

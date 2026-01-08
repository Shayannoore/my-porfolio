import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Cpu } from 'lucide-react';

const projects = [
    {
        title: 'AI Call Auditing System',
        description: 'Advanced speaker diarization combined with NLP for deep call insights and sentiment analysis.',
        tech: ['Python', 'Deep Learning', 'MSSQL'],
        icon: Cpu,
        color: 'from-blue-500 to-indigo-600'
    },
    {
        title: 'React Native Expense Tracker',
        description: 'Comprehensive mobile solution for financial tracking with real-time analytics and backend synchronization.',
        tech: ['React Native', 'Django REST', 'MSSQL'],
        icon: Smartphone,
        color: 'from-indigo-600 to-purple-600'
    },
    {
        title: 'FastAPI CRUD Ecosystem',
        description: 'High-performance backend API system designed for scalability and high-concurrency data operations.',
        tech: ['FastAPI', 'SQLite'],
        icon: Monitor,
        color: 'from-purple-600 to-pink-600'
    },
    {
        title: 'Book Management App',
        description: 'Intuitive mobile application for library organization featuring offline storage and barcode scanning.',
        tech: ['React Native', 'SQLite'],
        icon: Smartphone,
        color: 'from-pink-600 to-orange-500'
    },
    {
        title: 'Full-Stack Employee Management',
        description: 'A centralized workforce management ecosystem featuring a Django REST API, a React-based web dashboard, and an iOS/Android mobile application with image processing.',
        tech: ['Django', 'React', 'React Native', 'Expo', 'Bootstrap'],
        icon: Monitor,
        color: 'from-emerald-500 to-teal-600'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold text-slate-900 mb-4"
                        >
                            Featured <span className="text-indigo-600">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600"
                        >
                            A selection of my recent work focusing on mobile development and AI integration.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 20 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <a href="https://github.com/s4shayan" target="_blank" className="flex items-center space-x-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                            <span>View full GitHub</span>
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover:border-indigo-100 transition-all shadow-sm hover:shadow-2xl"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                <div className={`md:w-1/3 bg-gradient-to-br ${p.color} flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <p.icon className="text-white w-20 h-20 opacity-90" />
                                </div>
                                <div className="md:w-2/3 p-10 flex flex-col justify-between bg-white group-hover:bg-slate-50 transition-colors">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {p.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {p.tech.map((t, idx) => (
                                            <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <button className="flex items-center space-x-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors">
                                            <Github className="w-5 h-5" />
                                            <span>Code</span>
                                        </button>
                                        <button className="flex items-center space-x-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                            <span>Demo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

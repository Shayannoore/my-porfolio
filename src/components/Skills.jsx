import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Brain, Wrench, Languages } from 'lucide-react';

const skills = [
    { category: 'Frontend', list: ['React JS', 'React Native', 'Tailwind CSS'], icon: Layout, color: 'text-blue-600', bg: 'bg-blue-50' },
    { category: 'Backend', list: ['python','Django REST', 'FastAPI'], icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { category: 'Databases', list: ['SQL', 'SQLite'], icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { category: 'AI/ML', list: ['Machine Learning', 'Deep Learning', 'NLP','Computer Vision'], icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
    { category: 'Tools', list: ['Git', 'VS Code', 'Android Studio'], icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-50' },
    { category: 'Languages', list: ['Python', 'Java', 'C#'], icon: Languages, color: 'text-orange-600', bg: 'bg-orange-50' },

];
 
const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-slate-900 mb-4"
                    >
                        Technical <span className="text-indigo-600">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Leveraging modern technologies to build high-performance applications and intelligent systems.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                        >
                            <div className={`${skill.bg} ${skill.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <skill.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{skill.category}</h3>
                            <ul className="space-y-3 font-medium text-slate-600">
                                {skill.list.map((s, idx) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

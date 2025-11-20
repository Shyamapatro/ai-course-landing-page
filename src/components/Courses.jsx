import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        title: "Generative AI Masterclass",
        description: "Master the art of creating content with AI. Learn Stable Diffusion, Midjourney, and DALL-E.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        level: "Beginner",
        duration: "12 Weeks",
        students: "2.5k+"
    },
    {
        title: "LLM Engineering",
        description: "Build production-ready applications with Large Language Models. Fine-tuning, RAG, and LangChain.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        level: "Advanced",
        duration: "10 Weeks",
        students: "1.8k+"
    },
    {
        title: "Computer Vision Pro",
        description: "Deep dive into image recognition, object detection, and segmentation using PyTorch and YOLO.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop",
        level: "Intermediate",
        duration: "14 Weeks",
        students: "3k+"
    },
    {
        title: "NLP Specialist",
        description: "From text preprocessing to advanced Transformers. Master Natural Language Processing.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        level: "Intermediate",
        duration: "8 Weeks",
        students: "1.2k+"
    },
    {
        title: "AI for Business Leaders",
        description: "Strategic implementation of AI in business. ROI analysis, ethics, and team management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        level: "All Levels",
        duration: "4 Weeks",
        students: "5k+"
    },
    {
        title: "Reinforcement Learning",
        description: "Train agents to make decisions. Covers Q-Learning, Policy Gradients, and Deep RL.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
        level: "Advanced",
        duration: "16 Weeks",
        students: "800+"
    }
];

const Courses = () => {
    const navigate = useNavigate();

    return (
        <section id="courses" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Explore Our Courses
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Choose from our wide range of specialized AI courses designed for every skill level.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 border border-white/5 gpu-accelerated"
                            style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
                                <img
                                    src={course.image}
                                    alt={`${course.title} - ${course.level} AI course | Learn ${course.description.split('.')[0]}`}
                                    loading="lazy"
                                    width="400"
                                    height="192"
                                    className="w-full h-full object-cover gpu-accelerated"
                                    style={{
                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        willChange: 'transform'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                                        {course.level}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary" style={{ transition: 'color 0.3s ease' }}>
                                    {course.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        {course.students}
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/login')}
                                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary font-semibold text-sm gpu-accelerated"
                                    style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;

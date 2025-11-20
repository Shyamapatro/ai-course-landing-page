import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -60, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-500/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-8 backdrop-blur-md shadow-lg shadow-accent/10"
                    >
                        🚀 Master the Future of AI
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
                        Unlock Your Potential with <br />
                        <span className="text-gradient-premium drop-shadow-lg">
                            Advanced AI Learning
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join thousands of developers and engineers mastering Generative AI, LLMs, and Neural Networks. Build the future, today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="shine-effect w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-bold text-lg shadow-xl shadow-primary/25 transition-all"
                        >
                            Start Learning Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg backdrop-blur-sm transition-all hover:border-white/30"
                        >
                            View Curriculum
                        </motion.button>
                    </div>
                </motion.div>

                {/* Stats or Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/10 pt-12"
                >
                    {[
                        { label: "Students", value: "10k+" },
                        { label: "Modules", value: "50+" },
                        { label: "Content", value: "100h" },
                        { label: "Rating", value: "4.9/5" }
                    ].map((stat, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

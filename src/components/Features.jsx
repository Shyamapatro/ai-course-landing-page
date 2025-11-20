import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Generative AI Mastery",
        description: "Learn to build and deploy state-of-the-art generative models using the latest frameworks.",
        icon: "🧠"
    },
    {
        title: "LLM Architecture",
        description: "Deep dive into Transformers, Attention mechanisms, and fine-tuning Large Language Models.",
        icon: "🤖"
    },
    {
        title: "Real-world Projects",
        description: "Build 10+ production-ready applications including chatbots, image generators, and agents.",
        icon: "💻"
    },
    {
        title: "Industry Expert Mentors",
        description: "Get guidance from engineers working at top AI companies like Google, OpenAI, and Meta.",
        icon: "👨‍🏫"
    },
    {
        title: "Career Support",
        description: "Resume reviews, mock interviews, and direct referrals to our hiring partner network.",
        icon: "🚀"
    },
    {
        title: "Lifetime Access",
        description: "Pay once and get lifetime access to all current and future course updates.",
        icon: "♾️"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
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
                        Why Choose This Course?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Comprehensive curriculum designed to take you from beginner to expert in Artificial Intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

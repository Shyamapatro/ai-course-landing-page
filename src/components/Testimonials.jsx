import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Data Scientist at Google",
        image: "https://i.pravatar.cc/150?u=sarah",
        quote: "This course bridged the gap between theory and production. I'm now deploying LLMs with confidence."
    },
    {
        name: "Michael Ross",
        role: "Software Engineer at Meta",
        image: "https://i.pravatar.cc/150?u=michael",
        quote: "The best investment I've made for my career. The section on RAG systems was a game changer."
    },
    {
        name: "Elena Rodriguez",
        role: "AI Researcher",
        image: "https://i.pravatar.cc/150?u=elena",
        quote: "Finally, a course that explains the 'why' behind the 'how'. Highly recommended for deep learners."
    },
    {
        name: "David Kim",
        role: "Startup Founder",
        image: "https://i.pravatar.cc/150?u=david",
        quote: "We built our MVP using the techniques from Module 5. This course is pure gold for entrepreneurs."
    },
    {
        name: "Priya Patel",
        role: "ML Engineer",
        image: "https://i.pravatar.cc/150?u=priya",
        quote: "Clear, concise, and cutting-edge. The instructors really know their stuff."
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Trusted by Industry Leaders
                </motion.h2>
                <p className="text-gray-400">
                    Join a community of forward-thinking developers.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] bg-white/5 border border-white/10 p-6 rounded-2xl flex-shrink-0"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm italic text-left">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Single Course",
        price: "1,000",
        description: "Master a specific skill with one dedicated course.",
        features: [
            "Access to 1 Specific Course",
            "Community Support",
            "Course Projects",
            "Certificate of Completion",
            "Lifetime Access to Course"
        ]
    },
    {
        name: "All Access",
        price: "10,000",
        popular: true,
        description: "Unlock the entire library and become an AI expert.",
        features: [
            "Access to All Current Courses",
            "Access to Future Courses",
            "Priority Support",
            "10+ Real-world Projects",
            "Career Mentorship",
            "Exclusive Workshops"
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[60%] left-[-10%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
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
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Invest in your future with a plan that suits your learning goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-10 rounded-3xl border transition-all duration-300 ${plan.popular
                                ? 'glass border-primary shadow-2xl shadow-primary/20'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
                                        Best Value
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                            <p className="text-gray-400 text-base mb-8 min-h-[3rem]">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-5xl font-bold text-white">
                                    ₹{plan.price}
                                </span>
                                <span className="text-gray-400 ml-2 text-lg">/ subscription</span>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold mb-10 transition-all text-lg ${plan.popular
                                ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25'
                                : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                }`}>
                                Choose {plan.name}
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-base text-gray-300">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'}`}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {feature}
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

export default Pricing;

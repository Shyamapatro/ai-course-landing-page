import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
    {
        title: "Module 1: Foundations of AI & Python",
        lessons: [
            "Introduction to Artificial Intelligence",
            "Python for Data Science (NumPy, Pandas)",
            "Data Visualization with Matplotlib & Seaborn",
            "Linear Algebra & Calculus for ML"
        ]
    },
    {
        title: "Module 2: Machine Learning Algorithms",
        lessons: [
            "Supervised vs Unsupervised Learning",
            "Linear & Logistic Regression",
            "Decision Trees & Random Forests",
            "Model Evaluation Metrics"
        ]
    },
    {
        title: "Module 3: Deep Learning & Neural Networks",
        lessons: [
            "Introduction to Neural Networks",
            "Backpropagation & Gradient Descent",
            "Building CNNs for Image Recognition",
            "RNNs and LSTMs for Sequence Data"
        ]
    },
    {
        title: "Module 4: Natural Language Processing (NLP)",
        lessons: [
            "Text Preprocessing & Tokenization",
            "Word Embeddings (Word2Vec, GloVe)",
            "Transformers Architecture (Attention is All You Need)",
            "Fine-tuning BERT & GPT models"
        ]
    },
    {
        title: "Module 5: Generative AI & LLMs",
        lessons: [
            "Understanding Large Language Models",
            "Prompt Engineering Strategies",
            "Building RAG (Retrieval Augmented Generation) Systems",
            "Deploying AI Agents with LangChain"
        ]
    }
];

const Curriculum = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <section id="curriculum" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[40%] left-[-20%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Course Curriculum
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        A structured path to mastery, covering everything from basics to advanced generative AI.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)] hidden md:block z-20" />

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <div
                                        className={`glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 ${expandedIndex === index ? 'ring-1 ring-primary/50 shadow-lg shadow-primary/10' : 'hover:bg-white/5'}`}
                                    >
                                        <button
                                            onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                                            className="w-full px-8 py-6 flex items-center justify-between text-left"
                                        >
                                            <div>
                                                <span className="text-sm font-medium text-accent mb-1 block">Module {index + 1}</span>
                                                <h3 className="text-xl font-bold text-white">{module.title.split(': ')[1] || module.title}</h3>
                                            </div>
                                            <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''} ml-4 flex-shrink-0`}>
                                                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>

                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-8 pb-8 pt-2 border-t border-white/5">
                                                        <ul className="space-y-3">
                                                            {module.lessons.map((lesson, lessonIndex) => (
                                                                <li key={lessonIndex} className="flex items-start text-gray-300">
                                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                    <span className="leading-relaxed">{lesson}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Empty space for the other side of timeline */}
                                <div className="hidden md:block w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;

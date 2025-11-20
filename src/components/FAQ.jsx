import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState('');

    const MAX_QUESTION_LENGTH = 200;

    // Predefined FAQ database with smart matching
    const faqDatabase = useMemo(() => ({
        'course duration': {
            answer: 'Our comprehensive AI course is designed to be completed in 12-16 weeks with 8-10 hours of study per week. However, you get lifetime access, so you can learn at your own pace!',
            keywords: ['duration', 'long', 'time', 'weeks', 'months', 'how long', 'take']
        },
        'prerequisites': {
            answer: 'Basic Python programming knowledge is recommended. We cover everything from fundamentals to advanced topics, so beginners with programming basics can succeed. No prior AI/ML experience required!',
            keywords: ['prerequisites', 'requirements', 'need to know', 'background', 'beginner', 'start', 'experience']
        },
        'certification': {
            answer: 'Yes! Upon completion, you\'ll receive an industry-recognized certificate that you can add to your LinkedIn profile and resume. We also provide project completion certificates for each major project.',
            keywords: ['certificate', 'certification', 'credential', 'diploma', 'degree', 'certified']
        },
        'pricing': {
            answer: 'We offer flexible pricing plans starting from ₹9,999 for the complete course. This includes lifetime access, all updates, projects, and certification. We also have EMI options and early-bird discounts!',
            keywords: ['price', 'cost', 'fee', 'payment', 'expensive', 'cheap', 'money', 'pay', 'afford']
        },
        'job assistance': {
            answer: 'Absolutely! We provide dedicated career support including resume reviews, mock interviews, portfolio building guidance, and access to our hiring partner network with 200+ companies.',
            keywords: ['job', 'placement', 'career', 'hiring', 'employment', 'work', 'interview']
        },
        'projects': {
            answer: 'You\'ll build 10+ real-world AI projects including a ChatGPT clone, image generation app, recommendation system, and custom LLM fine-tuning. All projects are portfolio-ready!',
            keywords: ['project', 'hands-on', 'practical', 'build', 'create', 'portfolio', 'what will']
        },
        'instructors': {
            answer: 'Our courses are taught by industry experts with 10+ years of experience at top tech companies like Google, Microsoft, and leading AI startups. All instructors are actively working in AI/ML.',
            keywords: ['instructor', 'teacher', 'mentor', 'who teaches', 'faculty', 'expert']
        },
        'support': {
            answer: 'You get 24/7 community support via Discord, weekly live Q&A sessions with instructors, and dedicated mentorship. Average response time is under 2 hours!',
            keywords: ['support', 'help', 'doubt', 'question', 'stuck', 'assistance', 'mentor']
        },
        'refund': {
            answer: 'We offer a 30-day money-back guarantee, no questions asked. If you\'re not satisfied with the course within the first 30 days, you\'ll get a full refund.',
            keywords: ['refund', 'money back', 'guarantee', 'return', 'cancel', 'satisfied']
        },
        'updates': {
            answer: 'The course is continuously updated with the latest AI developments. All updates are free for lifetime. We add new modules every quarter to keep pace with rapidly evolving AI technology.',
            keywords: ['update', 'latest', 'current', 'new', 'fresh', 'outdated', 'content']
        },
        'tools': {
            answer: 'We cover industry-standard tools including Python, TensorFlow, PyTorch, Hugging Face, LangChain, OpenAI API, and more. All tools and resources are provided free of charge.',
            keywords: ['tools', 'software', 'technology', 'framework', 'library', 'platform', 'use']
        },
        'batch': {
            answer: 'New batches start every week! The next batch begins in a few days. Each batch is limited to 50 students to ensure personalized attention and quality learning experience.',
            keywords: ['batch', 'start', 'begin', 'when', 'schedule', 'timing', 'next']
        }
    }), []);

    // Sanitize input
    const sanitizeInput = useCallback((input) => {
        return input.trim().replace(/[<>]/g, '');
    }, []);

    // Smart matching algorithm
    const findBestMatch = useCallback((userQuestion) => {
        const lowerQuestion = userQuestion.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        Object.entries(faqDatabase).forEach(([key, data]) => {
            let score = 0;
            data.keywords.forEach(keyword => {
                if (lowerQuestion.includes(keyword)) {
                    score += keyword.length;
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = data.answer;
            }
        });

        return bestMatch || "Great question! Our course covers a wide range of AI topics. For specific details, please contact our support team at support@aicourse.com or chat with us directly. We're here to help! 🚀";
    }, [faqDatabase]);

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        if (value.length <= MAX_QUESTION_LENGTH) {
            setQuestion(value);
            setError('');
        }
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        const sanitizedQuestion = sanitizeInput(question);

        if (!sanitizedQuestion) {
            setError('Please enter a question');
            return;
        }

        if (sanitizedQuestion.length < 3) {
            setError('Question is too short. Please be more specific.');
            return;
        }

        setIsLoading(true);
        setHasSearched(true);
        setAnswer('');
        setError('');

        try {
            // Simulate AI processing
            await new Promise(resolve => setTimeout(resolve, 1200));

            const response = findBestMatch(sanitizedQuestion);

            // Typewriter effect
            let currentText = '';
            const words = response.split(' ');

            for (let i = 0; i < words.length; i++) {
                currentText += (i > 0 ? ' ' : '') + words[i];
                setAnswer(currentText);
                await new Promise(resolve => setTimeout(resolve, 25));
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestedQuestion = useCallback((q) => {
        setQuestion(q);
        setError('');
    }, []);

    const handleAskAnother = useCallback(() => {
        setQuestion('');
        setAnswer('');
        setHasSearched(false);
        setError('');
    }, []);

    const suggestedQuestions = [
        "How long is the course?",
        "Do I need prior experience?",
        "Will I get a certificate?",
        "What projects will I build?"
    ];

    return (
        <section id="faq" className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-4 backdrop-blur-md"
                    >
                        🤖 AI-Powered FAQ
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Got Questions? <span className="text-gradient-premium">Ask Away!</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Our AI assistant will instantly answer your course-related questions
                    </p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-8"
                >
                    <form onSubmit={handleSearch} className="relative">
                        <div className={`glass-card p-2 rounded-2xl border backdrop-blur-xl bg-white/5 shadow-2xl transition-all ${error ? 'border-red-500/50' : 'border-white/10'
                            }`}>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={question}
                                        onChange={handleInputChange}
                                        placeholder="Ask anything about the course..."
                                        className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                                        disabled={isLoading}
                                        maxLength={MAX_QUESTION_LENGTH}
                                        aria-label="Ask a question"
                                        autoComplete="off"
                                    />
                                    {question && (
                                        <div className="absolute right-4 bottom-2 text-xs text-gray-600">
                                            {question.length}/{MAX_QUESTION_LENGTH}
                                        </div>
                                    )}
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                    disabled={isLoading || !question.trim()}
                                    className="px-6 sm:px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2 justify-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Thinking...
                                        </span>
                                    ) : (
                                        'Ask AI'
                                    )}
                                </motion.button>
                            </div>
                        </div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-2 text-red-400 text-sm px-2"
                                >
                                    ⚠️ {error}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    {/* Suggested Questions */}
                    {!hasSearched && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-4 flex flex-wrap gap-2 justify-center items-center"
                        >
                            <span className="text-gray-500 text-sm">Try asking:</span>
                            {suggestedQuestions.map((q, index) => (
                                <motion.button
                                    key={index}
                                    type="button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSuggestedQuestion(q)}
                                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-accent/50 transition-all"
                                >
                                    {q}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </motion.div>

                {/* Answer Box */}
                <AnimatePresence mode="wait">
                    {(isLoading || answer) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl"
                        >
                            <div className="flex items-start gap-4">
                                {/* AI Avatar */}
                                <motion.div
                                    animate={{
                                        boxShadow: isLoading
                                            ? ['0 0 20px rgba(139, 92, 246, 0.5)', '0 0 40px rgba(139, 92, 246, 0.8)', '0 0 20px rgba(139, 92, 246, 0.5)']
                                            : '0 0 20px rgba(139, 92, 246, 0.5)'
                                    }}
                                    transition={{ duration: 1.5, repeat: isLoading ? Infinity : 0 }}
                                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-2xl"
                                >
                                    🤖
                                </motion.div>

                                {/* Answer Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        AI Assistant
                                        {!isLoading && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                            />
                                        )}
                                    </h3>
                                    {isLoading ? (
                                        <div className="space-y-2">
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="h-4 bg-white/10 rounded w-3/4"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                                className="h-4 bg-white/10 rounded w-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                                className="h-4 bg-white/10 rounded w-2/3"
                                            />
                                        </div>
                                    ) : (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-gray-300 leading-relaxed"
                                        >
                                            {answer}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            {!isLoading && answer && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                                >
                                    <span className="text-sm text-gray-500">Was this helpful?</span>
                                    <div className="flex gap-2 flex-wrap justify-center">
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-green-500/50 hover:text-green-400 transition-all"
                                        >
                                            👍 Yes
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-red-500/50 hover:text-red-400 transition-all"
                                        >
                                            👎 No
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleAskAnother}
                                            className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm text-accent hover:bg-accent/20 transition-all"
                                        >
                                            Ask Another
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center text-sm text-gray-500"
                >
                    <p>Still have questions? <a href="#" className="text-accent hover:underline">Chat with our support team</a></p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

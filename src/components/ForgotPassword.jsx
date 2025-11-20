import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid');
            return;
        }

        setIsLoading(true);
        setError('');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Resetting password for:', email);
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
            </div>

            {/* Forgot Password Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 w-full max-w-md p-6 md:p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reset Password</h2>
                    <p className="text-sm md:text-base text-gray-300">Enter your email to receive reset instructions</p>
                </div>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError('');
                                }}
                                className={`w-full px-4 py-3 bg-black/20 border rounded-lg focus:ring-2 focus:outline-none text-white placeholder-gray-500 transition-all ${error
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-white/10 focus:ring-purple-500 focus:border-transparent'
                                    }`}
                                placeholder="you@example.com"
                            />
                            {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Send Reset Link'
                            )}
                        </motion.button>
                    </form>
                ) : (
                    <div className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Check your email</h3>
                        <p className="text-gray-300 mb-6">We've sent password reset instructions to {email}</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                            Try another email
                        </button>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-center text-sm text-gray-400">
                        Remember your password? <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors focus:outline-none focus:underline">Sign in</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;

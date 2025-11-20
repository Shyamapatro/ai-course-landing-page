import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login, loginWithGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getFirebaseErrorMessage = (errorCode) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'No account found with this email';
            case 'auth/wrong-password':
                return 'Incorrect password';
            case 'auth/invalid-email':
                return 'Invalid email address';
            case 'auth/user-disabled':
                return 'This account has been disabled';
            case 'auth/too-many-requests':
                return 'Too many failed attempts. Please try again later';
            case 'auth/invalid-credential':
                return 'Invalid email or password';
            case 'auth/popup-closed-by-user':
                return 'Sign-in popup was closed';
            case 'auth/cancelled-popup-request':
                return 'Sign-in cancelled';
            default:
                return `Error: ${errorCode}`;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                await login(email, password);
                navigate('/');
            } catch (error) {
                console.error('Login error:', error);
                setErrors({
                    general: getFirebaseErrorMessage(error.code)
                });
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            console.error('Google sign-in error:', error);
            setErrors({
                general: getFirebaseErrorMessage(error.code)
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
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

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 w-full max-w-md p-6 md:p-8 glass rounded-2xl shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-sm md:text-base text-gray-300">Sign in to continue your learning journey</p>
                    {errors.general && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                            <p className="text-sm text-red-400">{errors.general}</p>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            className={`w-full px-4 py-3 bg-black/20 border rounded-lg focus:ring-2 focus:outline-none text-white placeholder-gray-500 transition-all ${errors.email
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-white/10 focus:ring-primary/50 focus:border-primary/50 hover:border-white/20'
                                }`}
                            placeholder="you@example.com"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (errors.password) setErrors({ ...errors, password: '' });
                            }}
                            className={`w-full px-4 py-3 bg-black/20 border rounded-lg focus:ring-2 focus:outline-none text-white placeholder-gray-500 transition-all ${errors.password
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-white/10 focus:ring-primary/50 focus:border-primary/50 hover:border-white/20'
                                }`}
                            placeholder="••••••••"
                            aria-invalid={errors.password ? "true" : "false"}
                            aria-describedby={errors.password ? "password-error" : undefined}
                        />
                        {errors.password && (
                            <p id="password-error" className="mt-1 text-sm text-red-400" role="alert">{errors.password}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-300 cursor-pointer group">
                            <input type="checkbox" className="mr-2 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent" />
                            <span className="group-hover:text-white transition-colors">Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-primary hover:text-purple-300 transition-colors focus:outline-none focus:underline">Forgot password?</Link>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shine-effect"
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-center text-sm text-gray-400 mb-4">Or continue with</p>
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        aria-label="Sign in with Google"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                        </svg>
                        <span className="text-white font-medium">Continue with Google</span>
                    </button>
                    <p className="text-center mt-6 text-sm text-gray-400">
                        Don't have an account? <Link to="/signup" className="text-primary hover:text-purple-300 transition-colors focus:outline-none focus:underline">Sign up</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

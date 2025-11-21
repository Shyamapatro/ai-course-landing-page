import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate, autoResetDays = 7 }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // If targetDate is provided, use it; otherwise auto-reset every X days
            let target;
            if (targetDate) {
                target = new Date(targetDate);
            } else {
                // Auto-reset: calculate next batch date based on current date
                const now = new Date();
                const lastReset = localStorage.getItem('batchCountdownReset');
                
                if (lastReset) {
                    target = new Date(lastReset);
                    // If the target has passed, set a new one
                    if (now > target) {
                        target = new Date(now.getTime() + autoResetDays * 24 * 60 * 60 * 1000);
                        localStorage.setItem('batchCountdownReset', target.toISOString());
                    }
                } else {
                    // First time: set target to X days from now
                    target = new Date(now.getTime() + autoResetDays * 24 * 60 * 60 * 1000);
                    localStorage.setItem('batchCountdownReset', target.toISOString());
                }
            }

            const now = new Date();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // Reset when countdown reaches zero
                if (!targetDate) {
                    const newTarget = new Date(now.getTime() + autoResetDays * 24 * 60 * 60 * 1000);
                    localStorage.setItem('batchCountdownReset', newTarget.toISOString());
                }
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate, autoResetDays]);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="my-12"
        >
            <div className="text-center mb-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                >
                    ⏰ Next Batch Starts In
                </motion.h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Limited seats available - Enroll now!
                </p>
            </div>

            <div className="flex justify-center items-center gap-3 md:gap-6">
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group"
                    >
                        <div className="glass-card p-4 md:p-6 rounded-2xl min-w-[70px] md:min-w-[100px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl">
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                            
                            <motion.div
                                key={unit.value}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-3xl md:text-5xl font-extrabold text-gradient-premium mb-2"
                            >
                                {String(unit.value).padStart(2, '0')}
                            </motion.div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-medium">
                                {unit.label}
                            </div>
                        </div>

                        {/* Separator (except for last item) */}
                        {index < timeUnits.length - 1 && (
                            <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 text-2xl md:text-3xl text-accent/50 font-bold">
                                :
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Urgency indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 text-center"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Only a few seats left!
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CountdownTimer;

import React from 'react';

const Logo = ({ className = "h-10 w-auto" }) => {
    return (
        <svg 
            viewBox="0 0 200 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Icon - Stylized V with AI neural network nodes */}
            <g>
                {/* Main V shape with gradient */}
                <defs>
                    <linearGradient id="veerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
                
                {/* Bold V */}
                <path 
                    d="M 15 10 L 30 45 L 45 10" 
                    stroke="url(#veerGradient)" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                />
                
                {/* Neural network nodes */}
                <circle cx="15" cy="10" r="3" fill="#8B5CF6" />
                <circle cx="30" cy="45" r="3" fill="#3B82F6" />
                <circle cx="45" cy="10" r="3" fill="#8B5CF6" />
                
                {/* Connecting lines for AI feel */}
                <line x1="15" y1="10" x2="30" y2="25" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="45" y1="10" x2="30" y2="25" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <circle cx="30" cy="25" r="2" fill="#8B5CF6" opacity="0.5" />
            </g>

            {/* Text - VeerAI */}
            <text 
                x="60" 
                y="38" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                fontSize="28" 
                fontWeight="700" 
                fill="url(#veerGradient)"
            >
                Veer
            </text>
            <text 
                x="130" 
                y="38" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                fontSize="28" 
                fontWeight="700" 
                fill="#3B82F6"
            >
                AI
            </text>
        </svg>
    );
};

export default Logo;

import React from 'react';

export const SkillsMarquee = ({ skills, direction = 'left', speed = '40s' }) => {
    return (
        <div className="relative flex overflow-hidden my-4 md:my-8 py-4">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 w-24 md:w-48 h-full z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#2C2D4F] via-[#2C2D4F]/80 to-transparent"
                />
            </div>

            <div
                className={`flex ${
                    direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'
                } gap-4 md:gap-8`}
                style={{ animationDuration: speed }}
            >
                {[...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 bg-[#421550]/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full
                         border border-white hover:border-[#8287f5] transition-all duration-300
                         hover:scale-110 hover:bg-[#421550]/20 hover:shadow-lg
                         transform-gpu"
                    >
                        <span className={skill.color}>{skill.icon}</span>
                        <span className="text-white text-sm md:text-base font-medium whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 w-24 md:w-48 h-full z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-l from-[#2C2D4F] via-[#2C2D4F]/80 to-transparent"
                />
            </div>
        </div>
    );
};

"use client";

import { useState } from "react";
import { Download, Puzzle, Target, Zap } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Live Resume Preview",
        description:
            "See your resume update in real time as you type. No more guess-and-check.",
        highlight: "Instant feedback while editing",
    },
    {
        icon: Target,
        title: "ATS Optimized",
        description:
            "Templates designed to pass Applicant Tracking Systems at top companies.",
        highlight: "Designed for real hiring systems",
    },
    {
        icon: Puzzle,
        title: "Section Builder",
        description:
            "Drag, add, and reorder sections with our intuitive visual editor.",
        highlight: "Total layout control",
    },
    {
        icon: Download,
        title: "Instant PDF Download",
        description:
            "Export a pixel-perfect PDF ready to send to any recruiter.",
        highlight: "One-click professional export",
    },
];

export default function Features() {
    const [active, setActive] = useState(0);
    const current = features[active];
    const Icon = current.icon;

    return (
        <section className="py-10 md:py-20 px-6 bg-blue-500 relative overflow-hidden">

            {/* subtle glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/10 blur-[140px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <p className="text-xs font-semibold text-white/70 tracking-widest uppercase mb-3">
                        Features
                    </p>

                    <h2 className="text-4xl md:text-[2.5rem] font-bold text-white mb-5">
                        Built to actually get you hired
                    </h2>

                    <p className="text-white/70 max-w-xl mx-auto">
                        Not just tools. A system designed to improve your chances at every step.
                    </p>
                </div>

                {/* MAIN */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: LIST */}
                    <div className="flex flex-col gap-3">

                        {features.map((f, i) => {
                            const ItemIcon = f.icon;
                            const isActive = i === active;

                            return (
                                <div
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`cursor-pointer p-5 rounded-xl border-white/10 shadow-md border backdrop-blur-md transition-all duration-300 ${isActive
                                            ? "border-white bg-white/10"
                                            : "hover:outline-1"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">

                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive
                                                    ? "bg-white text-blue-600"
                                                    : "bg-white/10"
                                                }`}
                                        >
                                            <ItemIcon
                                                size={18}
                                                className={isActive ? "text-blue-600" : "text-white"}
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className={`font-medium ${isActive
                                                        ? "text-white"
                                                        : "text-white/80"
                                                    }`}
                                            >
                                                {f.title}
                                            </p>
                                            <p className="text-xs text-white/60">
                                                {f.highlight}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    {/* RIGHT: DISPLAY */}
                    <div className="relative">

                        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-10 shadow-xl">

                            {/* icon */}
                            <div className="w-14 h-14 rounded-xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-md">
                                <Icon size={24} />
                            </div>

                            {/* title */}
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {current.title}
                            </h3>

                            {/* desc */}
                            <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                                {current.description}
                            </p>

                            {/* fake visual */}
                            <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-3">
                                <div className="h-2 bg-white/30 rounded w-2/3" />
                                <div className="h-2 bg-white rounded w-1/2" />
                                <div className="h-2 bg-white/40 rounded w-3/4" />
                                <div className="h-2 bg-white/30 rounded w-1/3" />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
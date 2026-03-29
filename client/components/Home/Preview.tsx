"use client";

import { demoResumeData } from "@/utils/demoData";
import { ResumeTemplate } from "../resume/ResumeTemplate";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Preview() {
    return (
        <section
            id="preview"
            className="pt-10 md:pt-0 md:py-24 px-6 bg-blue-500 text-white relative overflow-hidden"
        >

            <div className="relative z-10 flex flex-col w-full md:flex-row items-center">

                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2 md:pl-10">

                    {/* heading */}
                    <div>
                        <p className="text-xs font-semibold text-white/70 tracking-widest uppercase mb-3">
                            Preview
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                            Designed to get you{" "}
                            <span>noticed instantly</span>
                        </h2>

                        <p className="text-white/70 text-base max-w-md">
                            Built with recruiters and ATS systems in mind, this layout ensures
                            clarity, structure, and impact in every section.
                        </p>
                    </div>

                    {/* features */}
                    <div className="space-y-4">
                        {[
                            "ATS optimized formatting",
                            "Clean typography and spacing",
                            "Structured for quick scanning",
                            "Modern and minimal design",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-white/80 mt-0.5" />
                                <p className="text-white/80 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* mini cards */}
                    <div className="flex gap-2 mt-10">
                        <div className="p-4 w-52 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                            <p className="text-lg font-bold">2x</p>
                            <p className="text-xs text-white/70">More readability</p>
                        </div>

                        <div className="p-4 w-52 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                            <p className="text-lg font-bold">ATS</p>
                            <p className="text-xs text-white/70">Friendly</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div className="p-4 w-52 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                            <p className="text-lg font-bold">2x</p>
                            <p className="text-xs text-white/70">More readability</p>
                        </div>

                        <div className="p-4 w-52 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                            <p className="text-lg font-bold">ATS</p>
                            <p className="text-xs text-white/70">Friendly</p>
                        </div>
                    </div>

                    <button className="bg-white w-full md:w-fit mt-10 text-blue-500 px-6 py-3 rounded-xl font-medium flex items-center gap-2 group shadow-lg hover:bg-white/90 transition">
                        Try this template
                        <ArrowRight className="h-4 group-hover:translate-x-1 transition" />
                    </button>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center w-full md:w-1/2">

                    {/* glow */}
                    <div className="absolute w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full" />

                    {/* resume card */}
                    <div className="scale-[0.75] -my-[25%] rounded-2xl overflow-clip">
                        <ResumeTemplate data={demoResumeData} />
                    </div>

                </div>

            </div>
        </section>
    );
}
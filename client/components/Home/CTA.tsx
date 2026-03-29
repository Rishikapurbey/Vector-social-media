"use client";

import Link from "next/link";
import { ResumeTemplate } from "../resume/ResumeTemplate";
import { demoResumeData } from "@/utils/demoData";

export default function CTA() {
    return (
        <section id="pricing" className="py-14 md:py-32 px-6 bg-white overflow-hidden">

            <div className="max-w-6xl mx-auto relative">

                {/* BIG FADED TEXT BACKDROP */}

                <div className="relative grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE (OFFSET TEXT) */}
                    <div className="md:pl-10">

                        <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-6">
                            Final step
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                            Stop tweaking your resume.
                            <br />
                            <span className="text-blue-500">
                                Start getting replies.
                            </span>
                        </h2>

                        <p className="text-neutral-500 max-w-md mb-10">
                            Build, analyze, and refine your resume with a system designed to actually get results — not just look good.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Link
                                href="/builder"
                                className="btn-primary w-full md:w-fit text-white rounded-xl font-medium text-base transition-all shadow-lg"
                            >
                                Create Resume →
                            </Link>

                            <Link
                                href="/analyze"
                                className="text-neutral-700 w-full md:w-fit font-medium btn-secondary transition-all"
                            >
                                Analyze instead
                            </Link>
                        </div>

                    </div>
                    <div>
                        <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-card">

                            {/* FAKE BROWSER BAR */}
                            <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-300/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-300/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-300/70" />
                                </div>
                                <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-400">
                                    <span>🔒</span> vector.app/builder
                                </div>
                            </div>

                            {/* SPLIT PREVIEW */}
                            <div className="grid grid-cols-5 h-64 md:h-80">

                                {/* LEFT FORM */}
                                <div className="col-span-2 border-r border-neutral-100 p-4 overflow-hidden bg-neutral-50/50">
                                    <div className="space-y-2">
                                        <div className="h-2 bg-neutral-200 rounded-full w-24" />
                                        {[100, 80, 90, 70].map((w, i) => (
                                            <div
                                                key={i}
                                                className="h-8 bg-white rounded-lg border border-neutral-100 shadow-sm"
                                                style={{ width: `${w}%` }}
                                            />
                                        ))}
                                        <div className="h-2 bg-neutral-200 rounded-full w-20 mt-3" />
                                        {[100, 60].map((w, i) => (
                                            <div
                                                key={i}
                                                className="h-8 bg-white rounded-lg border border-neutral-100 shadow-sm"
                                                style={{ width: `${w}%` }}
                                            />
                                        ))}
                                        <div className="h-16 bg-white rounded-lg border border-neutral-100 shadow-sm w-full" />
                                    </div>
                                </div>

                                {/* RIGHT RESUME */}
                                <div className="col-span-3 p-4 overflow-hidden">
                                    <div className="scale-[0.45] origin-top-left" style={{ width: "222%", transformOrigin: "top left" }}>
                                        <ResumeTemplate data={demoResumeData} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
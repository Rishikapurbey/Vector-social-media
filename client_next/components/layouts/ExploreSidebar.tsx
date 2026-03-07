"use client";

import { Button } from "../ui/button";
import { Compass, Heart, Lightbulb, Shuffle, TrendingUp, Trophy, UserPlus, X } from "lucide-react";
import { useState } from "react";

export default function ExploreSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-full bg-blue-500 text-white shadow-lg" aria-label="Open follow suggestions">
                <UserPlus />
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)}/>
            )}

            <div className={`h-screen md:min-h-screen text-white md:h-fit w-fit p-5 backdrop-blur-3xl fixed lg:static top-0 right-0 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}>
                <button onClick={() => setOpen(false)} className="absolute top-4 right-4 lg:hidden" aria-label="Close">
                    <X />
                </button>

                <div className="p-2 pb-3 mb-3 border-b">
                <p className="flex items-center gap-1 font-semibold"> <Compass className="h-5 text-blue-500"/> Explore topics</p>
                <div className="flex justify-between mt-5">
                    <div className="box h-20 border w-[47%] rounded-md flex items-center justify-center gap-1 bg-black/5 dark:bg-white/5 transition-all duration-300 dark:hover:scale-102 dark:hover:border-white cursor-pointer hover:shadow-md">
                        <Lightbulb className="h-5"/>
                        <p className="text-[0.9rem]">Science</p>
                    </div>
                    <div className="box h-20 border w-[47%] rounded-md flex items-center justify-center gap-1 bg-black/5 dark:bg-white/5 transition-all duration-300 dark:hover:scale-102 dark:hover:border-white cursor-pointer hover:shadow-md">
                        <Trophy className="h-4"/>
                        <p className="text-[0.9rem]">Sports</p>
                    </div>
                </div>
                <div className="h-25 border w-full rounded-md mt-3.5 flex items-center justify-center gap-1 bg-black/5 dark:bg-white/5 transition-all duration-300 dark:hover:scale-102 dark:hover:border-white cursor-pointer hover:shadow-md">
                    <Shuffle className="h-5 opacity-65"/>
                    <p>Random</p>
                </div>
            </div>

                <div>
                    <p className="flex items-center gap-2 font-semibold"> <TrendingUp className="h-5 text-blue-500"/> Trending topics</p>
                    <div className="box mt-5 flex">
                        <div className="h-12 w-12 bg-black/5 rounded-md mr-4 overflow-clip"><img src="/cse.jpg" alt="" className="h-full w-full object-cover"/></div>
                        <div className="w-40 text-[0.95rem]">Artificial Intelligence and Machine Learning</div>
                        <p className="flex items-center gap-0.5 text-[0.8rem] ml-1"> <Heart className="text-blue-400 h-full mt-auto" fill="currentColor"/> 120</p>
                    </div>
                    <div className="box my-5 flex">
                        <div className="h-12 w-12 bg-black/5 rounded-md mr-4 overflow-clip"><img src="/political.avif" alt="" className="h-full w-full object-cover"/></div>
                        <div className="w-40 text-[0.95rem]">Political instability over the world</div>
                        <p className="flex items-center gap-0.5 text-[0.8rem] ml-1"> <Heart className="text-blue-400 h-full mt-auto" fill="currentColor"/> 356</p>
                    </div>
                    <div className="box my-5 flex">
                        <div className="h-12 w-12 bg-black/5 rounded-md mr-4 overflow-clip"><img src="/tech.png" alt="" className="h-full w-full object-cover object-right  "/></div>
                        <div className="w-40 text-[0.95rem]">Rising prices of RAM over the world</div>
                        <p className="flex items-center gap-0.5 text-[0.8rem] ml-1"> <Heart className="text-blue-400 h-full mt-auto" fill="currentColor"/> 142</p>
                    </div>
                    <div className="box mt-5 flex">
                        <div className="h-12 w-12 bg-black/5 rounded-md mr-4 overflow-clip"><img src="/kohli2.jpg" alt="" className="h-full w-full object-cover"/></div>
                        <div className="w-40 text-[0.95rem]">Virat Kohli back at number 1 spot in ODIs</div>
                        <p className="flex items-center gap-0.5 text-[0.8rem] ml-1"> <Heart className="text-blue-400 h-full mt-auto" fill="currentColor"/> 180</p>
                    </div>
                </div>
                <Button className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">See more</Button>
            </div>
        </>
    );
}

"use client";

const steps = [
  {
    step: "01",
    title: "Enter your information",
    description:
      "Fill in your personal details, education, experience, and projects using our clean form editor.",
  },
  {
    step: "02",
    title: "Watch it build live",
    description:
      "Your resume renders instantly as you type. Adjust, refine, and perfect it in real time.",
  },
  {
    step: "03",
    title: "Download your resume",
    description:
      "Unlock your resume with a one-time payment and download a professional PDF instantly.",
  },
];

export default function Working() {
  return (
    <section id="how-it-works" className="py-14 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">
            How it works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5">
            Three steps to your dream job
          </h2>

          <p className="text-neutral-500 max-w-xl mx-auto">
            A simple, structured workflow designed to take you from blank page to job-ready resume.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative flex flex-col items-center gap-20">

          {/* vertical line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-neutral-200" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative w-full flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* CARD */}
              <div className="w-full md:w-[60%] bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

                {/* STEP BADGE */}
                <div className="flex items-center gap-4 mb-3">

                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs tracking-widest">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="font-semibold text-neutral-900">
                    {s.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {s.description}
                </p>

              </div>

              {/* CENTER DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
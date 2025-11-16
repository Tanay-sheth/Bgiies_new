"use client";

import Counter from "./Counter";

export default function ImpactSection() {
  return (
    <section
      className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/impact-bg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center text-white px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-12">
          Our Impact
          <div className="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-lg font-medium">

          <div>
            <p className="text-4xl font-bold">
              <Counter target={31} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Startups Incubated</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={72} />%
            </p>
            <p className="mt-2 text-sm opacity-90">Startups Funded</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={6} /> Cr
            </p>
            <p className="mt-2 text-sm opacity-90">Incubator Grants</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={200} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Jobs Created</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={21} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Collaborations</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={24} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Investors</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={30} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Mentors & Advisors</p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              <Counter target={120} />+
            </p>
            <p className="mt-2 text-sm opacity-90">Outreach & Trainings</p>
          </div>

        </div>
      </div>
    </section>
  );
}

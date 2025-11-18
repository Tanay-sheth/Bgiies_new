"use client";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Ms. Vanita Shankar",
      role: "BGIIES Mentor",
      img: "/mentor.png",
    },
    {
      name: "Mr. Rahul Bahadur",
      role: "BGIIES Mentor",
      img: "/mentor.png",
    },
    {
      name: "Mr. Kiraan Mehta",
      role: "BGIIES Secretary",
      img: "/mentor.png",
    },
    {
      name: "Mr. Mahesh Rao",
      role: "BGIIES Joint Secretary",
      img: "/mentor.png",
    },
    {
      name: "Ms. Sonia Sahni",
      role: "BGIIES Treasurer",
      img: "/mentor.png",
    },
  ];

  return (
    <section className="w-full min-h-[90vh] bg-white py-20 flex flex-col items-center relative">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm">Meet Our</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Mentors
          <div className="w-16 h-[3px] bg-green-500 mt-2 mx-auto"></div>
        </h2>
      </div>

      {/* Green Lines (LEFT + RIGHT) */}
      <div className="absolute top-[280px] left-0 w-full flex justify-between items-center px-10 -z-10">
        
        {/* Left Line */}
        <div className="border-t-2 border-green-500 flex-1 mr-10"></div>

        {/* Invisible gap where mentor cards appear */}
        <div className="w-[900px]"></div>

        {/* Right Line */}
        <div className="border-t-2 border-green-500 flex-1 ml-10"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-10">
        {mentors.map((mentor, index) => (
          <div key={index} className="text-center">
            <div className="border-4 border-green-500 rounded-md overflow-hidden">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="mt-3 font-medium">{mentor.name}</p>
            <p className="text-gray-500 text-sm">{mentor.role}</p>
          </div>
        ))}
      </div>

      {/* More button */}
      <button className="mt-10 px-6 py-2 bg-[#2C1E4A] text-white rounded-full flex items-center gap-2 hover:bg-[#1A1130] transition">
        More →
      </button>
    </section>
  );
}

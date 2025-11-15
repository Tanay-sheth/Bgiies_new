import { FaUser } from 'react-icons/fa';

export default function TestimonialCard({
  quote,
  author,
  bgColor,
  textColor,
  quicksand_bold,
  quicksand_medium,
}) {
  return (
    // Outer container - removed p-6 and adjusted dimensions to be slightly larger
    <div className="bg-white rounded-2xl shadow-xl w-[380px] h-[450px]"> {/* Increased size slightly */}
      {/* Inner colored container - now fills the outer container */}
      <div
        className={`relative ${bgColor} rounded-2xl h-full p-6 flex flex-col justify-center`}
      >
        {/* Avatar */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
          <FaUser className="text-white text-4xl" />
        </div>

        {/* Top Quote Mark */}
        <span
          className={`absolute top-4 left-4 ${textColor} opacity-20 text-7xl font-bold ${quicksand_bold.className}`}
        >
          “
        </span>

        {/* Testimonial Text */}
        <p
          className={`mt-16 ${textColor} ${quicksand_medium.className} text-lg text-center z-10`}
        >
          {quote}
        </p>

        {/* Author */}
        <div className="mt-auto z-10 text-center">
          <p className={`${textColor} ${quicksand_bold.className} text-xl`}>
            {author}
          </p>
          {/* Small line under author */}
          <div
            className={`w-12 h-0.5 ${
              textColor === 'text-white' ? 'bg-white' : 'bg-gray-700'
            } opacity-50 mx-auto mt-2`}
          ></div>
        </div>

        {/* Bottom Quote Mark */}
        <span
          className={`absolute bottom-4 right-4 ${textColor} opacity-20 text-7xl font-bold ${quicksand_bold.className}`}
        >
          ”
        </span>
      </div>
    </div>
  );
}
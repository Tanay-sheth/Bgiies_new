import { BlueBg } from "../components/BlueBg";
import HomeCard from "../components/HomeCard";
import { getSession } from "./lib/session";
import ImpactSection from "../components/ImpactSection";
import FocusPrograms from "../components/FocusPrograms";
import MentorsSection from "../components/MentorsSection";
import InvestorsSection from "../components/InvestorsSection";
import OurPartnersSection from '../components/OurPartnersSection';



export default async function Home() {
  const session = await getSession();
  const userEmail = session?.email;

  // 📌 Arrays of members who get access
  const gbmEmails = ["jeff@gmail.com", "user2@gmail.com", "testuser@bits.com"];
  const ecmEmails = ["jeff@gmail.com", "ecmhead@bits.com"];

  const canSeeGBM = gbmEmails.includes(userEmail);
  const canSeeECM = ecmEmails.includes(userEmail);

  return (
    <div className="text-black">

      <BlueBg />

      <div className="px-10 pb-10 pt-5">

        {/* GBM Section */}
        {(canSeeGBM || canSeeECM) && (
          <>
            <h2 className="text-2xl font-semibold mt-10 mb-6">General Body Members (GBM)</h2>

            <div className="flex justify-center gap-10 flex-wrap">
              <HomeCard icon="globe" title="Moderated Usability Testing" date="21st Oct 2025" />
              <HomeCard icon="target" title="Setting Goals" date="21st Oct 2025" />
              <HomeCard icon="trophy" title="Success Review" date="21st Oct 2025" />
            </div>
          </>
        )}

        {/* ECM Section */}
        {canSeeECM && (
          <>
            <h2 className="text-2xl font-semibold mt-16 mb-6">
              Executive Committee Members (ECM)
            </h2>

            <div className="flex justify-center gap-10 flex-wrap">
              <HomeCard icon="globe" title="Moderated Usability Testing" date="21st Oct 2025" />
              <HomeCard icon="target" title="Setting Goals" date="21st Oct 2025" />
              <HomeCard icon="trophy" title="Success Review" date="21st Oct 2025" />
            </div>
          </>
        )}

        {/* Impact Section */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-10 py-20">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E1F47] mb-20">
            Turning Bold Ideas into <span className="border-b-4 border-yellow-500">Thriving Ventures</span>
          </h2>

          <div className="flex flex-wrap justify-center items-start gap-20">

            <div className="flex items-center gap-4 max-w-[260px]">
              <img src="/connect.png" className="w-16 h-16 object-contain" />
              <p className="text-gray-700">
                Connect startups with mentors, investors, and business service providers
              </p>
            </div>

            <div className="hidden md:block w-px h-24 bg-yellow-500"></div>

            <div className="flex items-center gap-4 max-w-[260px]">
              <img src="/visibility.png" className="w-16 h-16 object-contain" />
              <p className="text-gray-700">
                Give startups visibility on their products with industry giants and partners
              </p>
            </div>

            <div className="hidden md:block w-px h-24 bg-yellow-500"></div>

            <div className="flex items-center gap-4 max-w-[260px]">
              <img src="/fundraise.png" className="w-16 h-16 object-contain" />
              <p className="text-gray-700">
                Facilitate fundraising support for selected startups
              </p>
            </div>

          </div>
        </div>



      </div>
      {/* Our Impact Section */}
      <ImpactSection />

      {/* Focus Programs Section */}
      <FocusPrograms />

      {/* Mentors Section */}
      <MentorsSection />
      
      {/* Investors Section */}
      <InvestorsSection />
      
      {/* Investors Section */}
      <OurPartnersSection />
    </div>
  );
}

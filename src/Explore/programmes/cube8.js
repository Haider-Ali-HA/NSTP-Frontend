import React, { useState, useEffect } from "react";
import {
  Banknote,
  Building,
  Building2,
  Download,
  FlaskConicalIcon,
  GraduationCap,
  Target, // Added import
  NetworkIcon,
  Scale,
  Users2,
  Rocket,
  Clock,
  ChevronLeft,
  ChevronRight,
  Globe,
  TrendingUp, // Added import
} from "lucide-react";
import { Link } from "react-scroll";
import { FaRegCircleDot } from "react-icons/fa6";
import Image1 from "../../Assets/exploreNSTP/nstpimage1.jpg";
import Image2 from "../../Assets/exploreNSTP/nstpimage2.jpg";
import Image3 from "../../Assets/exploreNSTP/nstpimage3.jpg";
import Image4 from "../../Assets/exploreNSTP/nstpimage4.jpg";
import Image5 from "../../Assets/exploreNSTP/nstpimage5.jpg";
import Image7 from "../../Assets/exploreNSTP/nstpimage6.jpg";

import Image6 from "../../Assets/exploreNSTP/hatch8.png";
import { MdPublic, MdRocketLaunch } from "react-icons/md";
import {
  FaChartLine,
  FaHandshake,
  FaDollarSign,
  FaBusinessTime,
} from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import Footer from "../../Components/footer";
import { Cube8Form } from "../../TenancyForm/page";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "./CompanyLogos/companyLogo";

const CarouselSection = ({ title, items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = {
    mobile: 1, // Show 1 item on mobile
    desktop: 3, // Show 3 items on desktop
  };

  const getItemsPerPage = () => {
    return window.innerWidth < 768 ? itemsPerPage.mobile : itemsPerPage.desktop;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleItems = items.slice(
    currentSlide * itemsToShow,
    (currentSlide + 1) * itemsToShow
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-8">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex-1">
              <div className="flex flex-col items-center p-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={item.image || "/api/placeholder/128/128"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {item.name}
                </h3>
                <p className="text-primary font-medium mb-2">{item.role}</p>
                <p className="text-gray-600 text-sm text-center max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Repositioned for mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
// const FacultyAndTeams = () => {
//   const teams = [
//     {
//       name: "TechForge Team",
//       role: "Software Development",
//       description:
//         "Award-winning team developing cutting-edge solutions in cloud computing and artificial intelligence.",
//       image: Image6,
//     },
//     {
//       name: "BioInnovate Group",
//       role: "Biotechnology Research",
//       description:
//         "Pioneering team working on breakthrough solutions in healthcare and sustainable biotechnology.",
//       image: Image6,
//     },
//     {
//       name: "FinTech Solutions",
//       role: "Financial Technology",
//       description:
//         "Innovative team revolutionizing financial services through blockchain and AI technologies.",
//       image: Image6,
//     },
//     {
//       name: "GreenTech Initiative",
//       role: "Sustainable Technology",
//       description:
//         "Dedicated team developing sustainable solutions for environmental challenges.",
//       image: Image6,
//     },
//   ];

//   return (
//     <div className="space-y-16">
//       <CarouselSection title="Featured Teams" items={teams} />
//     </div>
//   );
// };

const WhatWeOfferSection = () => {
  const offerings = [
    {
      title: "Access to Global Network",
      icon: <NetworkIcon className="w-16 h-16 text-[#86BE3F]" />,
      description: "Network of Investors and VCs",
    },
    {
      title: "Professional Space",
      icon: <Building className="w-16 h-16 text-[#86BE3F]" />,
      description: "State-of-the-art Office Space and Facilities",
    },
    {
      title: "Expert Mentorship",
      icon: <Users2 className="w-16 h-16 text-[#86BE3F]" />,
      description: "Strategic Partnerships with Industry Leaders",
    },
    {
      title: "Business Development",
      icon: <Building2 className="w-16 h-16 text-[#86BE3F]" />,
      description: "Advanced Business Development Resources",
    },
    {
      title: "Market Access",
      icon: <Globe className="w-16 h-16 text-[#86BE3F]" />,
      description: "Market Expansion Opportunities",
    },
    {
      title: "Investment Support",
      icon: <Banknote className="w-16 h-16 text-[#86BE3F]" />,
      description: "Investment Readiness Programs",
    },
    {
      title: "Research Access",
      icon: <FlaskConicalIcon className="w-16 h-16 text-[#86BE3F]" />,
      description: "Access to NSTP's Research and Development Labs",
    },
    {
      title: "Legal Support",
      icon: <Scale className="w-16 h-16 text-[#86BE3F]" />,
      description: "Legal and IP Support for International Markets",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 bg-[#F7FBF3] rounded-full p-6 w-24 h-24 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const StartupAchievementsSection = () => {
  const achievements = [
    {
      title: "Global Market Expansion",
      description: "Access international markets and scale globally",
      image: Image1,
    },
    {
      title: "Scalable Operations",
      description: "Build and optimize scalable business operations",
      image: Image2,
    },
    {
      title: "Investment Readiness",
      description: "Prepare for and secure significant investment",
      image: Image3,
    },
    {
      title: "Strategic Partnerships",
      description: "Form valuable strategic partnerships",
      image: Image4,
    },
    {
      title: "Growth Metrics",
      description: "Achieve significant growth metrics and KPIs",
      image: Image5,
    },
    {
      title: "Market Compliance",
      description: "Ensure international regulatory compliance",
      image: Image7,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Startups Will Achieve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Decorative corner accent */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/20 rounded-full transition-all duration-500 group-hover:scale-150" />
            </div>

            <div className="relative p-6">
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </div>

            {/* Hover overlay for depth effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
const ProgramRequirementsSection = () => {
  const requirements = [
    {
      title: "Proven Market Traction",
      description:
        "Demonstrate validated product-market fit with consistent revenue growth and customer base",
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
    },
    {
      title: "Dedicated Team",
      description:
        "Full-time founding team with complementary skills and commitment to growth",
      icon: <Users2 className="w-12 h-12 text-primary" />,
    },
    {
      title: "Scalable Model",
      description:
        "Clear vision for national or international expansion with scalable business model",
      icon: <Globe className="w-12 h-12 text-primary" />,
    },
    {
      title: "Growth Commitment",
      description:
        "Strong commitment to program participation and achieving ambitious growth objectives",
      icon: <Target className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-7">
          Program Requirements
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're looking for exceptional startups that meet the following
          criteria
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((req, index) => (
            <div key={index} className="transform-gpu">
              <div className="group relative bg-white min-h-44 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Corner accent */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Icon container with animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-45 transition-transform duration-500 group-hover:rotate-90" />
                    <div className="relative bg-white rounded-lg p-3 transform transition-transform duration-500 group-hover:rotate-12">
                      {req.icon}
                    </div>
                  </div>

                  {/* Content with hover effects */}
                  <div className="text-center sm:text-left relative z-10">
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                      {req.title}
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      {req.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-b-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Cube8 = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const about =
    "Cube 8 is NSTP's premier accelerator program designed for growth-stage startups ready to scale their operations and impact. This intensive 2 years program provides established startups with advanced resources, strategic mentorship, and access to a global network of investors and industry leaders. Our focus is on helping promising companies accelerate their growth, optimize their business models, and prepare for significant market expansion.";

  const hatch8Title = "Accelerating Growth-Stage Success";
  const hatch8Description =
    "Cube 8 houses dynamic startups across eight thematic sectors, from AgriTech to SmartTech, creating a vibrant ecosystem of innovation. Our resident companies benefit from advanced resources, strategic mentorship, and global networking opportunities, working together to scale their operations and create meaningful impact in their respective industries.";

  // const whatWeOffer = [
  //   "Access to Global Network of Investors and VCs",
  //   "State-of-the-art Office Space and Facilities",
  //   "Strategic Partnerships with Industry Leaders",
  //   "Advanced Business Development Resources",
  //   "Market Expansion Opportunities",
  //   "Investment Readiness Programs",
  //   "Executive Mentorship from Industry Leaders",
  //   "Access to NSTP's Research and Development Labs",
  //   "Legal and IP Support for International Markets",
  // ];

  // const whatStartupsWillAchieve = [
  //   {
  //     name: "Global Market Expansion Strategy",
  //     icon: <MdPublic />,
  //   },
  //   {
  //     name: "Scalable Business Operations",
  //     icon: <FaChartLine />,
  //   },
  //   {
  //     name: "Investment and Funding Readiness",
  //     icon: <FaDollarSign />,
  //   },
  //   {
  //     name: "Strategic Partnership Development",
  //     icon: <FaHandshake />,
  //   },
  //   {
  //     name: "Advanced Growth Metrics",
  //     icon: <BsGraphUpArrow />,
  //   },
  //   {
  //     name: "International Regulatory Compliance",
  //     icon: <RiGovernmentLine />,
  //   },
  //   {
  //     name: "Enterprise Sales Strategy",
  //     icon: <FaBusinessTime />,
  //   },
  //   {
  //     name: "Market Leadership Position",
  //     icon: <MdRocketLaunch />,
  //   },
  // ];

  return (
    <>
      <div className="my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[31rem] overflow-hidden">
            <img
              src={Image2}
              alt="Cube 8"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
            <div className="absolute inset-0 text-white p-6">
              <p className="text-primary flex items-center gap-2">
                <span
                  onClick={() => navigate("/")}
                  className="underline hover:text-white cursor-pointer"
                >
                  Home
                </span>
                <ChevronRight />
                <span
                  onClick={() => navigate("/explore")}
                  className="underline hover:text-white cursor-pointer"
                >
                  Explore
                </span>
                <ChevronRight /> Accelerator
              </p>
              <h1 className="font-bold text-center h-full flex items-center justify-center -mt-4 text-3xl md:text-5xl">
                Cube 8 Accelerator
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-20 md:px-48 mt-10 flex flex-col items-center justify-center">
          {/* Program Overview */}
          <div className="w-full lg:w-[71rem] flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="md:w-3/4">
              <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">
                Program Overview
              </h2>
              <p className="text-gray-600 text-justify mt-5 text-sm">{about}</p>
              <button className="w-full md:w-fit">
                <Link
                  to="apply"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black flex items-center cursor-pointer hover:underline mt-5 justify-center md:justify-start w-full"
                >
                  Apply Now <ChevronRight className="ml-1" />
                </Link>
              </button>
            </div>
            <div className="hidden sm:block w-1/4">
              <img
                className="rounded-full shadow-md"
                src={Image6}
                alt="program overview"
              />
            </div>
          </div>

          {/* Replace your existing "what we offer" section with: */}
          <div className="mt-16 w-full lg:w-[71rem]">
            <WhatWeOfferSection />
          </div>
          {/* Company Logo  */}
          <div className="mt-16 w-full  lg:w-[71rem] ">
            <CompanyLogo title={hatch8Title} description={hatch8Description} />
          </div>

          {/* Replace your existing "what startups will achieve" section with: */}
          <div className="mt-16 w-full lg:w-[71rem]">
            <StartupAchievementsSection />
          </div>
          {/* Program Requirements */}
          <div className="mt-16 w-full">
            <ProgramRequirementsSection />
          </div>
          {/* Teams */}
          {/* <div className="mt-16 w-full  lg:w-[71rem] ">
            <FacultyAndTeams />
          </div> */}

          {/* Apply Section */}
          <div id="apply" className="mt-16 w-full lg:w-[71rem]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How to Apply
            </h2>
            <div className="text-gray-600 text-center flex flex-col items-center justify-center text-sm mt-5">
              <p>
                Growth-stage startups meeting our program requirements can apply
                for the Cube 8 Accelerator Program through our application form.
                Selected companies will be invited for detailed evaluation and
                pitch sessions.
              </p>

              <button
                                       className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  mt-10 mb-7"
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <ChevronRight />
              </button>
            </div>

            {showForm && (
              <div className="mt-10">
                <Cube8Form />
              </div>
            )}
          </div>
        </div>
      </div>{" "}
      {/* Add this closing div tag */}
      <Footer />
    </>
  );
};

export default Cube8;

import React from "react";
import {
  Building2,
  Flask,
  Clock,
  Coffee,
  CalendarDays,
  Dumbbell,
  Car,
  FlaskConical,
} from "lucide-react";
import Animation from "../../Animation";

const Offer = () => {
  const services = [
    {
      icon: Building2,
      title: "Private Offices",
      description: "Fully serviced offices for your business needs",
    },
    {
      icon: FlaskConical,
      title: "Access to NUST Ecosystem",
      description: "Labs, Students, Faculty, R&D facilities",
    },
    {
      icon: Clock,
      title: "24/7 365",
      description: "Round-the-clock access to facilities",
    },
    {
      icon: Coffee,
      title: "Café & Bistro",
      description: "On-site refreshments and dining",
    },
    {
      icon: CalendarDays,
      title: "Event Places",
      description: "Spaces for hosting various events",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Gym",
      description: "Stay active with on-site fitness facilities",
    },
    {
      icon: Car,
      title: "Dedicated Parking Spaces",
      description: "Convenient parking for members",
    },
  ];

  return (
    <div className=" mx-auto p-6 md:p-12  lg:p-24 ">
      <Animation>
      <h1 className="text-xl lg:text-3xl mb-4  flex-wrap  flex items-center justify-center gap-2 sm:gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          WHAT
        </span>{" "}
        <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
          WE OFFER
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      </Animation>
      
      <Animation>
      <p className="max-w-2xl mx-auto text-base text-gray-500 text-justify md:text-center mb-4">
      With over 500,000 sq ft of development space  NSTP  is the
      ideal home for residents to expand their business in the proximity of NUST
          </p>
          </Animation>
          <Animation>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:max-w-[88rem]  mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 w-72 sm:w-80  h-64 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-2"
          >
            {/* Animated background patterns */}
            {/* <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-br-full transition-all duration-500 ease-in-out group-hover:scale-150 group-hover:bg-primary/20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full transition-all duration-500 ease-in-out group-hover:scale-150 group-hover:bg-primary/15" /> */}

            {/* Card content container */}
            <div className="relative p-8">
              {/* Icon container with layered animations */}
              <div className="mb-6">
                <div className="relative w-16 h-16 mx-auto transform transition-all duration-500 ease-out group-hover:scale-110">
                  {/* Rotating background square */}
                  <div className="absolute inset-0 bg-primary group-hover:bg-primary rounded-xl transform rotate-0 transition-transform duration-500 ease-out group-hover:rotate-[45deg] group-hover:scale-110" />

                  {/* Icon container */}
                  <div className="absolute inset-0 bg-black rounded-xl shadow-lg transform transition-transform duration-500 ease-out ">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <service.icon className="w-8 h-8 text-white transform transition-transform duration-500 ease-out group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content section with animated elements */}
              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-black bg-clip-text  transform transition-color duration-500 ease-out ">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

            {/* Subtle border glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 border-2 border-primary/20" />
          </div>
        ))}
      </div>
      </Animation>
    </div>
  );
};

export default Offer;

import React from "react";
import { LiaBuildingSolid } from "react-icons/lia";
import GoogleCloud from "../../Assets/partners/google-cloud.png";
import AWS from "../../Assets/partners/aws.png";
import NAMA from "../../Assets/partners/nama.png";
import IASP from "../../Assets/partners/iasp.png";
import NUST from "../../Assets/partners/NUST.png";
import PakLaunch from "../../Assets/partners/paklaunch.png";
import UBank from "../../Assets/partners/U-Bank.png";
import USEmbassy from "../../Assets/partners/us-embassy.png";
import ZaynVC from "../../Assets/partners/zayn-vc.png";

const Partners = () => {
  const partners = [
    {
      name: "NUST",
      logo: NUST,
    },
    {
      name: "Zayn VC",
      logo: ZaynVC,
    },
    
    {
      name: "Google Cloud",
      logo: GoogleCloud,
    },
    {
      name: "AWS",
      logo: AWS,
    },

    {
      name: "NAMA",
      logo: NAMA,
    },
    {
      name: "US Embassy",
      logo: USEmbassy,
    },
    {
      name: "U-Bank",
      logo: UBank,
    },

    {
      name: "PakLaunch",
      logo: PakLaunch,
    },
    {
      name: "IASP",
      logo: IASP,
    },
  ];
  return (
    // <div className="flex bg-white items-center justify-between p-5 lg:p-20">
    //   <div className="flex flex-row">
    //     <div>
    //       <div className="p-5">
    //         <h1 className="text-3xl font-bold flex items-center gap-2">
    //           <LiaBuildingSolid className=" text-black" />
    //           View Our Partners
    //         </h1>
    //         <p className="mt-10 text-md">
    //           We are proud to have partnered with some of the best companies in
    //           the world. Our partners are the best in their field and we are
    //           proud to have them on board. We are always looking for new
    //           partners to work with. If you are interested in partnering with us
    //           please get in touch.
    //         </p>
    //         <button
    //           className="bg-primary hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg mt-5"
    //           onClick={() => (window.location.href = "/partnerships")}
    //         >
    //           Read More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <h1 className="mb-10   text-center  font-extrabold leading-none tracking-tight mt-20">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-5xl "
          style={{
            WebkitTextStroke: "1px #000",
            textStroke: "1px #000",
          }}
        >
          Our
        </span>{" "}
        <span className="text-[#000000] text-3xl md:text-4xl  lg:text-5xl xl:text-5xl ml-4">
          Partners
        </span>
      </h1>
      <div className="w-full bg-gray-100 h-72 mb-16">
        <div className="relative overflow-hidden h-full">
          <div className="flex w-[200%] animate-infinite-scroll h-full">
            {/* First set */}
            <div className="flex w-full justify-around items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-32 md:h-48 w-32 md:w-48 mx-4 relative group shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-48 h-48 object-contain p-2 filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            {/* Second set */}
            <div className="flex w-full justify-around items-center">
              {partners.map((partner, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex items-center justify-center h-32 md:h-48 w-32 md:w-48 mx-4 relative group shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-48 h-48 object-contain p-2 filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;

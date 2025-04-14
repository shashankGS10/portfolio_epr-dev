"use client";

import React from 'react';
import { GoogleGeminiEffect } from "@/components/global/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import { saveAs } from "file-saver";
import { PinContainer } from "@/components/global/3D-pin";

const InfoBar = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const handleDownload = () => {
    const resumeFilePath = "/docs/shashank-frontend.pdf";
    saveAs(resumeFilePath, "resume_shashankgs.pdf");
  };

  return (
    <div className="relative">
     {/* <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div> */}
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hidden">
        <PinContainer title="LinkedIn" href="https://www.linkedin.com/in/shashank-g-sai/">
          <div className="bg-neutral-800 rounded-lg p-6 text-white shadow-md w-64 relative overflow-hidden min-h-[100px]">
            <div
              className="absolute inset-0 bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/profiles/linkedin-3d-logo.png')",
                backgroundSize: "250px 250px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
              <a href="https://www.linkedin.com/in/shashank-g-sai/" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                Shashank G Sai
              </a>
            </div>
          </div>
        </PinContainer>

        <PinContainer title="Email Me @" href="mailto:gsshashank@gmail.com">
          <div className="bg-neutral-800 rounded-lg p-6 text-white shadow-md w-64 relative overflow-hidden min-h-[100px]">
            <div
              className="absolute inset-0 bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/profiles/mail-3d-logo.png')",
                backgroundSize: "250px 250px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">Mail Me @</h2>
              <a href="mailto:gsshashank@gmail.com" className="text-blue-400">
                gsshashank@gmail.com
              </a>
            </div>
          </div>
        </PinContainer>

        <PinContainer title="GitHub" href="https://github.com/shashankGS10/">
          <div className="bg-neutral-800 rounded-lg p-6 text-white shadow-md w-64 relative overflow-hidden min-h-[100px]">
            <div
              className="absolute inset-0 bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/profiles/github-3d-logo.png')",
                backgroundSize: "250px 250px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">GitHub</h2>
              <a href="https://github.com/shashankGS10/" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                shashankGS10
              </a>
            </div>
          </div>
        </PinContainer>


        <PinContainer title="Flexiple Resume" href="https://app.flexiple.com/talent/resume/139263">
          <div className="bg-neutral-800 rounded-lg p-6 text-white shadow-md w-64 relative overflow-hidden min-h-[100px]">
            <div
              className="absolute inset-0 bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/profiles/flexi-3d-logo.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">Profile</h2>
            </div>
          </div>
        </PinContainer>

        <PinContainer title="Download Resume">
          <div className="bg-neutral-800 rounded-lg p-6 text-white shadow-md w-64 relative overflow-hidden min-h-[100px]">
            <div
              className="absolute inset-0 bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/profiles/download-3d-logo.png')",
                
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">Download Resume</h2>
              <button
            onClick={handleDownload}
            className="text-blue-400 cursor-pointer"
          >
            Click here to download
          </button>
            </div>
          </div>
        </PinContainer>
      </div>
       
      
    </div>
  );
};

export default InfoBar;
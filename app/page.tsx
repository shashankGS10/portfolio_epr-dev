import Navbar from "@/components/global/Navbar";
import {ContainerScroll} from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Image from 'next/image'; 

import { techStackImages , projectData, products} from "@/lib/constant";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampEffect } from '@/components/global/lamp-effect';
import { Timeline } from "@/components/global/timeline";
import { CardBody, CardContainer, CardItem } from '@/components/global/acomp-card';
import { CheckIcon } from 'lucide-react';
import InfoBar from "@/components/infobar/"

const timelineData = [
  // Education Entry
  {
    title: "2014 - 2018",
    category: "education",
    content: {
      degree: "Bachelor’s in Engineering",
      field: "Electronics and Telecom Engineering",
      institution: "SSTC FET, CSVTU, Bhilai, CG",
    },
  },
  
  // Work Experience Entries
  {
    title: "April 2020 - May 2021",
    category: "work",
    content: {
      company: "Networth Corp, Bengaluru, IN",
      role: "SDE 2",
      location: "Bengaluru, IN",
      techStack: "React.js, npm",
      achievements: [
        "Engineered an in-house charting library via D3.js, handling complete deployment and testing",
        "Co-developed and deployed UI Design system using ReactJS and Storybook.js as part of a 3-member team",
        "Utilized Webpack and Rollup for JavaScript package bundling, ensuring access control within the organization through npm",
      ],
    },
  },
  {
    title: "April 2019 - May 2020",
    category: "work",
    content: {
      company: "Bramhansh Technologies, Bengaluru, IN",
      role: "Junior Software Developer",
      location: "Bengaluru, IN",
      techStack: "HTML, CSS, React.js, Node.js",
      achievements: [
        "Built static websites for a mental health device. Tech stack used: Vanilla JS, HTML, and CSS",
      ],
    },
  },

  // Project Timeline Entries
  ...projectData.map((project) => ({
    title: project.role.split("|")[1].trim(),
    category: "project",
    content: {
      company: project.title || "Unknown",
      role: project.role,
      location: project.location || "Unknown",
      achievements: project.achievements,
      url: project.url,
    },
  })).reverse(),
];
export default function Home() {
  return (
    <main>
      <Navbar />
      <ContainerScroll
        titleComponent={
          <div className="flex items-center flex-col">
            <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
              Transforming Ideas into Scalable, User-First Applications
            </h1>
          </div>
        }
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section> 
       <section >
        <LampEffect />
        <div className="flex flex-wrap items-start justify-center flex-col md:flex-row gap-2 -mt-50">
          <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hidden">
          {projectData.map((project, index) => (
              <CardContainer key={index} className="relative inter-var mx-10 group">
                <CardBody className="relative w-full md:w-[350px] h-[24rem] rounded-xl p-6 border dark:border-[#E2CBFF] border-black/[0.1] overflow-hidden">
                  {/* Next.js Image component for background */}
                  <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 opacity-0 scale-90">
                    <Image
                      src={project.screenshot}
                      alt={`Screenshot of ${project.title}`}
                      layout="intrinsic"
                      width={350} // Set the width of the image same as the card width
                      height={240} // Adjusted height to cover the card properly
                      objectFit="cover" // Ensure the image covers the entire card
                      objectPosition="top" // Position the image starting from the top
                      quality={100}
                    />
                  </div>

                  {/* Visit Button on top (for hover effect) */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >

                      Visit
                    </CardItem>
                  </div>

                  {/* Card content */}
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white z-10 group-hover:opacity-0 transition-opacity duration-300">
                    {project.title}
                    <h2 className="text-xl py-4">{project.location}</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300 mt-1">{project.role}</p>
                  </CardItem>

                  <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <ul className="my-4 flex flex-col gap-2">
                      {project.achievements.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
      <InfiniteMovingCards
        className="md:my-[18rem] mt-[-100px]"
        items={techStackImages}
        direction="right"
        speed="normal"
        pauseOnHover
      />
      <section className="mt-[400px]">
        <Timeline data={timelineData} />
      </section>
      <section>
      <InfoBar/>
      </section>
    </main>
  );
}

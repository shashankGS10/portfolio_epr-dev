"use client"
import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Image from 'next/image';
import { useIsMobile } from "@/lib/hooks/useIsMobile"
import { techStackImages, projectData, products } from "@/lib/constant";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampEffect } from '@/components/global/lamp-effect';
import { Timeline } from "@/components/global/timeline";
import { CardBody, CardContainer, CardItem } from '@/components/global/acomp-card';
import { CheckIcon } from 'lucide-react';
import InfoBar from "@/components/infobar/"
import ProjectCards from "@/components/projectCards"

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
  const isMobile = useIsMobile();
  return (
    <main>
      <Navbar />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section >
      <ProjectCards/>
        </section>
      <section>
        <ContainerScroll
        titleComponent={
          <div className="flex items-center flex-col">
            <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
            How About Designing Games 
            </h1>
            <h1 className="text-4xl md:text-8xl">👨‍💻</h1>
          </div>
        }
      />
        
{/* till here ---- */}
      </section>
      <InfiniteMovingCards
        items={techStackImages}
        direction="right"
        speed="normal"
        pauseOnHover
      />

        <InfoBar />
      <section className="mt-[200px]">
        <Timeline data={timelineData} />
      </section>
     
    </main>
  );
}

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from '@/components/global/acomp-card';
import { CheckIcon } from 'lucide-react';
import {motion } from 'framer-motion'
import { projectData } from "@/lib/constant";
import { LampContainer } from "@/components/global/lamp-effect";

const ProjectCards = () => {
    return (
<>
<motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: -100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
         A Breif About My <br /> Initiatives
      </motion.h1>

  <div className="flex overflow-x-auto space-x-2 p-2 scrollbar-hidden">
    {projectData.map((project, index) => (
      <CardContainer key={index} className="relative inter-var mx-10 group">
        <LampContainer>
        <CardBody className="relative w-full md:w-[350px] h-[24rem] rounded-xl p-6 border dark:border-[#E2CBFF] border-black/[0.1] overflow-hidden">
          <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-90 group-hover:opacity-100 opacity-0 scale-90">
            <Image
              src={project.screenshot}
              alt={`Screenshot of ${project.title}`}
              width={350}
              height={240}
              objectFit="cover"
              objectPosition="top"
              quality={100}
            />
          </div>
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
        </LampContainer>
      </CardContainer>
      
    ))}
  </div>
  </>
)};

export default ProjectCards;
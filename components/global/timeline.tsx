"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


interface TimelineContent {
  institution?: string;
  degree?: string;
  field?: string;
  company?: string;
  location?: string;
  role?: string;
  techStack?: string;
  achievements?: string[];
  url?: string;
}

interface TimelineEntry {
  title: string;
  category: "education" | "work" | "project";
  content: TimelineContent;
}


export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Calculate total height of all entries
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  // Set up scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Adjusted offset to track entire scroll
  });

  // Transformations for height and opacity
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
       <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Experience TimeLine <br />[ The Start-Ups Journey... ]
      </motion.h1>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-15">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <Card className="rounded-xl border shadow bg-white dark:bg-neutral-950">
                <CardHeader>
                  <CardDescription className="text-lg md:text-xl space-y-4">
                     {item.category === "education" && (
    <div>
      <p>
        <strong>{item.content.degree}</strong> in {item.content.field}
      </p>
      <p>{item.content.institution}</p>
    </div>
  )}
  {item.category === "work" && (
    <div>
      <p>
        <strong>{item.content.company}</strong> - {item.content.role}
      </p>
      <p>Location: {item.content.location}</p>
      <p>Tech Stack: {item.content.techStack}</p>
    </div>
  )}
  {item.category === "project" && (
    <div>
      <p>
        <strong>{item.content.company}</strong> - {item.content.role}
      </p>
      <p>Location: {item.content.location}</p>
    </div>
  )}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {(item.category === "work" || item.category === "project") && (
                    <div className="list-disc ml-5">
                      {item.content.achievements?.map((ach, idx) => (
                        <div key={idx}>{ach}</div>
                      ))}
                    </div>
                  )}
                </CardContent>

                {item.category === "project" && item.content.url && (
                  <CardFooter>
                    <a
                      href={item.content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Visit Project
                    </a>
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
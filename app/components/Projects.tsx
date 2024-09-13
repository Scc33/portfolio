"use client";

import { Fragment } from "react";
import Project from "./Project";

export const projectsData = [
  {
    title: "Snake Game",
    description:
      "A classic Snake game built with React, featuring a scoring system and responsive design.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "",
    link: "/snake",
    date: "Fall 2024"
  },
  {
    title: "Phone Case E-commerce",
    description:
      "A full-stack app for creating and ordering custom phone cases.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion", "Authorization"],
    imageUrl: "/ecommerce/snake-1.png",
    link: "/ecommerce",
    date: "Summer 2024"
  },
  {
    title: "Learning Next.js",
    description:
      "A series of Next.JS code snippets developed while I was learning the framework.",
    tags: ["React", "Next.JS", "Tailwind", "Vercel"],
    imageUrl: "/snippets/blogCard/roomImage.jpg",
    link: "/snippets",
    date: "Spring 2024"
  }
] as const;

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-24">
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

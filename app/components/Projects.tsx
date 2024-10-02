"use client";

import { Fragment } from "react";
import Project from "./Project";

export const projectsData = [
  {
    title: "Connect 4",
    description:
      "A classic Connect 4 game built with React and TypeScript.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "/connect4/connect-4-screenshot.png",
    link: "/connect4",
    date: "Fall 2024"
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with React and TypeScript.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "/tictactoe/tictactoe-screenshot.png",
    link: "/tictactoe/3",
    date: "Fall 2024"
  },
  {
    title: "2048 Game",
    description:
      "A clone of the popular 2048 game built with React and TypeScript.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "/2048/2048-screenshot.png",
    link: "/2048",
    date: "Fall 2024"
  },
  {
    title: "Snake Game",
    description:
      "A classic Snake game built with React, featuring a scoring system and responsive design.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "/snake/snake-screenshot.png",
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
    <section id="projects" className="scroll-mt-28 mb-24 flex justify-center">
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

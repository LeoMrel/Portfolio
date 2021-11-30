import React from "react"
import Layout from "../Layout/layout"
import Fade from "react-reveal/Fade"
import movieapp from "../../images/thumbnails/movieapp.jpg"
import sortingapp from "../../images/thumbnails/sortingapp.jpg"
import mernapp from "../../images/thumbnails/mernapp.jpg"
import react from "../../images/skills/frontend/react.svg"
import tailwind from "../../images/skills/tools/tailwind.svg"
import typescript from "../../images/skills/frontend/typescript.svg"
import nextjs from "../../images/skills/tools/next-js.svg"
import javascript from "../../images/skills/frontend/javascript.svg"
import mongodb from "../../images/skills/backend/mongodb.svg"
import Tilt from "react-tilt"

const Projects = () => {
  const projectsList = [
    {
      title: "Sorting Visualizer",
      quote: {
        quote:
          "Many computer scientists consider sorting to be the most fundamental problem in the study of algorithms.",
        from: "—Introduction to Algorithms 3rd edition.",
      },
      description: `Sorting algorithms were my introduction to the field,
      and as such, I decided to code a sorting visualizer to test my knowledge and understanding.
      Also took on the oportunity to learn Typescript!`,
      covers: [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
        "Quick Sort",
      ],
      image: sortingapp,
      site: "https://leomrel.github.io/Sorting-Visualizer/",
      repo: "https://github.com/LeoMrel/Sorting-App",
      stack: [
        {
          icon: react,
          label: "React",
        },
        {
          icon: tailwind,
          label: "Tailwind",
        },
        {
          icon: typescript,
          label: "Typescript",
        },
      ],
    },
    {
      title: "NTMDB (Not The Movie Database)",
      description: `A movie, tv show and people search application inspired
      by The Movie Database.`,
      covers: [
        "Client & Server Side Rendering",
        "Static & Incremental Static Site Generation",
        "Data fetching (SWR library)",
        "Search queries",
        "& more!",
      ],
      image: movieapp,
      site: "https://ntmdb-nu.vercel.app/",
      repo: "https://github.com/LeoMrel/movieapp",
      stack: [
        {
          icon: nextjs,
          label: "Next.Js",
        },
        { icon: tailwind, label: "Tailwind" },
        { icon: javascript, label: "Javascript" },
      ],
    },
    {
      title: "Full Stack Blog App (Coming soon)",
      description: `A full stack application inspired by Facebook, implementing the MERN stack.`,
      covers: [
        "AWS Amplify Services",
        "Database Integration (MongoDB)",
        "SSG & ISG",
        "User Authentication",
        "& more!",
      ],
      image: mernapp,
      site: null,
      stack: [
        {
          icon: nextjs,
          label: "Next.Js",
        },
        {
          icon: tailwind,
          label: "Tailwind",
        },
        {
          icon: mongodb,
          label: "MongoDB",
        },
        {
          icon: typescript,
          label: "Typescript",
        },
      ],
    },
  ]

  return (
    <Layout id="projects" height="h-full">
      <div className="w-full h-full">
        <div className="w-full place-content-center flex">
          <Fade bottom>
            <h2>Projects</h2>
          </Fade>
        </div>
        <div className="to-animate h-full w-full lg:flex lg:flex-col my-10 place-items-center">
          <div className="w-full">
            {projectsList.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between gap-x-10 my-12"
                >
                  <div className="my-5 flex flex-col lg:w-3/6">
                    <Fade left>
                      <h3 className="text-2xl">{e.title}</h3>
                      <div className="font-sans text-lg">
                        {e.quote && (
                          <div className="italic font-light">
                            <p>"{e.quote.quote}"</p>
                            <span>{e.quote.from}</span>
                          </div>
                        )}
                        <p>{e.description}</p>

                        {e.covers && (
                          <div>
                            <p className="font-bold">This project covers:</p>
                            {e.covers.map((learned, index) => {
                              return (
                                <ul
                                  key={index}
                                  className="list-disc font-semibold mx-5"
                                >
                                  <li>{learned}</li>
                                </ul>
                              )
                            })}
                          </div>
                        )}

                        <div className="flex gap-5 my-3">
                          {e.stack &&
                            e.stack.map((tech, index) => {
                              return (
                                <div
                                  key={index}
                                  className="place-items-center font-bold flex flex-col"
                                >
                                  <img
                                    alt={tech.label}
                                    src={tech.icon}
                                    width="35px"
                                    height="35px"
                                  />
                                  <p className="text-sm">{tech.label}</p>
                                </div>
                              )
                            })}
                        </div>
                        {e.site && e.repo && (
                          <div>
                            <button className="font-bold mix-blend-difference btn from-left px-3 py-1">
                              <a href={e.site} target="_blank" rel="noreferrer">
                                See Live
                              </a>
                            </button>
                            <button className="font-bold mix-blend-difference btn from-left px-3 py-1">
                              <a href={e.repo} target="_blank" rel="noreferrer">
                                Source Code
                              </a>
                            </button>
                          </div>
                        )}
                      </div>
                    </Fade>
                  </div>
                  <Tilt
                    options={{ max: 10, perspective: 3000, scale: 1.05 }}
                    className="my-5 max-h-full lg:w-3/5 relative"
                  >
                    <Fade right>
                      <div>
                        {e.site && (
                          <a
                            href={`${e.site}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent absolute w-full h-80 lg:h-96"
                          />
                        )}
                        <img
                          className="rounded-sm"
                          src={e.image}
                          alt={`${e.title}`}
                        />
                      </div>
                    </Fade>
                  </Tilt>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

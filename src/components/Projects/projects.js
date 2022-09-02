import React from "react"
import Layout from "../Layout/layout"
import Fade from "react-reveal/Fade"
import Tilt from "react-tilt"
import { projectsList } from "./projectsList"

const Projects = () => {
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
                        {e.warning && (
                          <i className="font-semibold">{`*${e.warning}`}</i>
                        )}
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
                    className="max-h-auto lg:max-h-0 lg:w-10/12 relative lg:mr-5"
                  >
                    <Fade right>
                      <div>
                        {e.site && (
                          <a
                            href={`${e.site}`}
                            target="_blank"
                            rel="noreferrer"
                            className="h-full w-full absolute"
                          />
                        )}
                        <img
                          className="rounded-sm h-full w-full shadow-xl"
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

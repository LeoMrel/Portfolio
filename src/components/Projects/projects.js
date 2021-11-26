import React from "react"
import Layout from "../Layout/layout"
import movieapp from "../../images/thumbnails/movieapp.jpg"
import sortingapp from "../../images/thumbnails/sortingapp.jpg"
import Tilt from "react-tilt"

const Projects = () => {
  const mock = [
    {
      title: "NTMDB",
      description: `Movies, tv shows & people search application.
        Also see what's popular!`,
      image: movieapp,
      site: "https://ntmdb-nu.vercel.app/",
      stack: [],
    },
    {
      title: "Sorting Visualizer",
      description: "Sorting App",
      image: sortingapp,
      site: "https://leomrel.github.io/Sorting-Visualizer/",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]

  return (
    <Layout id="projects" height="h-full">
      <div className="w-full h-full">
        <div className="w-full place-content-center flex">
          <h2>Projects</h2>
        </div>
        <div className="to-animate h-full w-full lg:flex lg:flex-col my-10 place-items-center">
          <div className="w-full">
            {mock.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between gap-x-10 my-12"
                >
                  <div className="my-5 flex flex-col lg:w-3/6">
                    <h3 className="text-3xl">{e.title}</h3>
                    <div className="font-sans text-lg">
                      <p>{e.description}</p>
                    </div>
                  </div>
                  <Tilt
                    options={{ max: 15 }}
                    className="my-5 lg:w-3/5 relative"
                  >
                    {e.site && (
                      <a
                        href={`${e.site}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-transparent absolute w-full h-full"
                      />
                    )}
                    <img
                      className="rounded-md"
                      src={e.image}
                      alt={`${e.title}`}
                    />
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

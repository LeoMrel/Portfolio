import React from "react"
import Layout from "../Layout/layout"
import NavBar from "../Navbar/navbar"

const Home = () => {
  const links = [
    { name: "skills" },
    { name: "projects" },
    { name: "about" },
    { name: "contact" },
  ]

  return (
    <Layout id="hero" height="h-screen">
      <NavBar color="#34D399" position="fixed right-0 lg:right-10 top-5" />
      <div className="w-full leading-snug text-center md:text-left">
        <h1>
          Hi, I'm <span className="hero-text">Leo</span>
        </h1>
        <h2>I build stuff for the web.</h2>
        <div className="w-full flex place-content-center md:place-content-start">
          <div className="my-3 flex flex-col md:flex-row font-semibold text-2xl">
            {links.map((e, index) => {
              return (
                <span
                  key={index}
                  onClick={() =>
                    document.getElementById(`${e.name}`).scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="capitalize mix-blend-difference btn from-left px-3 py-1"
                >
                  <span>{e.name}</span>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

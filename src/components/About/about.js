import React from "react"
import Layout from "../Layout/layout"
import Fade from "react-reveal/Fade"
import selfie from "../../images/thumbnails/selfie.svg"

const About = () => {
  return (
    <Layout id="about" height="h-full">
      <div className="text-white w-full py-28 h-full">
        <div className="w-full flex place-content-center">
          <Fade bottom>
            <h1>About</h1>
          </Fade>
        </div>
        <div className="flex flex-col lg:flex-row justify-between place-items-center py-20 h-full w-full">
          <div className="transform -rotate-90">
            <Fade left>
              <img src={selfie} alt="selfie" />
            </Fade>
          </div>
          <div className="max-w-lg text-xl">
            <Fade right>
              <p>
                I like to think of myself as a{" "}
                <span className="text-gray-800">full-time student</span>. Since
                the very beginning of my journey writing small{" "}
                <span className="text-blue-500">Pyt</span>
                <span className="text-yellow-400">hon</span> scripts, I fell in
                love with coding. From then on, I've drift towards{" "}
                <span className="text-gray-800">web development</span>,
                challenging my skills to the next level with every new project I
                build (I took the chance and learned{" "}
                <span className="text-purple-600">Gatsby</span> for this
                portfolio!). At the moment I'm studying about cloud architecture
                and AI! Let's <span className="text-gray-800">build</span> great
                stuff together, shall we? ;)
              </p>
              <button className="mix-blend-difference btn from-left px-3 py-1 my-3">
                <a>Resume</a>
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

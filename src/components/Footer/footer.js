import React from "react"
import Layout from "../Layout/layout"
import NavBar from "../Navbar/navbar"
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <Layout height="h-72" bgColor="bg-gray-800">
      <div className="w-full flex flex-col text-gray-600">
        <div className="h-full w-full flex place-content-center">
          <div className="transition-all hover:-translate-y-1 transform my-3 cursor-pointer">
            <div
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }}
              className="place-self-start border-t-4 border-l-4 border-white w-4 h-4 rotate-45 transform"
            />
          </div>
        </div>
        <div className="w-3/6 py-3 place-self-center place-content-center flex gap-4">
          <NavBar />
        </div>
        <Fade left>
          <hr className="w-full h-px bg-gray-700" />
        </Fade>
        <div className="text-sm text-center my-3">
          <Fade bottom>
            <p>
              Icons by{" "}
              <a
                className="text-blue-400 hover:text-blue-500"
                href="https://icons8.com/"
                target="_blank"
                rel="noreferrer"
              >
                Icons8
              </a>
            </p>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}

export default Footer

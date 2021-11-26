import React from "react"
import Layout from "../Layout/layout"
import NavBar from "../Navbar/navbar"

const Footer = () => {
  return (
    <Layout height="h-72" bgColor="bg-gray-800">
      <div className="w-full place-content-center flex flex-col">
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
        <hr />
      </div>
    </Layout>
  )
}

export default Footer

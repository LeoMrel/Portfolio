import React from "react"
import Layout from "../Layout/layout"

const About = () => {
  return (
    <Layout id="about" height="h-full">
      <div className="text-white w-full py-28 h-full">
        <div className="w-full flex place-content-center">
          <h1>About</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between place-items-center py-20 h-full w-full">
          <div className="h-96 w-96 bg-red-300" />
          <div className="max-w-md text-xl">
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsumipsumLorem
              ipsumLorem ipsumipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem
              ipsumipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsum
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

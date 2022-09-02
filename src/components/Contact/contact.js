import React from "react"
import Layout from "../Layout/layout"
import Fade from "react-reveal/Fade"

const Contact = () => {
  const endpoint = "https://getform.io/f/7932352d-a82f-4e7c-ba65-44df823222a9"

  return (
    <Layout id="contact" height="h-full">
      <div className="w-full h-full py-20 flex flex-col lg:flex-row gap-y-10 place-items-center justify-between">
        <div className="text-center md:text-left text-4xl lg:w-4/6">
          <Fade left>
            <h3>
              Let's build something
              <br />
              <Fade left delay={800}>
                ...together ;)
              </Fade>
            </h3>
          </Fade>
        </div>
        <Fade right>
          <form
            action={endpoint}
            method="POST"
            className="flex flex-col w-full lg:w-4/6 gap-y-2 text-xl font-sans"
          >
            <label className="font-montserrat">Name</label>
            <input
              type="text"
              name="name"
              className="rounded-md text-gray-800 p-1 border border-gray-200"
            />
            <label className="font-montserrat">Email</label>
            <input
              type="text"
              name="email"
              className="rounded-md text-gray-800 p-1 border border-gray-200"
            />
            <label className="font-montserrat">Subject</label>
            <input
              type="text"
              name="subject"
              className="rounded-md p-1 text-gray-800 border border-gray-200"
            />
            <label className="font-montserrat">Write me something!</label>
            <textarea
              style={{ resize: "none" }}
              type="text"
              name="message"
              className="h-52 rounded-md text-gray-800 font-thin p-1 border border-gray-200"
            />
            <button
              type="submit"
              className="my-1 font-montserrat py-3 overflow-hidden mix-blend-difference btn from-left"
            >
              Submit
            </button>
          </form>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact

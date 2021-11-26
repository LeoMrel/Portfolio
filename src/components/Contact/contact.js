import React from "react"
import Layout from "../Layout/layout"

const Contact = () => {
  return (
    <Layout id="contact" height="h-full">
      <div className="w-full h-full py-20 flex flex-col lg:flex-row gap-y-10 place-items-center justify-between">
        <div className="text-center md:text-left text-4xl lg:w-4/6">
          <h1>Let's build something</h1>
        </div>
        <form className="flex flex-col w-full lg:w-4/6 gap-y-2 text-xl font-semibold">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="rounded-md text-gray-800 p-1 border border-gray-200"
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="rounded-md text-gray-800 p-1 border border-gray-200"
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="rounded-md p-1 text-gray-800 border border-gray-200"
          />
          <label>Write me something!</label>
          <textarea
            style={{ resize: "none" }}
            className="h-52 rounded-md text-gray-800 p-1 border border-gray-200"
          />
          <button
            type="submit"
            className="my-1 py-3 overflow-hidden mix-blend-difference btn from-left"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

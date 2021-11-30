import React from "react"
import Seo from "../seo"

const Layout = ({ children, bgColor, height, id, padding, notFound }) => {
  return (
    <section
      id={id}
      className={`${height} ${bgColor} ${padding} place-items-center flex transform transition-all duration-1000`}
    >
      <Seo title={notFound || "Leo"} />
      <div className="w-full flex place-content-center">
        <div className="w-full max-w-5xl text-5xl md:text-6xl px-3 font-montserrat flex text-gray-800 overflow-hidden">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout

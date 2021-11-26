import * as React from "react"
import "../styles/global.css"
import Home from "../components/Home/home"
import Skills from "../components/Skills/skills"
import Projects from "../components/Projects/projects"
import About from "../components/About/about"
import Contact from "../components/Contact/contact"
import Footer from "../components/Footer/footer"

const IndexPage = () => {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage

import * as React from "react"
import Icons from "./icons"

const NavBar = ({ color, position }) => {
  return (
    <header className={`${position} flex gap-10 px-5 place-items-center`}>
      <Icons fillColor={color} />
    </header>
  )
}

export default NavBar

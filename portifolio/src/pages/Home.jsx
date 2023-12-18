import React from "react"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

function Home() {
  return (
    <section>
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  )
}

export default Home

import React from "react"
import classes from "../styles/components/Portfolio.module.scss"

function Portfolio() {
  return (
    <section id="portfolio" className={classes.portfolioBody}>
      <div
        className={`container col-lg-10 col-xl-7 col-md-10 col-11 ${classes.portfolioContainer}`}
      >
        <div className={`container text-center ${classes.titleContainer}`}>
          <h1>Noroff Projects</h1>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

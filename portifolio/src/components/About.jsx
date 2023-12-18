import React, { useState, useEffect } from "react"
import classes from "../styles/components/About.module.scss"
import pic1 from "../components/assets/pic1.jpg"
import pic2 from "../components/assets/pic2.jpg"
import pic3 from "../components/assets/pic3.jpg"
import html from "../components/assets/html.svg"
import css from "../components/assets/css.svg"
import js from "../components/assets/js.svg"
import react from "../components/assets/react.svg"
import bootstrap from "../components/assets/bootstrap.svg"
import sass from "../components/assets/sass.svg"

function About() {
  const [backgroundImage, setBackgroundImage] = useState(pic1)
  const [showAboutContent, setShowAboutContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (aboutSectionPosition < windowHeight * 0.75) {
          setShowAboutContent(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleImageClick = (newImage) => {
    setBackgroundImage(newImage)
  }
  return (
    <section id="about" className={classes.aboutBody}>
      <div
        className={`container col-lg-10 col-xl-7 col-md-10 col-11 ${classes.aboutSection}`}
      >
        <div className={`row pt-5 ${classes.aboutContainer}`}>
          <div
            className={`col pt-5 ${classes.slideContainer} ${
              showAboutContent ? classes.fadeInRight : ""
            }`}
          >
            <div
              id="slide"
              className={`${classes.slide} ${classes.fadeIn}`}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className={classes.circleContainer}>
                <div
                  className={classes.circle}
                  style={{ backgroundImage: `url(${pic1})` }}
                  onClick={() => handleImageClick(pic1)}
                />
                <div
                  className={classes.circle}
                  style={{ backgroundImage: `url(${pic2})` }}
                  onClick={() => handleImageClick(pic2)}
                />
                <div
                  className={classes.circle}
                  style={{ backgroundImage: `url(${pic3})` }}
                  onClick={() => handleImageClick(pic3)}
                />
              </div>
            </div>
          </div>
          <div
            className={`col pt-5 ${classes.aboutCol} ${
              showAboutContent ? classes.fadeInLeft : ""
            }`}
          >
            <div className="text-center">
              <h1 className="fw-bold text-primary text-center">About me</h1>
            </div>
            <div className="pt-3">
              <p className="fw-bolder">
                I'm a passionate front-end developer based in Haugesund, Norway,
                dedicated to crafting captivating websites. With two years of
                experience, I excel in translating designs into seamless,
                user-friendly digital experiences. I'm driven, thrive in
                collaborative environments, and equally enjoy independent
                projects.
              </p>
              <p>
                Beyond coding, I love to play chess, enjoy socializing, and am
                an avid sports enthusiast.
              </p>
            </div>

            <div className="row">
              <div className="col">
                <div>
                  <h4 className="fw-bolder">NAME</h4>
                  <p>Robert Martinsen</p>
                </div>
                <div className="pt-3">
                  <h4 className="fw-bolder">EMAIL</h4>
                  <p>robertmartinsen2000@gmail.com</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <h4 className="fw-bolder">EDUCTION</h4>
                  <p>Front-end Development (ongoing)</p>
                </div>
                <div className="pt-3">
                  <h4 className="fw-bolder">EMPLOYMENT</h4>
                  <p>Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div
          className={`container col-lg-10 col-xl-7 col-md-10 col-11 ${classes.iconSection}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={classes.wave}
            alt="waves"
          >
            <path
              fill="#051633"
              fillOpacity="0.8"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className={classes.langContainer}>
            <img src={html} className={classes.langIcon} alt="html" />
            <img src={css} className={classes.langIcon} alt="css" />
            <img src={js} className={classes.langIcon} alt="js" />
            <img src={react} className={classes.langIcon} alt="react" />
            <img src={bootstrap} className={classes.langIcon} alt="bootstrap" />
            <img src={sass} className={classes.langIcon} alt="sass" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default About

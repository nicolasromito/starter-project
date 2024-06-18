import "../App.css";
import Toolbar from "../components/Toolbar.js";
import React, { useState, useEffect, useRef } from "react";
import { TypingEffect } from "../components/TypingEffect.js";
import useOnScreen from "../components/UseOnScreen.js";
import { Timer } from "../components/Timer.js";
// import ScreenSize from "../components/ScreenSize.js";

const App = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const ref = useRef();
  const ref2 = useRef();

  const isVisible = useOnScreen(ref);
  const isVisible2 = useOnScreen(ref2);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible2 && !hasAnimated2) {
      setHasAnimated2(true);
    }
  }, [isVisible2]);

  const imgRef = useRef(null);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const guardarPosicionInicial = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setStartPosition({ x: rect.left, y: rect.top });
    }
  };

  const [pagePosition, setPagePosition] = useState(0);
  const x = 2;
  useEffect(() => {
    let isScrolling;
    const handleWheel = (event) => {
      event.preventDefault();

      if (isScrolling) {
        clearTimeout(isScrolling);
      }
      isScrolling = setTimeout(() => {
        if (event.deltaY > 0) {
          setPagePosition((prevPosition) => {
            return Math.min(prevPosition + 1, x);
          });
        } else {
          setPagePosition((prevPosition) => {
            return Math.max(prevPosition - 1, 0);
          });
        }
      }, 400);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const scrollAmount = pagePosition * (window.innerHeight + window.innerHeight * 0.05);

    window.scrollTo({ top: scrollAmount, behavior: 'smooth' });
  }, [pagePosition]);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      content.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isDown = false;
      content.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      content.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    const img = document.getElementById("myImage");
    function mostrarPosicion() {
      const rect = img.getBoundingClientRect();
      console.log(`Posición actual X: ${rect.left}px`);
      console.log(`Posición actual Y: ${rect.top}px`);
    }
    img.addEventListener("mousedown", mostrarPosicion);
    img.addEventListener("mousemove", mostrarPosicion);
    img.addEventListener("mouseup", mostrarPosicion);
    img.addEventListener("touchstart", mostrarPosicion, { passive: true });
    img.addEventListener("touchmove", mostrarPosicion, { passive: true });
    img.addEventListener("touchend", mostrarPosicion);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div class="page">
      {/* <Toolbar /> */}
      <div class="container">
        <div class="border-animation" href="#">
          <div class="border-animation-patch">
            <div class="border-animation__inner">
              <div
                className="title-content"
                style={{
                  "--font-min": "1em",
                  "--font-max": "2em",
                }}
              >
                <div
                  className="width-on-small-screen blurred"
                  style={{
                    "--w": "70%",
                  }}
                >
                  <TypingEffect
                    text="Hola, soy Nicolás"
                    speed={50}
                    type={2}
                    initialDelay={0}
                  />

                  <TypingEffect
                    text="Desarrollador de Software"
                    speed={50}
                    type={1}
                    initialDelay={1000}
                  />

                  <TypingEffect
                    text="Amante de la programacion y el desarrollo web."
                    speed={50}
                    type={2}
                    initialDelay={2000}
                  />
                  <div className="professional-network">
                    {/* <ScreenSize /> */}
                    <a
                      href="https://www.linkedin.com/in/nicolas-romito/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="contact-logo"
                        src="https://www.dropbox.com/scl/fi/qldafjaoo4gjmbm5q14vy/Linkedin.png?rlkey=zibcs6l77gbvlbgkqq9hpta48&st=xlb36p88&raw=1"
                      ></img>
                    </a>
                    <a
                      href="https://github.com/nicolasromito"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="contact-logo"
                        src="https://www.dropbox.com/scl/fi/0trqj1eicx8w5m886gyey/Github.png?rlkey=940ltrc7h1wr0x7f8ujacjods&st=d3nszecm&raw=1"
                      ></img>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5491125678989&text=Hola%20Nicolas"
                      target="_blank"
                    >
                      <img
                        className="contact-logo"
                        src="https://www.dropbox.com/scl/fi/zj26vxuzte0meh7pibfy7/Whatsapp.png?rlkey=0zzkzz9qyaubyzbu53li88sn7&st=lj68i6pa&raw=1"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className={`hide-on-small-screen`}>
                  <Timer
                    delay={3000}
                    animationClass1="fade-in"
                    animationClass2="fade-in-hidden"
                  >
                    <div
                      className="img-size"
                      style={{
                        "--h": "400px",
                        "--w": "400px",
                      }}
                    >
                      <img
                        className="face"
                        loading="eager"
                        src="https://i.pinimg.com/564x/e4/b2/1e/e4b21e480cd03a965e5ae2e0295b6300.jpg"
                      ></img>
                    </div>
                  </Timer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="interlined"></div>
      <div class="container">
        <div
          class="content reduce-padding-on-small-screen"
          style={{
            "--h": "400px",
            "--pt": "150px",
            "--pr": "10%",
            "--pb": "150px",
            "--pl": "10%",
            "--mpt": "150px",
            "--mpr": "10%",
            "--mpb": "150px",
            "--mpl": "10%",
          }}
        >
          <div className="hide-on-small-screen">
            <img
              className="face"
              src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
            ></img>
          </div>
          <div
            class="width-on-small-screen"
            style={{
              "--w": "50%",
            }}
          >
            <div
              ref={ref}
              className={`block-effect reduce-padding-on-small-screen ${
                hasAnimated ? "visible" : "hidden"
              }`}
              style={{
                "--td": "1.2s",
                "--pt": "0px",
                "--pr": "0px",
                "--pb": "0px",
                "--pl": "0px",
                "--mpt": "0px",
                "--mpr": "0px",
                "--mpb": "0px",
                "--mpl": "0px",
              }}
            >
              <h1
                className={`${hasAnimated ? "block-reveal" : ""}`}
                style={{ "--bc": "#4040bf", "--d": ".1s" }}
              >
                Sobre mí&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div
                  className={`ball-bouncing  ${
                    hasAnimated ? "visible" : "hidden"
                  }`}
                >
                  <span
                    className="ball"
                    style={{ color: "rgb(38, 145, 202)", "--color": "#ff0000" }}
                  ></span>
                </div>
              </h1>
            </div>
            <div
              ref={ref}
              className={`block-effect reduce-padding-on-small-screen ${
                hasAnimated ? "visible" : "hidden"
              }`}
              style={{
                "--td": "1.2s",
                "--pt": "0px",
                "--pr": "0px",
                "--pb": "20px",
                "--pl": "0px",
                "--mpt": "0px",
                "--mpr": "0px",
                "--mpb": "0px",
                "--mpl": "0px",
              }}
            >
              <h3
                className={`${hasAnimated ? "block-reveal" : ""}`}
                style={{ "--bc": "#bf4060", "--d": ".1s" }}
              >
                Soy un loquito que le gusta programar <br /> y que ama los
                videojuegos
              </h3>
            </div>
            <button className="button clic button-green">Mas sobre mi</button>
          </div>
        </div>
      </div>
      <div className="interlined"></div>
      <div class="container">
        <div
          class="content reduce-padding-on-small-screen"
          style={{
            "--h": "400px",
            "--pt": "150px",
            "--pr": "10%",
            "--pb": "150px",
            "--pl": "10%",
            "--mpt": "150px",
            "--mpr": "10%",
            "--mpb": "150px",
            "--mpl": "10%",
          }}
        >
          <div
            class="width-on-small-screen"
            style={{
              "--w": "40%",
            }}
          >
            <div
              ref={ref2}
              className={`block-effect reduce-padding-on-small-screen ${
                hasAnimated2 ? "visible" : "hidden"
              }`}
              style={{
                "--td": "1.2s",
                "--pt": "0px",
                "--pr": "0px",
                "--pb": "0px",
                "--pl": "0px",
                "--mpt": "0px",
                "--mpr": "0px",
                "--mpb": "0px",
                "--mpl": "0px",
              }}
            >
              <h1
                className={`${hasAnimated2 ? "block-reveal-2" : ""}`}
                style={{ "--bc": "#fbff13", "--d": ".5s" }}
              >
                Mis proyectos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div
                  className={`ball-bouncing  ${
                    hasAnimated2 ? "visible" : "hidden"
                  }`}
                >
                  <span
                    className="ball"
                    style={{ color: "rgb(38, 145, 202)", "--color": "#ff31f5" }}
                  ></span>
                </div>
              </h1>
            </div>
            <div
              ref={ref2}
              className={`block-effect reduce-padding-on-small-screen ${
                hasAnimated2 ? "visible" : "hidden"
              }`}
              style={{
                "--td": "1.2s",
                "--pt": "0px",
                "--pr": "0px",
                "--pb": "20px",
                "--pl": "0px",
                "--mpt": "0px",
                "--mpr": "0px",
                "--mpb": "0px",
                "--mpl": "0px",
              }}
            >
              <h3
                className={`${hasAnimated2 ? "block-reveal-2" : ""}`}
                style={{ "--bc": "#13ff27", "--d": ".1s" }}
              >
                Todas las boludeces que hice <br /> cuando tenia tiempo
              </h3>
            </div>
            <button className="button clic button-green">
              Mira todos mis proyectos
            </button>
          </div>
          <div
            className="scroll-container hide-on-small-screen2"
            ref={containerRef}
          >
            <div className="scroll-content" ref={contentRef}>
              <img ref={imgRef} id="myImage" src="imagen1.jpg" alt="Imagen 1" />
              <img
                className="face"
                src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
              ></img>
              <img
                className="face"
                src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
              ></img>
              <img
                className="face"
                src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
              ></img>
              <img
                className="face"
                src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
              ></img>
              <img
                className="face"
                src="https://www.dropbox.com/scl/fi/9p8sihrk03dsixsht9e15/Ilustraci-n.png?rlkey=ushmli7xljhd3ogsvsb1i2mu9&st=qgwtwty2&raw=1"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="interlined"></div> */}
      {/* <div class="botton">
        <div class="content-botton">
          <img
            className="face"
            src="https://www.dropbox.com/scl/fi/5a83gknjaxbwq8vd5szqw/puto.png?rlkey=015uq98hikux6a5k6h6by0m5p&st=xj6zh65t&raw=1"
          ></img>

          <img
            className="face"
            src="https://www.dropbox.com/scl/fi/1tvwqyz3oxgak3atqs563/puto2.png?rlkey=b9c6alinoihs7zfwquu5ptprq&st=iwsgi9f7&raw=1"
          ></img>
        </div>
      </div> */}
    </div>
  );
};

export default App;

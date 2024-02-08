import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Mindspace",
    img: "./mindspace.jpg",
    desc:
      "An app that provides spiritual solutions to mentally ill people to cure their mental illness. It takes a survey to predict what you are suffering from and provides you necessary resources. Also contains a chat bot and a chat space to talk to spiritual GURU’s. Database for a personalized view.",
  },
  {
    id: 2,
    link: "https://coderspoint.in/",
    title: "Coders Point",
    img: "./coderspoint.jpg",
    desc:
      "An E-learning app developed on React technology that provides students to learn and engage in coding skills.",
  },
  {
    id: 3,
    video: "./guneet_02.mp4", 
    title: "Spine 2d Aimations", 
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {item.video ? (
              <video autoPlay muted loop>
                <source src={item.video} type="video/mp4"  />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.img} alt="" />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

import React from "react";
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";


const Home = ({ ratio }) => {
 

 

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Jasleen Kaur
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Data Analyst", "A Researcher", "A Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:jasleenkaur2021@vitstudent.ac.in">Contact me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

                 </div>
      </section>
      <section>
        <img src="https://images.unsplash.com/photo-1561379982-c9f0e54ff067?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="Jasleen" />
      </section>
    
    </div>
  );
};

export default Home;
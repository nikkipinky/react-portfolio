import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Web Development",
                        1000,
                        "Software Engineering",
                        1000,
                        "Artificial Intelligence",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HELLO, I AM <br/>
                    <span className="text-purple-500">SAI NIKHITHA MADIREDDY</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate Computer Science Student.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                        <a 
    href="/resume.pdf" // Update this path to match your file name
    download="Sai_Nikhitha_Madireddy_Resume.pdf" // Set the downloaded file name
    className="no-underline text-gray-200"
  >
                        Download CV
                        </a>
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/nikkipinky/Projects">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sai-nikhitha-madireddy/">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:sainikhithamadireddy2506@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 2 }}
  className="flex flex-col items-center py-24"
>
  <p className="text-gray-200 text-3xl md:text-4xl mb-6">My Tech Stack</p>
  <div className="bg-gray-800 border border-purple-400 rounded-xl shadow-lg p-8 w-full max-w-4xl">
    <div className="flex flex-wrap justify-center text-lg text-gray-300 gap-6">
      <div className="w-full">
        <span className="font-bold text-purple-400">Languages:</span> C, C++, C#, JavaScript,
        TypeScript, Python, Java.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Frameworks:</span> ReactJS, AngularJS, NextJS,
        Node.js, Express.js, Bootstrap.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Databases:</span> MongoDB, MySQL, PostgreSQL,
        Oracle RDBMS, Oracle SQL.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Web & API:</span> HTML, CSS, GraphQL, REST.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Machine Learning Tools:</span> TensorFlow,
        Pandas, NumPy, Scikit-learn (SKLearn), Recommendation Systems, OpenCV.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Tools:</span> VSCode, Git, Vite, Postman,
        Tailwind CSS.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Cloud & DevOps:</span> Microsoft Azure.
      </div>
      <div className="w-full">
        <span className="font-bold text-purple-400">Dev & Runtime Env.:</span> Android Studio,
        Windows, Linux.
      </div>
    </div>
  </div>
</motion.div>



        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero
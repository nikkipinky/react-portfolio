import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Califorinia State University, Los Angeles',
        period: 'Oct 2023 - Present',
        description: 'Graduate Student Assistant',
      },
      {
        company: 'Tata Consultancy Services',
        period: 'Aug 2022 - Aug 2023',
        description: 'Systems Engineer',
      },
      {
        company: 'EPAM Systems',
        period: 'Jan 2022 - June 2022',
        description: 'Junior Software Engineer',
      },
      {
        company: 'Virtusa Consulting Services Private Limited',
        period: 'Aug 2021 - Dec 2021',
        description: 'Software Engineer Intern',
      },
]



const Experience = () => {
  return (
    <div className="p-8 max-w-[800px] mx-auto" id="experience">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md
                         hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};
export default Experience;
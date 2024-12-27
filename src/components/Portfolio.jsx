import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Meal Planner Application",
      description: "Using Spoonacular API",
      links: {
        github: "https://github.com/nikkipinky/Projects/tree/master/MealPlanApp",
      },
    },
    {
      img: project2,
      title: "Heart Disease Prediction",
      description: "A Heart disease prediction model using Python and machine learning",
      links: {
        github: "https://github.com/nikkipinky/Projects/tree/master/Heart_Disease_Prediction",
      },
    },
    {
      img: project4,
      title: "Virtual Trial Room",
      description: "A Virtual trial room using machine learning",
      links: {
        github: "https://github.com/nikkipinky/Projects/tree/master/Virtual-Trial-Room-master",
      },
    },
  ];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        <div className='text-center mt-8'>
        <a
          href="https://github.com/nikkipinky/Projects/tree/master" // Replace with your GitHub profile link
          className='px-6 py-3 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700
                        transition duration-300 inline-flex items-center'
        >
          <AiFillGithub className='mr-2 text-2xl' />
          See more projects on GitHub
        </a>
      </div>
        
    </div>
  )
}

export default Portfolio
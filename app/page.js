"use client";
import {
  BsFillMenuAppFill,
  BsFillMenuButtonFill,
  BsFillMoonStartsFill,
  BsMoonStarsFill,
} from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { FiClock, FiMenu } from "react-icons/fi";
import { FaDownload, FaTimes } from "react-icons/fa";
import Image from "next/image";
import profile from "../public/images/profile.png";
import logo from "@/public/images/logo.svg";
import { useState } from "react";
import Header from "@/components/Header";
import { Progress, Timeline } from "antd";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import Link from "next/link";
import NameTitle from "@/components/NameTitle";
import {projects} from "../public/data/projects"
// import resume from "../public/data/resume.pdf"

export default function Home() {
  console.log(projects)
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white dark:bg-gray-900  ">
        <section className=" min-h-screen">
          

          <header className="flex flex-row justify-between pt-6 w-full px-10 items-center sticky top-0 bg-white dark:bg-gray-900 z-40">
            <div className="basis-1/4">
              <Image alt="logo" width={50} height={50} src={logo} />
            </div>
            <nav className="md:flex gap-10 hidden dark:text-white">
              <li className="cursor-pointer p-2 hover:text-blue-400"><a href="#">Home</a></li>
              <li className="cursor-pointer p-2 hover:text-blue-400"><a href="#about">About</a></li>
              <li className="cursor-pointer p-2 hover:text-blue-400"><a href="#skills">Skills</a></li>
              <li className="cursor-pointer p-2 hover:text-blue-400"><a href="#qualification">Qualification</a></li>
              <li className="cursor-pointer p-2 hover:text-blue-400"><a href="#portfolio" >Portfolio</a></li>
              
            </nav>
            <div className="flex items-center gap-2">
            <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
            <FiMenu
              className="dark:text-white cursor-pointer w-8 h-8 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            </div>
           
          </header>
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } fixed z-30 pt-6 w-full h-full bg-white dark:bg-gray-900 dark:text-white top-0 left-0 flex flex-col items-center gap-10`}
          
          onClick={()=>setIsMenuOpen(false)}>
            <div className="w-full flex justify-end pr-10 ">
              <FaTimes
                className="w-6 h-6 cursor-pointer "
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <li className="text-xl cursor-pointer p-2 hover:text-blue-400 ">
            <a href="#">Home</a>
            </li>
            <li className="text-xl cursor-pointer p-2 hover:text-blue-400 ">
            <a href="#about">About</a>
            </li>
            <li className="text-xl cursor-pointer p-2 hover:text-blue-400 ">
            <a href="#skills">Skills</a>
            </li>
            <li className="text-xl cursor-pointer p-2 hover:text-blue-400 ">
            <a href="#qualification">Qualification</a>
            </li>
            <li className="text-xl cursor-pointer p-2 hover:text-blue-400 ">
            <a href="#portfolio" >Portfolio</a>
            </li>
          </div>
          <a href="" name="about"></a>

{/* -----------------------About-------------------- */}
          <div className="text-center  pt-20 ">
            <div className="text-5xl py-2 text-teal-600 font-medium font-burtons md:text-6xl">
            <NameTitle animatedText={"Mustafa ÖRS"} />
            </div>
            
            
            <div className="text-2xl py-2 md:text-3xl dark:text-white">
            <NameTitle animatedText={"Frontend Developer"} />
              
            </div>
            <p className="text-md md:text-xl py-5 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-400">
              A Frontend Developer with industry experience building websites
              and web applications. I am proficient in JavaScript and have
              professional experience working with React. I also have experience
              working with Redux, Tailwind and NextJS. Take a look at my work or
              get in touch! 
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="https://www.linkedin.com/in/mustafaors/" target="_blank"><AiFillLinkedin /></Link>
            <Link href="https://github.com/mstfrs" target="_blank"><AiFillGithub /></Link>
            <Link href="https://www.instagram.com/mustafaors68/" target="_blank"><AiFillInstagram /></Link>
            
            
            
          </div>
          <div className="flex p-4 justify-center items-center gap-2">
          <a href="/data/Mustafa ÖRS FrontendResume.pdf" download target="_blank" rel="noreferrer" locale={false}>
          <span className="flex justify-center items-center gap-2 border-2 rounded-xl p-2 cursor-pointer bg-gradient-to-b from-teal-500 dark:text-white " ><FaDownload/>Download Resume</span></a>

          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 shadow-2xl shadow-blue-500 dark:shadow-blue-300">
            <Image
              src={profile}
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-xl"
            />
          </div>

          {/* -----------------------Skills-------------------- */}
          <a  name="skills"></a>
          <section  >
            
            
            <div >
              <h3 className="text-3xl py-1 my-12 pt-4 dark:text-white text-center flex flex-col items-center ">
                Skills
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [1,0,1] }}
                  
                  transition={{ease:"easeInOut", duration:3,repeat: "Infinity"}}
                  className="h-1 bg-blue-400 w-20 rounded-lg"
                ></motion.div>
              </h3>

              <div className="grid md:gap-6 lg:max-w-lg mx-auto max-w-lg">
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="basis-1/5">HTML</h3>
                    <h6 className="text-xs">Excellent</h6>
                  </div>

                  <Progress
                    percent={95}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="basis-1/5">CSS</h3>
                    <h6 className="text-xs">Advanced</h6>
                  </div>

                  <Progress
                    percent={90}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="basis-1/5">Bootstrap</h3>
                    <h6 className="text-xs">Very Good</h6>
                  </div>

                  <Progress
                    percent={85}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="">Tailwind CSS</h3>
                    <h6 className="text-xs">Advanced</h6>
                  </div>

                  <Progress
                    percent={90}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="basis-1/5">JavaScript</h3>
                    <h6 className="text-xs">Advanced</h6>
                  </div>

                  <Progress
                    percent={90}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
                <div className="dark:text-white flex flex-col ">
                  <div className="flex justify-between items-center">
                    <h3 className="basis-1/5">React JS</h3>
                    <h6 className="text-xs">Excellent</h6>
                  </div>

                  <Progress
                    percent={95}
                    showInfo={false}
                    size="small"
                    className="text-white"
                    status="active"
                    type="line"
                    strokeColor={"#0C93DB"}
                    trailColor={"#95D0F0"}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* -----------------------Qualifications-------------------- */}
          <a  name="qualification"></a>
          <section>
            <div>
              <h3 className="text-3xl py-1 my-12 pt-4 dark:text-white text-center flex flex-col items-center">
                Qualifications
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [1,0,1] }}
                  
                  transition={{ease:"easeInOut", duration:3,repeat: "Infinity"}}
                  className="h-1 bg-blue-400 w-48 rounded-lg"
                ></motion.div>
              </h3>

              <div className="grid md:gap-6 lg:max-w-[40%] mx-auto">
                <div>
                  <Timeline
                    className="dark:text-white"
                    mode="alternate"
                    items={[
                      {
                        children: (
                          <>
                            {" "}
                            <h6 className="text-gray-900 dark:text-white text-lg">
                              Frontend Developer
                            </h6>{" "}
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Freelance
                            </p>{" "}
                            <p className="text-sm flex items-center gap-2 mt-4  text-gray-400 dark:text-gray-300">
                              <LuCalendarDays className="text-sm" />
                              Sep 2018 - Feb 2021
                            </p>{" "}
                          </>
                        ),
                      },
                      {
                        children: (
                          <>
                            {" "}
                            <h6 className="text-gray-900 dark:text-white text-lg">
                              Frontend Developer
                            </h6>{" "}
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Clarusway
                            </p>{" "}
                            <p className="text-sm flex justify-end items-center gap-2 mt-4  text-gray-400 dark:text-gray-300">
                              <LuCalendarDays className="text-sm" />
                              Jun 2021 - Jul 2022
                            </p>{" "}
                          </>
                        ),
                      },
                      {
                        children: (
                          <>
                            {" "}
                            <h6 className="text-gray-900 dark:text-white text-lg">
                              Frontend Developer
                            </h6>{" "}
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Paramount Students
                            </p>{" "}
                            <p className="text-sm flex items-center gap-2 mt-4  text-gray-400 dark:text-gray-300">
                              <LuCalendarDays className="text-sm" />
                              Dec 2022 - Jun 2023
                            </p>{" "}
                          </>
                        ),
                      },
                      {
                        children: (
                          <>
                            {" "}
                            <h6 className="text-gray-900 dark:text-white text-lg">
                              Frontend Developer
                            </h6>{" "}
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              JuniusTech
                            </p>{" "}
                            <p className="text-sm flex justify-end items-center gap-2 mt-4  text-gray-400 dark:text-gray-300">
                              <LuCalendarDays className="text-sm" />
                              Aug 2023 - Present
                            </p>{" "}
                          </>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

          </section>

           {/* -----------------------Portfolio-------------------- */}
           <a  name="portfolio"></a>

          <section>
            <div>
              <h3 className="text-3xl py-1 my-12 pt-4 dark:text-white text-center flex flex-col items-center">Portfolio
              <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [1,0,1] }}
                  
                  transition={{ease:"easeInOut", duration:3,repeat: "Infinity"}}
                  className="h-1 bg-blue-400 w-36 rounded-lg"
                ></motion.div></h3>
              
            </div>
            <div className="flex flex-col justify-center items-center gap-10 py-10 lg:flex-row lg:flex-wrap ">

              {projects.map((project)=>(
                
                
                <PortfolioCard key={project.id} title={project.title} image={project.image} github={project.github} demo={project.demo} techs={project.techs} />
              
              ))}


            
             

              
             
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

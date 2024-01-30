import React from 'react'
import {IoLogoGithub} from 'react-icons/io'
import {Project} from '../data'

const Projects = () => {
  return (
    <section>
            <section
              className="bg-black-100 flex flex-col items-center justify-center w-full rounded-[20px]"
              id="projects"
            >
              <div className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[100px] ">
                <h1 className="text-white font-black md:text-[60px] sm:text-[30px] xs:text-[40px] text-[20px]">
                  {" "}
                  Projects{" "}
                </h1>
              </div>
            </section>
            <section className="flex flex-wrap items-center md:mx-8 sm:px-8 justify-evenly my-10 gap-4">
              {Project &&
                Project.map((n) => (
                  <div
                    key={n.id}
                    className="border p-5 border-zinc-400 rounded-xl min-w-[320px] md:max-w-[275px] hover:border-zinc-300 duration-100 ease-out text-slate-300  bg-black"
                  >
                    <p className="text-lg text-purple-300 font-black uppercase text-center pt-2 ">
                      {n.name.length > 22
                        ? `${n.name.slice(0, 22)}...`
                        : n.name}
                    </p>

                    {/* <div className=" h-64 object-cover rounded-md my-2 text-justify text-[17px] ">
                      {" "}
                      {n.des}
                    </div> */}
                    <div className="">
                      <img
                        src={n.img}
                        alt="project"
                        className="rounded-md h-64 object-cover my-2"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between p-2">
                      <p className="text-lg">
                        Technologies
                        <span className="block text-sm">{n.techstack}</span>
                      </p>
                      <a href={n.git}>
                        <div>
                          <IoLogoGithub className="text-3xl cursor-pointer ml-auto" />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </section>
          </section>
  )
}

export default Projects

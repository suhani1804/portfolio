import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { navlinks } from "./data";
import "react-vertical-timeline-component/style.min.css";
import { AnimatePresence, motion } from "framer-motion";
import MyExperience from "./components/MyExperience";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  const [isActive, setisActive] = useState(false);

  return (
    <AnimatePresence initial={false} >
      <div className="flex w-screen h-full pb-20 flex-col bg-[#000000] justify-center items-center sparkle-bg">
        <nav
          className=" w-full z-50 fixed insert-x-0 top-0 mb-20 flex justify-center items-center ml-auto "
          id="home" 
        >
          <div className="text-purple-600 w-[80%] px-8 py-3 rounded-lg flex justify-around items-center ">
            <p className=" w-full lg:px-10 mr-auto text-3xl text-purple-900 font-bold ">
              Suhani{" "}
            </p>
            <div className="hidden md:flex items-center justify-center gap-9 flex-1  mr-6 ">
              {navlinks &&
                navlinks.map((n) => (
                  <a
                    key={n.id}
                    href={n.link}
                    className=" text-xl font-semibold hover:text-purple-400 cursor-pointer duration-100 ease-in-out"
                  >
                    {n.name}
                  </a>
                ))}

            </div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="block md:hidden cursor-pointer"
            >
              <IoMenu
                className="text-2xl text-purple-900"
                onClick={() => setisActive(!isActive)}
              />
            </motion.div>
            {isActive && (
              <div className=" p-4 w-full bg-[#dec6f7] rounded-lg fixed top-20 flex flex-col items-center justify-center gap-6 ">
                {navlinks &&
                  navlinks.map((n) => (
                    <a
                      key={n.id}
                      href={n.link}
                      className=" text-lg text-slate-50 font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out"
                      onClick={() => setisActive(false)}
                    >
                      {n.name}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </nav>

        <main className="w-[80%] mt-20 ">
          {/* About-section */}
          <AboutMe />
          {/* Experience section */}
          <MyExperience />
          {/* Projects section */}
          <Projects />
          {/* Skills section */}
          <MySkills />
          {/* Contact section */}
          <ContactMe />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

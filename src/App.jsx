import { useState } from "react"
import {IoMenu,IoLogoGithub} from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Project, SocialLinks } from "./data";
import {AnimatePresence,motion} from 'framer-motion';

function App() {
  
  const [isActive, setisActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen h-full pb-20 flex-col bg-[#f5ebff] justify-center items-center">
      <nav className="bg-white w-full z-50 fixed bg-blur insert-x-0 top-0 mb-20 flex justify-center items-center">
        <div className="w-full px-8 py-4 rounded-lg flex items-center ">
          <p className=" mr-auto text-2xl text-purple-900 font-medium ">Suhani </p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1  ">
            <a href="#home" className="  ml-auto text-lg text-black font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Home</a>
            <a href="#about" className="text-lg text-black font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">About</a>
            <a href="#projects" className="text-lg  text-black font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Projects</a>
            <a href="#contact" className="text-lg  text-black font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Contact</a>
            <motion.a 
            whileTap={{scale:0.9}}
            href="#" className="w-full md:w-auto relative inline-flex items-center justify-center overflow-hidden text-base  text-black rounded-lg group bg-gradient-to-br from-purple-500 to-slate-300 group-hover:from-purple-900 group-hover:to-slate-600 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-300/50 hover:dark:shadow-lg hover:dark:shadow-slate-800/80" >
            <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-100 rounded-md group-hover:bg-opacity-0">Download</span>
            </motion.a>
          </div>
          <motion.div
            whileTap={{scale:0.8}}
            className="block md:hidden cursor-pointer">
            <IoMenu className="text-2xl text-purple-900"onClick={()=> setisActive(!isActive)} />
          </motion.div>
          {isActive &&(
            <div className=" p-4 w-full bg-[#dec6f7] rounded-lg fixed top-20 flex flex-col items-center justify-center gap-6 ">
              
              <a href="#home" className=" text-lg text-slate-50 font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out"onClick={()=>setisActive(false)}>Home</a>
              <a href="#about" className="text-lg text-slate-50 font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out"onClick={()=>setisActive(false)}>About</a>
              <a href="#projects" className="text-lg  text-slate-50 font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out"onClick={()=>setisActive(false)}>Projects</a>
              <a href="#contact" className="text-lg  text-slate-50  font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out"onClick={()=>setisActive(false)}>Contact</a>
              <a href="#" className=" p-0.5 mb-2 mr-2 md:w-auto relative inline-flex items-center justify-center overflow-hidden text-base  text-black rounded-lg group bg-gradient-to-br from-purple-500 to-slate-300 group-hover:from-purple-900 group-hover:to-slate-600 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-300/50 hover:dark:shadow-lg hover:dark:shadow-slate-800/80" onClick={()=>setisActive(false)} >
              <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-100 rounded-md group-hover:bg-opacity-0">Download</span>
              </a>

            </div>
          )}
        </div>
      </nav>
      
      <main className="w-[80%] mt-20 ">
        {/* About-section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:my-24 mb-10 " id="about">
          
            <div className="w-full h-420 flex items-center justify-center">
              <div className=" w-275 h-340 rounded-lg bg-slate-500">
                <img className=" w-full h-full object-cover rounded-lg drop-shadow-2xl -right-4 top-4 " src="src\assets\image.jpg" alt="" />
              </div>
            </div>
            
            <div className="flex items-center justify-center flex-col w-full gap-4">
                <div className=" flex flex-col gap-4">
                  <p className="text-6xl font-semibold text-purple-500 ">I'm <span className="font-bold text-6xl text-purple-700 ">Suhani Mohanty</span></p>
                  <p className="text-purple-400 text-2xl">Web3 developer, enterpreneur, front-end developer and student</p>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-center items-center">
          <VerticalTimeline>
            {Experience &&
              Experience.map(n =>
              (
                <VerticalTimelineElement key={n.id} className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255,255,255)', opacity:'100', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={n.date}
                iconStyle={{ background: 'rgb(179,128,220)', color: '#fff' }}
                icon={<n.iconsSrc/>} >
                <h3 className="vertical-timeline-element-title">{n.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                <p>
                  {n.description}
                </p>
                 </VerticalTimelineElement>
         
              ))}
          
          </VerticalTimeline>
        </section>
        <section className="flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
          {Project && Project.map(n=>
            (
            <div key={n.id} className="border border-zinc-400 rounded-xl px-2 min-w-[300px] md:max-w-[275px] hover:border-zinc-300 duration-100 ease-out bg-white">
              <p className="text-lg font-medium uppercase text-center pt-2 " >
                {n.name.length>22 ? `${n.name.slice(0,22)}...` : n.name}
              </p>

              <img src="src\assets\image.jpg" alt="" className="w-full h-60 object-cover rounded-md my-2" />
              <div className="flex flex-1 items-center justify-between p-2">
                <p className="text-lg">
                  Technologies
                  <span className="block text-sm">
                    {n.techstack}
                  </span>
                </p>
                <a href={n.git}>
                  <div>
                    <IoLogoGithub className="text-3xl cursor-pointer ml-auto"/>
                  </div>
                </a>
              </div>
          </div>
          
            ))}
          
        </section>

        <section className="flex flex-col items-center justify-center w-full my-24" id="contacts">
          <p className="text-2xl capitalize">follow me on other platforms</p>
          <div 
          className="flex flex-row items-center justify-center w-full mt-4 gap-4">
          {SocialLinks && SocialLinks.map(n=>(
             
              <motion.a  whileTap={{scale:0.7}}  key={n.id} href={n.link} className="w-20 md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                  {<n.iconSrc/>}
                  <p className="text-lg">{n.name}</p>
              </motion.a>
            
          ))}
          </div>
         

        </section>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App

// {
//   id: 1,
//   iconSrc: "IoLogoGithub className='text-textBase text-3xl cursor-pointer'",
//   name: "GitHub",
//   link: "#",
// },
// {
//   id: 2,
//   iconSrc: "IoLogoYoutube className='text-red-500 text-3xl cursor-pointer'",
//   name: "YouTube",
//   link: "#",
// },
// {
//   id: 3,
//   iconSrc:"IoLogoTwitter className='text-blue-500 text-3xl cursor-pointer'"  ,
//   name: "Twitter",
//   link: "#",
// },
// {
//   id: 4,
//   iconSrc: "IoLogoLinkedin className='text-blue-800 text-3xl cursor-pointer'",
//   name: "LinkedIn",
//   link: "#",
// },
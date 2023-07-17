import { useState } from "react"
import {IoMenu,IoLogoGithub} from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Project, SocialLinks , skill} from "./data";
import {AnimatePresence,motion} from 'framer-motion';
import myimage from './assets/image.jpg'

function App() {
  
  const [isActive, setisActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen h-full pb-20 flex-col bg-[#000000] justify-center items-center">
      <nav className=" w-full z-50 fixed insert-x-0 top-0 mb-20 flex justify-center items-center bg-black ml-auto" id="home">
        <div className="text-purple-600 w-[80%] px-8 py-3 rounded-lg flex justify-around items-center ">
          <p className=" w-full lg:px-10 mr-auto text-2xl text-purple-900 font-medium ">Suhani </p>
          <div className="hidden md:flex items-center justify-center gap-6 flex-1  mr-6 ">
            <a href="#home" className=" text-lg font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Home</a>
            <a href="#about" className="text-lg font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">About</a>
            <a href="#projects" className="text-lg  font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Projects</a>
            <a href="#contact" className="text-lg font-medium hover:text-purple-400 cursor-pointer duration-100 ease-in-out">Contact</a>
            {/* <motion.a 
            whileTap={{scale:0.9}}
            href="#" className="w-full md:w-auto relative inline-flex items-center justify-center overflow-hidden text-base  text-black rounded-lg group bg-gradient-to-br from-purple-500 to-slate-300 group-hover:from-purple-900 group-hover:to-slate-600 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-300/50 hover:dark:shadow-lg hover:dark:shadow-slate-800/80" >
            <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-100 rounded-md group-hover:bg-opacity-0">Download</span>
            </motion.a> */}
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
              {/* <a href="#" className=" p-0.5 mb-2 mr-2 md:w-auto relative inline-flex items-center justify-center overflow-hidden text-base  text-black rounded-lg group bg-gradient-to-br from-purple-500 to-slate-300 group-hover:from-purple-900 group-hover:to-slate-600 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-300/50 hover:dark:shadow-lg hover:dark:shadow-slate-800/80" onClick={()=>setisActive(false)} >
              <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-100 rounded-md group-hover:bg-opacity-0">Download</span>
              </a> */}

            </div>
          )}
        </div>
      </nav>
      
      <main className="w-[80%] mt-20 ">
        {/* About-section */}
        <section className="w-full lg:h-[520px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:my-24 mb-10 " id="about">
          
            <div className="w-full h-420 flex items-center justify-center">
              <div className=" w-375 h-420 rounded-lg bg-slate-500">
                <img className=" w-full h-full object-cover rounded-lg drop-shadow-2xl -right-4 top-4 " src={myimage} alt="" />
              </div>
            </div>
            
            <div className="flex h-420 items-center justify-center flex-col w-full gap-4">
                <div className=" flex flex-col gap-4">
                  <p className="text-6xl font-semibold text-purple-500 ">I'm <span className="font-bold text-6xl text-purple-600 ">Suhani Mohanty</span></p>
                  <p className="text-purple-300 text-lg">
B.Tech CSIT student, Web3 developer also researcher. With a passion for exploring emerging technologies, I specialize in Web3 development, particularly in smart contract development and decentralized applications. I also have experience in front-end development using React and occasionally work with Figma for design.</p>
                </div>
            </div>
        </section>
        {/* Experience section */}
        <section className="w-full rounded-xl py-10 flex justify-center flex-col items-center">
        <section className="bg-black-100 rounded-[20px]">
          <div className="bg-tertiary rounded-2xl sm:px-16 px-2 sm:py-16 min-h-[100px]">
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"> Experiences </h1></div>
        </section>
          <VerticalTimeline>
            {Experience &&
              Experience.map(n =>
              (
                <VerticalTimelineElement key={n.id} className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(228, 165, 255)', opacity:'100', color: '#000' }}
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
        
        <section className="bg-black-100 flex flex-col items-center justify-center w-full rounded-[20px]" id="projects">
          <div className="bg-tertiary rounded-2xl sm:px-16 px-2 sm:py-16 min-h-[100px] ">
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[20px]"> Projects </h1></div>
        </section>
        <section className="flex flex-wrap items-center justify-evenly my-10 gap-4" >
          
          {Project && Project.map(n=>
            (
            <div key={n.id} className="border p-5 border-zinc-400 rounded-xl min-w-[350px] md:max-w-[275px] hover:border-zinc-300 duration-100 ease-out text-slate-300  bg-black">
              <p className="text-lg text-purple-300 font-black uppercase text-center pt-2 " >
                {n.name.length>22 ? `${n.name.slice(0,22)}...` : n.name}
              </p>

              <div className=" h-64 object-cover rounded-md my-2 text-justify text-[17px] "> {n.des}</div>
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

        <section className="mt-12 bg-black-100 flex flex-col items-center justify-center w-full rounded-[20px]" id="Skill">
          <div className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]">
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"> Skills </h1></div>
        </section>
        <section className="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7" >
          
          {skill && skill.map(n=>
            (
            <div key={n.id} className=" bg-[#E4A5FF] p-10 rounded-3xl xs:w-[320px] w-full">
              <p className=" font-black text-[#761c9d]  tracking-wider text-[30px] bg-tertiary rounded-2xl " >
                {n.name.length>22 ? `${n.name.slice(0,22)}...` : n.name}
              </p>

              <div className="mt-4"> 
                <p className="text-black tracking-wider text-[18px]">{n.des}</p>
                </div>
            </div>
          
            ))}
          
        </section>

        <section className="bg-black-100 flex flex-col items-center justify-center w-full my-12 text-[#ffffff] rounded-[20px]" id="contact">
          <div className="bg-tertiary rounded-2xl sm:px-16 px-2 sm:py-16 min-h-[100px]">
            <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"> Contact me here </h1></div>
        
          <div 
          className="flex flex-row items-center justify-center w-full mt-4 gap-4">
          {SocialLinks && SocialLinks.map(n=>(
             
              <motion.a  whileTap={{scale:0.7}}  key={n.id} href={n.link} className="w-20 md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                  {<n.iconSrc/>}
                  <p className="text-lg">{n.name}</p>
              </motion.a>
            
          ))}
          
          </div>
          <div className="flex flex-col items-center justify-center w-full text-[#ffffff]"><h5 className="mt-5">Email - suhanimohanty402@gmail.com</h5>
          </div>
          </section>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App

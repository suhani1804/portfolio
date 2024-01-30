import React from 'react'
import myimage from "../assets/image.jpg";
const AboutMe = () => {
  return (
    <div>
      <section
            className="w-full lg:h-[520px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:my-24 mb-10"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className=" w-375 h-420 rounded-lg bg-slate-500">
                <img
                  className=" w-full h-full object-cover rounded-lg drop-shadow-2xl -right-4 top-4 "
                  src={myimage}
                  alt=""
                />
              </div>
            </div>

            <div className="flex h-420 items-center justify-center flex-col mt-12 sm:mt-4 md:mt-4 w-full gap-4">
              <div className=" flex flex-col gap-4">
                <p className="text-6xl font-semibold text-purple-500 ">
                  I'm{" "}
                  <span className="font-bold text-6xl text-purple-600 ">
                    Suhani Mohanty
                  </span>
                </p>
                <p className="text-purple-300 text-lg">
                  B.Tech CSIT student, Web3 developer also researcher. With a
                  passion for exploring emerging technologies, I specialize in
                  Web3 development, particularly in smart contract development
                  and decentralized applications. I also have experience in
                  front-end development using React and occasionally work with
                  Figma for design.
                </p>
              </div>
            </div>
          </section>
    </div>
  )
}

export default AboutMe

import React from 'react'
import { SocialLinks } from '../data'
import { motion } from 'framer-motion'

const ContactMe = () => {
  return (
    <div>
      <section
            className="bg-black-100 flex flex-col items-center justify-center w-full my-12 text-[#ffffff] rounded-[20px]"
            id="contact"
          >
            <div className="bg-tertiary rounded-2xl sm:px-16 px-2 sm:py-16 min-h-[100px]">
              <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                {" "}
                Contact me here{" "}
              </h1>
            </div>

            <div className="flex flex-row items-center justify-center w-full mt-4 gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.7 }}
                    key={n.id}
                    href={n.link}
                    className="w-20 md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {<n.iconSrc />}
                    <p className="text-lg">{n.name}</p>
                  </motion.a>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center w-full text-[#ffffff]">
              <h5 className="mt-5">Email - suhanimohanty402@gmail.com</h5>
            </div>
          </section>
    </div>
  )
}

export default ContactMe

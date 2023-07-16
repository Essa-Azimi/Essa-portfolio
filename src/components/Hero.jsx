import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
          overflow-hidden bg-gradient-to-b from-[#28282B] to-[#0f0e0f]">
        <div
          className={`absolute inset-0 cursor-default
          max-w-7xl mx-auto flex flex-row items-center justify-between text-center
          gap-3`}>
          <motion.div
            animate={{ translateY: -15, opacity: 1 }}
            transition={{
              type: 'tween',
              delay: 0.8,
              duration: 1,
              ease: 'easeOut'
            }}
            className='absolute w-full opacity-0
              flex justify-center items-center'>
            <motion.h1   
              className='sm:leading-[450%] leading-[350%] tracking-[0.2em]'>
              <motion.span className='text-sm font-sans tracking-[0.25em] text-[#b7ab98]'>
                Essa azimi
              </motion.span>
              <motion.span
                id='text1'
                className="sm:text-[7vw]
                text-[#b7ab98] text-[15vw] font-avantGarde
                font-black uppercase">
                  Let me handle<br/>
              </motion.span>
              <motion.span
                id='text2'
                className="sm:text-[7vw] 
                text-[#eb5939] text-[15vw] font-avantGarde
                font-black uppercase">
                <motion.span className='text-[#b7ab98]'>the </motion.span>frontend<br/>
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>

        <div
          className="absolute xs:bottom-[7%] bottom-[7%] w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="sm:w-[32px] sm:h-[53px] w-[25px] h-[47px] rounded-3xl border-2 
            border-[#b7ab98] flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-[#eb5939] mb-1"
              />
            </div>
          </a>
        </div>

      </section>
    </>
  );
};

export default Hero;
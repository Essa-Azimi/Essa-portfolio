import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ButtonMailto from './ButtonMailto';

const Contact = () => {
  return (
    <div className='relative flex sm:flex-row flex-col w-full h-full mx-auto 
      overflow-hidden mb-16 mt-0'>
      <div
        className="flex flex-col flex-1 ">
        <p className=' font-avantGarde text-[12px] text-[#b7ab98] mb-8 tracking-widest font-bold'>
          Get in touch
        </p>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className=" bg-[#171818] xs:p-10 p-5 rounded-2xl">
          <div className=' font-avantGarde font-bold text-[#b7ab98] text-[25px] cursor-default'>
            <p className='relative'>
              <span className='text-[#eb5939]'>
                <ArrowRightIcon />
              </span>
              
              <ButtonMailto  label="E-Mail" mailto="mailto:azimiessa220@gmail.com" /><br />
              {/* <a href='https://mail.google.com/mailto:azimiessa220'>
                <span className='text-[12px] z-10 absolute ml-6 text-[#564d3f] hover:text-[#b7ab98]'>
                  azimiessa220@gmail.com
                </span>
              </a> */}
            </p>
            <p className='relative mt-5'>
              <span className='text-[#eb5939]'>
                <ArrowRightIcon />
              </span>Phone<br/>
              <span className='text-[12px] ml-6 z-10 absolute text-[#564d3f] hover:text-[#b7ab98]'>
                +92 349 3949 330
              </span>
            </p>
            <p className='relative mt-5'>
              <span className='text-[#eb5939]'>
                <ArrowRightIcon />
              </span>Instagram<br/>
              <a href='https://instagram.com/theazimi1' target='_blank'>
                <span className='text-[12px] z-10 absolute ml-6 text-[#564d3f] hover:text-[#b7ab98]'>
                  theazimi1
                </span>
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

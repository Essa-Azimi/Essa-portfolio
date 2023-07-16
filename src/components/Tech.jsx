import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div className='xs:p-10 p-5 '>
      <div className='text-center'>
        <motion.div variants={textVariant()}>
          <p className='font-avantGarde font-bold tracking-wider text-[#b7ab98] text-[30px] cursor-default'>My skills</p>
        </motion.div>
      </div>
      <div className="flex  flex-wrap justify-center gap-8 mt-14">

        {technologies.map((technology) => (
          <div className="w-8 h-8" key={technology.name}>
            <img src={technology.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');

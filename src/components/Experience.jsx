import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component';
  import { motion } from 'framer-motion';
  import 'react-vertical-timeline-component/style.min.css';
  import { styles } from '../styles';
  import { experiences } from '../constants';
  import { SectionWrapper } from '../hoc';
  import { textVariant } from '../utils/motion';
  
  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: '#eaeaec',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      contentArrowStyle={{
        borderLeft: '7px solid  #232631',
      }}
      date={
        <div>
          <h3 className="text-[#eb5939] text-[10px] xs:text-[14px] font-bold font-beckman">
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: '#b7ab98' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-jetLight xs:text-[20px] text-[14px] font-bold font-beckman">
          {experience.title}
        </h3>
        <p
          className="text-[#b7ab98] xs:text-[24px] text-[16px] font-semibold font-overcameBold tracking-[1px]"
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
  
  const Experience = () => {
    return (
      <div className='relative flex sm:flex-col py-10 p-2 xs:p-8 flex-col w-full h-full mx-auto 
      overflow-hidden'>
        <motion.div variants={textVariant()} className='justify-center'>
          <p className={`${styles.sectionSubText} `}>
            What I've done so far...
          </p>
          <h2 className={`${styles.sectionHeadText} `}>
            Experiences.
          </h2>
        </motion.div>
  
        <div className="mt-2 flex flex-col justify-center">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default SectionWrapper(Experience, 'work');
  
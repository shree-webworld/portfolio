import react from '../public/skills_image/react.svg';
import SkillsCard from './SkillsCard.js';
import {skillsData} from '../data/skillsData.js';
import Marquee from "react-fast-marquee";

export default function Skills()
{
  return(<>
    <section className="bg-[#212020]" style={{fontFamily: "'Poppins', sans-serif"}}>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#3FC236] text-center">
            Skills
          </h1>
          <Marquee
                                  gradient={false}
                                  speed={80}
                                  pauseOnHover={true}
                                  pauseOnClick={true}
                                  delay={0}
                                  play={true}
                                  direction="left"
          >
          {
              skillsData.map(skill => (
                                        <SkillsCard
                                            key={skill.id}
                                            id={skill.id}
                                            title={skill.title}
                                            img_src={skill.img_src}
                                        />
                                      )
                              )
          }
          </Marquee>
    </section>

        </>)
}

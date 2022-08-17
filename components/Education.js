import Img from 'next/image'
import eduGreen from '../public/profile_image/eduGreen.svg'
import EducationProps from './EducationProps'

export default function About()
{
  return(<>
    <section className="bg-[#212020]" style={{fontFamily: "'Poppins', sans-serif"}}>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <Img
              className="absolute inset-0 object-cover w-full h-full"
              src={eduGreen}
              alt="green_boy"
              width="800"
              height="800"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-6xl text-[#3FC236] mb-4">Education</h2>

            <EducationProps title="Secondary Education" institute="Alphonsa High School, Pune." />
            <EducationProps title="Higher Secondary Education" institute="Nav Maharashtra College, Pune." />
            <EducationProps title="Bachelor of Computer Science" institute="Indira College of Commerce and Science, Pune." />
            <EducationProps title="Master of Computer Science" institute="Pratibha College of Commerce and Science, Pune." />

          </div>
        </div>
      </div>
    </section>

        </>)

}

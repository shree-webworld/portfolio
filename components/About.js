import Img from 'next/image'
import green_boy from '../public/profile_image/greenTheme-boy.svg'


export default function About()
{
  return(<>
    <section className="bg-[#212020]" id="about">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <Img
              className="absolute inset-0 object-cover w-full h-full"
              src={green_boy}
              alt="green_boy"
              width="500"
              height="500"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-6xl text-[#3FC236]">Who I Am</h2>

            <p className="mt-16 text-gray-300 text-xl indent-8">
              {"My name is Shreedhar. I'm a full stack developer based in Pune, India."}
            </p>

            <p className="mt-4 text-gray-300 text-xl indent-8">
              {"As a MERN-Stack web developer, have built website with ReactJS, Node.js, MongoDB and ExpressJS. I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I always focus on learning new technology. "}
            </p>

            <p className="mt-4 text-gray-300 text-xl indent-8">
              {"My goal is to become A World-Class Professional Web Developer."}
            </p>

          </div>
        </div>
      </div>
    </section>

        </>)

}

import Img from 'next/image';
import Typewriter from 'typewriter-effect';
import profile from '../public/profile_image/profile.png';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Link from 'next/link';


export default function Main()
{
  const router = useRouter();


    return(<>
      <Head>
            <title>Shreedhar Sawant - Portfolio</title>
       </Head>
      <div className="hero min-h-screen bg-[url('../public/profile_image/layered-waves-haikei.svg')]" style={{fontFamily: "'Poppins', sans-serif"}}>
        <div className="hero-content lg:flex-row">
          <div className="avatar">
            <Img src= {profile}
                  className="max-w-sm mask mask-circle shadow-2xl" width="400" height="400"/>
           </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-400 mx-5">{" Hi 👋, i am "}</h1>
            <p className="py-2 text-4xl font-semibold text-white mx-5">Shreedhar Sawant</p>
            <div className="py-2 text-3xl font-semibold text-[#3FC236] mx-5">
              <Typewriter options={
                                    {
                                      autoStart: true ,
                                      loop: true,
                                      delay: 75,
                                      pauseFor: 2000,
                                      cursor: '✍🏼',
                                      deleteSpeed: 100,
                                      strings:[
                                                "A Front-End Developer.",
                                                "A Back-End Developer.",
                                                "A MERN Developer.",
                                                "A Full-Stack Developer."
                                              ]
                                    }
                                  }
                          />
            </div>
            <button className="mx-5 sm:my-5 px-6 btn btn-outline rounded-full border-[#3FC236] border-2 text-[#3FC236] text-lg hover:bg-[#3FC236] hover:text-[#212020]">
             <Link href="https://docs.google.com/document/d/1_CAymcBo2STOBRZeq_uvy6B1BfGVq8MJMawMttV7r6I/edit?usp=sharing">
              <a target="_blank" download>
                Download CV
              </a>
             </Link>
            </button>
            <button className="mx-5 px-6 btn bg-[#3FC236] rounded-full  border-2 text-[#212020] text-lg hover:bg-[#212020] hover:text-[#3FC236] hover:border-[#3FC236]"
                    onClick ={ () => router.push('/projects')}
            >
              See My Works
            </button>
          </div>
        </div>
      </div>
          </>)
}

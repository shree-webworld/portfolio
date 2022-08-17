import {useRouter} from 'next/router';
import Head from 'next/head';
import ProjectCards from '../components/ProjectCards';



export default function Projects()
{
  const router = useRouter();

  return(<>
    <Head>
          <title>Shreedhar Sawant | Projects</title>
     </Head>

    <div className="navbar bg-[#3FC236]">
      <div className="navbar-start">
        <button className="btn btn-circle  glass normal-case text-xl ml-5 mt-3" onClick ={ () => router.push('/')}>
          <i className="fa-solid fa-house text-[#212020] hover:text-white"></i>
        </button>
      </div>
    </div>
    <div className="text-center bg-[#3FC236] pb-20" style={{fontFamily: "'Poppins', sans-serif"}}>
        <h1 className="text-7xl font-black">Projects</h1>
    </div>

        <ProjectCards />
        </>)
}

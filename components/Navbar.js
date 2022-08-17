import {useRouter} from 'next/router';
import {Link} from 'react-scroll';

export default function Navbar()
{
  const router = useRouter();

  return (<>

    <div className="navbar bg-[#3FC236]">

      <div className="flex-1 ml-10">
        <h1 className=" text-4xl font-semibold" style={{fontFamily: "'Sacramento', cursive"}}>
          {" < Shreedhar Sawant  />"}
        </h1>
      </div>

      <div className="flex-none mr-3">

        <div className="dropdown dropdown-hover dropdown-end" style={{fontFamily: "'Poppins', sans-serif"}}>
          <button tabIndex="0" className="btn btn-circle  glass">
            <i className="ri-menu-fill text-2xl"></i>
          </button>
          <ul tabIndex="0" className="dropdown-content menu p-2 bg-[#212020] text-[#3FC236] text-xl rounded-box w-52 space-y-5 shadow-lg shadow-[#3FC236]">
              <li className="hover:bg-[#3FC236] hover:text-[#212020]">
                <Link to="contacts" spy={true} smooth={true} offset={50} duration={1000} delay={100}>
                  <i className="ri-phone-fill"></i>  Contacts
                </Link>
              </li>
              <li className="hover:bg-[#3FC236] hover:text-[#212020]">
                <p onClick ={ () => router.push('/projects')}>
                  <i className="bi bi-app-indicator"></i>  Projects
                </p>
              </li>
              <li className="hover:bg-[#3FC236] hover:text-[#212020]">
                <Link to="about" spy={true} smooth={true} offset={50} duration={1000} delay={100}>
                  <i className="fa-solid fa-user-large"></i> About
                </Link>
              </li>
            </ul>
        </div>

      </div>

    </div>

        </>)
}

import useSWR from 'swr';
import Preloader from './Preloader';
import {useState, useEffect} from "react";
import Link from 'next/link';
import Img from 'next/image';



import axios from 'axios';
const fetcher = url => axios.get(url)
                              .then(res => res.data)
                              .catch((error) =>{
                                                  console.error(error);
                                                  if(confirm("Error status "+error.response.data.cod+" - "+error.response.data.message)== true)
                                                  {
                                                      window.location.reload();
                                                   }else{
                                                          window.location.reload();
                                                        }
                                                }
                                    );




export default function ProjectCards()
{
  /*const [projectDetails, setProjectDetails] = useState([]);

  const getProjectDetails = async () => {
                                            const response = await axios.get("http://localhost:3000/api/projects_api");
                                            console.log(response.data);
                                            setProjectDetails(response.data);
                                        }

                                        useEffect(() => {
                                                            getProjectDetails();
                                                        },[]
                                                 );*/

    let projecturl = process.env.NEXT_PUBLIC_PROJECT_URL;
    // console.log('projecturl ==> '+projecturl);

    const { data, error } = useSWR(`${projecturl}`, fetcher);
    if (!data) return <div><Preloader /></div>
    if (error) return <div>alert(error)</div>


  return(<>
    <section className="text-gray-600 body-font bg-[#212020]">

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {
           data.map((currentElement,index) =>{
                                                return(
                                                        <div className="p-4 md:w-1/3" key = {currentElement._id}>
                                                         <div className="card w-96 h-full bg-[#3FC236] ">
                                                            <Img src= {currentElement.img_url} alt="projects" width="250" height="250" quality="100"/>
                                                          <div className="card-body ">
                                                            <h2 className="card-title text-xl font-bold text-white" style={{fontFamily: "'Poppins', sans-serif"}}>{currentElement.project_title}</h2>
                                                            <p className="text-white text-lg indent-8">{currentElement.project_description}</p>
                                                            <div className="grid grid-cols-2">
                                                              <Link href={currentElement.web_url}>
                                                                <a className="inline-flex items-center md:mb-2 lg:mb-0" target="_blank">
                                                                  <i className="fa-regular fa-circle-play text-4xl text-white hover:text-[#212020]"></i>
                                                                </a>
                                                              </Link>
                                                              <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                                                                <Link href={currentElement.github_url}>
                                                                  <a target="_blank" className="inline-flex items-center md:mb-2 lg:mb-0">
                                                                    <i className="fa-solid fa-code text-2xl text-white hover:text-[#212020]"></i>
                                                                  </a>
                                                                </Link>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      );
                                              }
                    )

          }

          </div>
        </div>
      </section>

        </>);
}

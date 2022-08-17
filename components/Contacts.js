import Link from 'next/link';
import {useForm} from 'react-hook-form';
import axios from "axios";



export default function Contacts()
{

  const { register, handleSubmit, reset, setFocus, setError, getValues, formState: {errors}  } = useForm();
  let contacturl = process.env.NEXT_PUBLIC_CONTACT_URL;
  // console.log("contacturl ==> "+contacturl);

  const onSubmit = async () =>{
                                  try
                                  {
                                    const contactValues = getValues();
                                    console.log(contactValues);

                                    const res = await axios.post(`${contacturl}`, contactValues);

                                      console.log(res);
                                      reset();
                                      window.alert(res.data.message);

                                  } catch (e)
                                    {
                                      console.error(e);
                                      window.alert(e.response.data.error);
                                    }
                              }


  return(<>
    <div className="bg-[#212020]" id="contacts">
    <section className="px-4 py-24 mx-auto max-w-7xl bg-[#212020]" style={{fontFamily: "'Poppins', sans-serif"}}>
      <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
        <div className="col-auto text-center md:col-span-7 lg:text-left space-y-10">
          <h1 className="mb-16 text-[#3FC236] text-3xl font-bold leading-tight md:text-5xl md:leading-none tracking-none md:tracking-tight">Contacts</h1>

          <div className="text-xl flex flex-row space-x-5">
              <i className="bi bi-envelope-open text-[#212020] bg-[#3FC236] p-2 mask mask-circle"></i>
              <h1 className="text-white text-2xl">shreedharsawant3@gmail.com</h1>
          </div>
          <div className="text-xl flex flex-row space-x-5">
              <i className="bi bi-telephone text-[#212020] bg-[#3FC236] p-2 mask mask-circle"></i>
              <h1 className="text-white text-2xl">+91 8149478493</h1>
          </div>
          <div className="text-xl flex flex-row space-x-5">
              <i className="bi bi-geo-alt text-[#212020] bg-[#3FC236] p-2 mask mask-circle"></i>
              <h1 className="text-white text-2xl">Pune, Maharashtra, India</h1>
          </div>

          <div className="text-xl flex flex-row space-x-5">
            <Link href="https://github.com/shree-webworld">
              <a target="_blank"><i className="bi bi-github text-[#212020] bg-[#3FC236] p-3 mask mask-circle hover:bg-[#212020] hover:text-[#3FC236]"></i></a>
            </Link>
            <Link href="https://www.linkedin.com/">
              <a target="_blank"><i className="bi bi-linkedin text-[#212020] bg-[#3FC236] p-3 mask mask-circle hover:bg-[#212020] hover:text-[#3FC236]"></i></a>
            </Link>
            <Link href="https://www.facebook.com/shreedharsawant/">
              <a target="_blank"><i className="bi bi-facebook text-[#212020] bg-[#3FC236] p-3 mask mask-circle hover:bg-[#212020] hover:text-[#3FC236]"></i></a>
            </Link>
            <Link href="https://www.instagram.com/shreedhar.sawant33/">
              <a target="_blank"><i className="bi bi-instagram text-[#212020] bg-[#3FC236] p-3 mask mask-circle hover:bg-[#212020] hover:text-[#3FC236]"></i></a>
            </Link>
          </div>
        </div>

        <div className="col-auto md:col-span-4">
          <form className="form-control mb-6 border-0 rounded-lg shadow-xl card space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-white bg-transparent rounded-lg border-4 border-[#3FC236] appearance-none dark:text-white dark:border-[#3FC236] dark:focus:border-[#3FC236] focus:outline-none focus:ring-0 focus:border-[#3FC236] peer" placeholder=" "
                     name="user_name" autoComplete="off" {...register("user_name", { required: true, minLength:2, pattern: /[A-Za-z]/  })}/>
              <label htmlFor="floating_outlined" className="absolute text-lg text-[#3FC236] dark:text-[#3FC236] duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#212020] dark:bg-[#212020] px-2 peer-focus:px-2 peer-focus:text-[#3FC236] peer-focus:dark:text-[#3FC236] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
          </div>
          <div className="relative">
              <input type="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-white bg-transparent rounded-lg border-4 border-[#3FC236] appearance-none dark:text-white dark:border-[#3FC236] dark:focus:border-[#3FC236] focus:outline-none focus:ring-0 focus:border-[#3FC236] peer" placeholder=" "
                      name="user_email" autoComplete="off" {...register("user_email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g })}/>
              <label htmlFor="floating_outlined" className="absolute text-lg text-[#3FC236] dark:text-[#3FC236] duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#212020] dark:bg-[#212020] px-2 peer-focus:px-2 peer-focus:text-[#3FC236] peer-focus:dark:text-[#3FC236] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
          </div>
          <textarea className="placeholder-[#3FC236] drop-shadow-none rounded-lg border-[#3FC236] border-4 bg-[#212020] text-white w-full text-lg h-40 indent-8 normal-case focus:border-[#3FC236]"
                    placeholder="Message" name="user_message" autoComplete="off" {...register("user_message", { required: true, minLength:2 })}

          >
          </textarea>
            <button type="submit" className="btn btn-outline w-full py-2 font-semibold rounded-lg border-[#3FC236] border-2 text-[#3FC236] text-lg hover:bg-[#3FC236] hover:text-[#212020]">
              Send&nbsp;&nbsp; <i className="bi bi-send text-lg"></i>
            </button>

          </form>
        </div>
      </div>
    </section>
    </div>
        </>)
}

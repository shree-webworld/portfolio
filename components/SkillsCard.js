import Img from 'next/image';

export default function SkillsCard({img_src, title, ...props})
{
  return(<>

      <div className="card mx-5 my-28 w-44 bg-[#212020] shadow-lg shadow-[#3FC236] hover:shadow-2xl hover:shadow-[#3FC236]">
        <figure className="px-10 pt-10">
          <Img src={img_src} alt={title} width="100" height="100" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>

        </>)
}

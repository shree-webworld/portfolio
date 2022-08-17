import ScrollToTop from "react-scroll-to-top";


export default function Footer()
{
  return(<>
            <footer className="footer footer-center p-10 bg-[#212020] text-primary-content ">
              <div>
                <p className="font-bold text-lg tracking-wider" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Made with <i className="bi bi-heart-fill text-[#3FC236]"></i> by Shreedhar
                </p>
              </div>
              <ScrollToTop smooth
                           component={
                                        <p style={{ color: "#212020" }} className="animate-bounce">                                        
                                          <i className="fa-solid fa-angle-up text-2xl text-bold"></i>
                                        </p>
                                     }
              />
            </footer>
        </>)
}

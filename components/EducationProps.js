
const EducationProps = (
                      {
                        title, institute, ...props
                      }
                   ) => {
                            return(<>
                                    <div className="bg-[#2F702A] py-4 rounded-xl mt-4">
                                      <i className="bi bi-mortarboard-fill bg-[#3FC236] mask mask-circle p-2 text-xl text-white mx-4 mb-4"></i>
                                      <h3 className="mx-4 mt-2 text-2xl font-bold text-white">{title}</h3>
                                      <p className="mx-4 text-xl font-semibold text-gray-300">
                                        {institute}
                                      </p>
                                    </div>
                                  </>)
                        }


export default EducationProps

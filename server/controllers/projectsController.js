import ProjectsModel from "../models/projectSchema";



const get_projects = async (req, res) =>{
                                           try
                                           {
                                               const get_projects_details = await ProjectsModel.find();
                                                res.status(200).json(get_projects_details);
                                           }catch(e)
                                            {
                                                console.error(e);
                                                res.status(400).json({success: false, error:"Didn't get projects data" });
                                            }
                                        }


export { get_projects };

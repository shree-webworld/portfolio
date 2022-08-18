
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
                                              project_title:
                                              {
                                                type: String,
                                                required:[true, "Project title is required"],
                                                trim:true,
                                                minLength:2,
                                                maxLength:[50, "Name must be max 50 charcters long"]
                                              },
                                              project_description:
                                              {
                                                type: String,
                                                required:[true, "Project decription is required and must be unique"],
                                                trim:true,
                                                minLength:2,
                                              },
                                              web_url:
                                              {
                                                type: String,
                                                required:[true, "Website url is required"],
                                                trim:true,
                                                unique:true
                                              },
                                              github_url:
                                              {
                                                type: String,
                                                required:[true, "Github url is required"],
                                                trim:true,
                                                unique:true
                                              },
                                              img_url:
                                              {
                                                type: String,
                                                required:[true, "Image url is required"],
                                                trim:true,
                                                unique:true
                                              }
                                           });

export default mongoose.models.Project_details || mongoose.model('Project_details', projectSchema);

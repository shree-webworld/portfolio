import nc from "next-connect";
import {get_projects} from "../../../server/controllers/projectsController";
import connectDB from "../../../server/utils/connectDB";

const handler = nc();
connectDB();


handler.get( get_projects );



export default handler;

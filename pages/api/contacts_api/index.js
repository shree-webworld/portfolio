import nc from "next-connect";
import {save_contacts, get_contacts} from "../../../server/controllers/contactsController";
import connectDB from "../../../server/utils/connectDB";

const handler = nc();
connectDB();

handler.post( save_contacts );
handler.get( get_contacts );



export default handler;

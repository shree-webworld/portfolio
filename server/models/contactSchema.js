
import mongoose from "mongoose";
//const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
                                              user_name:
                                              {
                                                type: String,
                                                required:[true, "Name is required"],
                                                trim:true,
                                                minLength:2,
                                                maxLength:[50, "Name must be max 50 charcters long"]
                                              },
                                              user_email:
                                              {
                                                type: String,
                                                required:[true, "Email is required and must be unique"],
                                                trim:true,
                                                unique:true
                                              },
                                              user_message:
                                              {
                                                type: String,
                                                required:[true, "Message is required"],
                                                trim:true,
                                              },
                                         },{
                                              timestamps:true
                                           }
                                         );

export default mongoose.models.Contacts_messages || mongoose.model('Contacts_messages', contactSchema);

//without ES6
//module.export = mongoose.models.Contacts_messages || mongoose.model('Contacts_messages', contactSchema);

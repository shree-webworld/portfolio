import ContactModel from "../models/contactSchema";


const save_contacts = async (req,res) =>{
                                                // res.status(200).json({message: "Success", data: "contactsController done"});
                                                try
                                                {
                                                   const {user_name, user_email, user_message} = req.body;
                                                    const contact_details = new ContactModel({user_name, user_email, user_message});
                                                    await contact_details.save();

                                                    console.log(`contact_details saved successfully`);
                                                    res.status(201).send({message:"Message saved  successfully"});

                                                }catch (error)
                                                  {
                                                      console.log(error);
                                                      res.status(400).json({success: false, error:"Contacts not saved" });
                                                  }
                                             };

const get_contacts = async (req, res) =>{
                                           try
                                           {
                                               const get_contacts_details = await ContactModel.find();
                                                res.status(200).json(get_contacts_details);
                                           }catch(e)
                                            {
                                                console.error(e);
                                                res.status(400).json({success: false, error:"Didn't get contacts data" });
                                            }
                                        }


export { save_contacts, get_contacts };

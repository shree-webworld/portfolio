import mongoose from 'mongoose';

const connectDB = async () =>{
                                  try
                                  {
                                      await mongoose.connect(process.env.MONGO_URI);
                                      console.log(`connected to mongodb ${mongoose.connection.host} successfully`);

                                  }catch (e)
                                    {
                                        console.log(`Database connection error ${e}`);
                                    }
                             }

module.exports = connectDB;

import {useRouter} from 'next/router';
import {useEffect} from "react";
import Main from "../components/Main";


export default function Custom404()
{
  const router = useRouter();

  useEffect(() => {
                       setTimeout(() => {
                                          router.push("/")
                                        }, -2000);
                  }
            );


  return(<>
              <Main />
        </>)
}


//https://res.cloudinary.com/shreeproject/image/upload/v1660385496/projectimage/greatnews24x7.netlify.app__fyjici.png
//https://res.cloudinary.com/shreeproject/image/upload/v1660385496/projectimage/appadda-express.herokuapp.com__mq0ubt.png
//https://res.cloudinary.com/shreeproject/image/upload/v1660385496/projectimage/corona-trackerr-app.netlify.app__fjju1v.png
//https://res.cloudinary.com/shreeproject/image/upload/v1660385495/projectimage/wise-quotes.herokuapp.com__t1icqy.png
//https://res.cloudinary.com/shreeproject/image/upload/v1660385495/projectimage/mausamwebapp.herokuapp.com__vdzbym.png

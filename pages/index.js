import Main from '../components/Main'
import Contacts from '../components/Contacts'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar';

export default function Home()
{
  return (<>
            <Navbar />
            <Main/>
            <About />
            <Education />
            <Skills />
            <Contacts />
        </>)
}

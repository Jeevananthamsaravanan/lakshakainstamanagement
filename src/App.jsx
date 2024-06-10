import { Fragment , Suspense ,lazy } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

const Home = lazy(()=>import('./Pages/Home'));
const About = lazy(()=>import('./Pages/About'));
const SkillDevelopment = lazy(()=>import('./Pages/SkillDevelopment'));
const Contact = lazy(()=>import('./Pages/Contact'));

function App() {
  
  return (
   <Suspense fallback={<div className='flex items-center justify-center h-[100vh] w-[100%] font-bold text-[20px]'> Loading...</div>}>
    
     
    <BrowserRouter>
    <Nav/>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about-us" element={<About/>} />
           <Route path="/skill-development" element={<SkillDevelopment/>} />
           <Route path="/contact-us" element={<Contact/>} />
         </Routes>
         <Footer/>
    </BrowserRouter>   

  

   </Suspense>
  )
}

export default App

import './App.css'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'
import Banner from './Page/Banner'
import Blog from './Page/Blog'
import Cards from './Page/Cards'
import Contact from './Page/Contact'
import Details from './Page/Details'
import FindService from './Page/FindService'
import FooterPoster from './Page/FooterPoster'

import Poster from './Page/Poster'
import Services from './Page/Services'
import Team from './Page/Team'
import Work from './Page/Work'

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Cards/>
    <Poster/>
   <Services/>
   <FindService/>
   <Work/>
   <Details/>
   <Team/>
   <Blog/>
   <FooterPoster/>
   <Contact/>
    <Footer/>
      
    </>
  )
}

export default App

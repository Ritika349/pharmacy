import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeScreen from './components/Home/Home.jsx';
import Products from './components/products/Products'
import LogIn from './LogIn.jsx';
import Footer from './components/Footer/Footer';
import ContactScreen from './components/Contact/ContactScreen.jsx';
const App = () => {
  // const bg="https://media1.giphy.com/media/qTDUJ3I8TXSNETVChF/giphy.webp?cid=ecf05e471f31qivrv8v5l870b0wrbfs28sxg3107z42qs8zh&ep=v1_gifs_search&rid=giphy.webp&ct=g"
//  const bg="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHlkdWs1Nzk0cnE4OWszYTRibzVoOGt6dTlkanV1azF0NGVhZXpzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/p9S3Iwe8N1WR9MUJh8/giphy.gif"
  return (
    <div>
     <div className='h-full w-full' >
       {/* style={{backgroundImage:`url(${bg})` ,backgroundPosition:'center',backgroundSize:'cover'}}> */}
      <BrowserRouter >
          <Navbar/>
      <Routes >
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/contact" element={<ContactScreen/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/product" element={<Products/>}/> 
      </Routes>
      
       </BrowserRouter>
       
      
     </div>

    <Footer/>
    </div>
  )
}

export default App
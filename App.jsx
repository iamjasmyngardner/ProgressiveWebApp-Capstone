import Header from './Header.jsx'
import Footer from './Footer.jsx'
import StreamCard from './StreamCard.jsx'
import MoviesCard from './MoviesCard.jsx'
import CartCard from './CartCard.jsx'
import Intro from './Intro.jsx'




function App() {

    return(
      <>
      <Header/>
      <Intro/>

      <div className="card-container">
        <StreamCard/>
        <MoviesCard/>
        <CartCard/>
      </div>
     
      <Footer/>
      </>
    );
}

export default App

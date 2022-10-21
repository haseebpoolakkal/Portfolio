import Footer from './pages/Footer';
import Contacts from './pages/Contacts';
import Content from './pages/Content';
import Header from './pages/Header';
import './App.css'

const App = () => {
  return (
    <>
      <div className='h-full bg-primary py-16 md:py-0' id='profile'>
        <Header />
      </div>
      <div className='h-full bg-secondary py-16 md:py-0'>
        <Content />
      </div>
      <div className='h-full bg-primary py-16 md:py-0' id='contact'>
        <div className='h-screen flex justify-center items-center'>
          <Contacts />
        </div>
      </div>
      <div className='h-full bg-secondary py-5'>
        <Footer />
      </div>
    </>
  );
}

export default App;

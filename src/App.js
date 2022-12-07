import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div className='container'>
      <Header titulo='Galería Imagenes' />
      <Cards
        img='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name='Pelo corto'
        texto='Cachorro de 2 meses de edad'>
      </Cards>
      <Cards
        img='https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name='Visla'
        texto='Cachorros de 8 meses de edad'>
      </Cards>
      <Cards
        img='https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name='Pastor Alemán'
        texto='Cachorro de 11 meses de edad'>
      </Cards>
      <Footer />
    </div>
  );
}

export default App;
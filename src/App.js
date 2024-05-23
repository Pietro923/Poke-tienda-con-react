import logo from './logo.svg';
import './App.css';
import Caja from './componentes/caja';
import Caja2 from './componentes/caja2';
import Caja3 from './componentes/caja3';
import Caja4 from './componentes/caja4';
import Footer from './componentes/footer';
import MySlider from './componentes/slider';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Caja />
      <Caja2 />
      <Caja3 />
      <Caja4 />
      <MySlider/>
      <Footer />
    </div>
  );
}

export default App;
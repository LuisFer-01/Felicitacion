import Footer from './components/Footer';
import Hero from './components/Hero';
import Message from './components/Message';
import Wishes from './components/Wishes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Message />
      <Wishes />
      <Footer />
    </div>
  );
}

export default App;
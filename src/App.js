import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header className="App">
        Homepage
      </Header>
      <Nav />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
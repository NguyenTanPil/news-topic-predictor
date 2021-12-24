import Body from './components/Body';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ToTop from './components/ToTop';
import GlobalStyle from './GlobleStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
      <Body />
      <Footer />
      <Copyright />
      <ToTop />
    </div>
  );
}

export default App;

import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import { GlobalStyle } from "./GlobalStyles";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
  <>
  <GlobalStyle />
  <Home />
  <Projects />
  <About />
  <Skills />
  <Footer />
  </>
  );
}

export default App;

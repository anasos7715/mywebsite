
// App.js - المكون الرئيسي للتطبيق مع استيراد جميع الأقسام
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // استيراد animate.css محليًا
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills3D from './components/Skills3D';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills3D />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import { 
  Header, 
  Hero, 
  About, 
  Projects, 
  Skills, 
  Contact, 
  Footer 
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

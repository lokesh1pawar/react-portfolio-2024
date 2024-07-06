import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';

function App() {
  return (
    <>
    <div>

    {/* Nav Section  */}
    <Navbar />

    {/* Home Section  */}
    <Home/>

    {/* Features Section  */}
    <Features/>

    {/* Resume Section  */}
    <div id="resume" className="min-h-screen flex items-center justify-center bg-gray-400">
      <h1 className="text-4xl font-bold">Resume Section</h1>
    </div>

    {/* Testimonial Section  */}
    <div id="testimonial" className="min-h-screen flex items-center justify-center bg-gray-500">
      <h1 className="text-4xl font-bold">Testimonial Section</h1>
    </div>

    {/* Clients Section  */}
    {/* <div id="clients" className="min-h-screen flex items-center justify-center bg-gray-600">
      <h1 className="text-4xl font-bold">Clients Section</h1>
    </div> */}

    {/* Blog Section  */}
    <div id="blog" className="min-h-screen flex items-center justify-center bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Blog Section</h1>
    </div>

    {/* Contact Section  */}
    <div id="contacts" className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white">Contacts Section</h1>
    </div>
  </div>
  </>
  );
}

export default App;

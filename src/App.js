import './App.css';
import AboutME from './component/home/aboutme/AboutME';
import ContactUs from './component/home/contact/ContactUs';
import Future from './component/home/future/Future';
import Home from './component/home/home/Home';
import Nav from './component/home/navbar/Nav';
import Navbar from './component/home/navbar/Navbar';
import Project from './component/home/project/Project';


function App() {
  return (
    <div>
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <Home></Home>
      <AboutME></AboutME>
      <Project></Project>
      <Future></Future>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import SelectOption from './Components/Option_page/SelectOption';
import Footer from './Components/Footer/Footer';
import WomenPage from './Components/WomenPage/WomenPage';
import MenPage from './Components/MenPage/MenPage';
import { Prac } from './Components/Prac/Prac';


function App() {
  return (
    <div className="App">
        {/* <Navbar/>  */}
        {/* <FrontPage/> */}
        {/* <SelectOption/> */}
        {/* <Footer/> */}
        {/* <WomenPage/> */}
        {/* <MenPage/> */}
        <Prac/>
    </div>
  );
}

export default App;

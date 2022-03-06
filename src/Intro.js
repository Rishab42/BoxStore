import Home from './comp/Home';
import About from './comp/About';
import Mission from './comp/Mission';
import Product from './comp/Product';
import Service from './comp/Service';
import Contact from './comp/Contact';
import Account from './comp/Account';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Intro(){
    return(
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Mission" element={<Mission />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Account" element={<Account />} />
              </Routes>
            </BrowserRouter>
    )
}

export default Intro;
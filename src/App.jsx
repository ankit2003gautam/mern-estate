import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-out" element={<SignUp/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/About" element={<About/>}/>

  </Routes>
  
  </BrowserRouter>;
}

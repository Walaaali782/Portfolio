import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  useEffect(() => {

    window.addEventListener("scroll" , () => {
if(window.scrollY > 300){
  setshowscroll(true)
}
else{
  setshowscroll(false)
}



    });

  },[]);




  const [showscroll , setshowscroll] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

    <a style={{opacity: showscroll? 1 : 0 , transition: "0.3s"}} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
    </div>
  );
}

export default App;

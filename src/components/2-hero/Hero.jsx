import "./hero.css";
import Lottie from "lottie-react";
import heroAnimation from '.././../../public/animation/heroo.json';


const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Software Engineer, Web Developer .
        </h1>
        <p className="sub-title">
          I’m Walaa Ali, a web developer A front-end developer creates websites and applications using web languages
           such as HTML, CSS, and JavaScript that allow users
            to access and interact with the site or app. When you visit a website.


        </p>

        <div className="all-icons flex">
  <a href="https://www.instagram.com/hwalaaali?igsh=eG04Y3BwNHR3c3Rs/" target="_blank" rel="noopener noreferrer" className="icon icon-instagram"></a>
  <a href="https://github.com/Walaaali782/" target="_blank" rel="noopener noreferrer" className="icon icon-github"></a>
  <a href="https://www.linkedin.com/in/walaa-ali-1ba731247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"></a>
</div>

      </div>

      <div className="right-section animation ">
          
            
        <Lottie
        className="heroAnimation"
         style={{ width:400, height:350}} animationData={heroAnimation} />


        </div>
        
    </section>
  );
};

export default Hero;

import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion"

const myprojects = [

  {projecttitle :"ZYNAH" ,catogray :"css" ,imapath : "./8.webp" , iconlink: "https://walaaali782.github.io/ZYNAH/" , icongithub :"https://github.com/Walaaali782/ZYNAH"},
{projecttitle :"FiloUI" ,catogray :"java" ,imapath : "./20.png" , iconlink: "https://walaaali782.github.io/filoUI/" , icongithub :"https://github.com/Walaaali782/filoUI"},
{projecttitle :"HOME-SOURSE" ,catogray :"java" ,imapath : "./18.jpg", iconlink: "https://walaaali782.github.io/HOME-SOURSE/" , icongithub :"https://github.com/Walaaali782/HOME-SOURSE"},
{projecttitle :"Ik-dev" ,catogray :"java" ,imapath : "./15.jpg", iconlink: "https://walaaali782.github.io/ik-dev/" , icongithub :"https://github.com/Walaaali782/ik-dev"},
{projecttitle :"MERCURY" ,catogray :"java" ,imapath : "./14.webp" , iconlink: "https://walaaali782.github.io/MERCURY/" , icongithub :"https://github.com/Walaaali782/MERCURY"},
{projecttitle :"In-House" ,catogray :"java" ,imapath : "./13.jpg" , iconlink: "https://walaaali782.github.io/In-House/" , icongithub :"https://github.com/Walaaali782/In-House"},
{projecttitle :"DePaletra" ,catogray :"java" ,imapath : "./12.jpg" , iconlink: "https://walaaali782.github.io/DePaletra/" , icongithub :"https://github.com/Walaaali782/DePaletra"},
{projecttitle :"Food-template" ,catogray :"css" ,imapath : "./7.jpg" , iconlink: "https://walaaali782.github.io/food-tel7/" , icongithub :"https://github.com/Walaaali782/food-tel7"},
{projecttitle :"Framework" ,catogray :"css" ,imapath : "./4.jpg" , iconlink: "https://walaaali782.github.io/Framework/" , icongithub :"https://github.com/Walaaali782/Framework"},
{projecttitle :"Template 3zero" ,catogray :"css" ,imapath : "./3.jpg" , iconlink: "https://walaaali782.github.io/temple23/" , icongithub :"https://github.com/Walaaali782/temple23"},


{projecttitle :"Weather" ,catogray :"react" ,imapath : "./s5.png", iconlink: "weather-eight-green.vercel.app" , icongithub :"https://github.com/Walaaali782/Weather"},

{projecttitle :"Portfolio" ,catogray :"react" , imapath : "./1.jpg", iconlink: "https://portfolio-pkc4r8285-walaas-projects-a19351bf.vercel.app/" , icongithub :"https://github.com/Walaaali782/portfolio"},

{projecttitle :"Roc" ,catogray :"css" ,imapath : "./44.jpg" , iconlink: "https://walaaali782.github.io/Roc-tel/" , icongithub :"https://github.com/Walaaali782/Roc-tel"},

{projecttitle :"ToDo List" ,catogray :"java" ,imapath : "./2.jpg" , iconlink: "https://walaaali782.github.io/bransh/" , icongithub :"https://github.com/Walaaali782/bransh"},






{projecttitle :"Films" ,catogray :"react" , imapath : "./photo_2024-11-09_22-24-17.jpg", iconlink: "https://day6-snowy.vercel.app/" , icongithub :"https://github.com/Walaaali782/Day6"},

{projecttitle :"Perfum" ,catogray :"react" ,imapath : "./111.PNG" , iconlink: "https://perfum-wine.vercel.app/" , icongithub :"https://github.com/Walaaali782/perfum"},

{projecttitle :"E-commerce" ,catogray :"react" ,imapath : "./113.PNG" , iconlink: "https://e-commerce-pi-gold.vercel.app/" , icongithub :"https://github.com/Walaaali782/E-commerce"},
{projecttitle :"Json-server-CRUD-" ,catogray :"react" ,imapath : "./112.jpg" , iconlink: "https://github.com/Walaaali782/Json-server-CRUD-" , icongithub :"https://github.com/Walaaali782/Json-server-CRUD-"},

]













const Main = () => {
  const [currentActive , setcurrentActive] = useState("all");

  const [arr , setarr] = useState(myprojects);


  return (
    <main className="flex">
      
      <section className="flex  left-section">
        <button onClick={() =>{
          setcurrentActive("all");
          setarr(myprojects);
        }}
         className= {currentActive === "all" ? "active" : null}
         >all projects</button>

        <button onClick={() =>{
          setcurrentActive("css");
          const newarr = myprojects.filter((item) => {
            return item.catogray === "css"
          })
          setarr(newarr);
        }}
        
        className= {currentActive === "css" ? "active" : null}
        
        >HTML & CSS</button>
        <button onClick={() =>{
          setcurrentActive("java");
          const newarr = myprojects.filter((item) => {
            return item.catogray === "java"
          })
          setarr(newarr);
        }}
        
        className= {currentActive === "java" ? "active" : null}
        
        >JavaScript</button>


        <button  onClick={() =>{
          setcurrentActive("react");
          const newarr = myprojects.filter((item) => {
            return item.catogray === "react"
          })
          setarr(newarr);
        }}
        
        className= {currentActive === "react" ? "active" : null}
        >React & MUI</button>
      </section>






      <section className=" flex right-section">

        {arr.map((item) => {
          return (
            <motion.article
            
            layout
            animate={{ transform: "scale(1)" }}
            initial={{ transform: "scale(0)" }}
            transition={{ type: "spring" ,damping:8}}
      
            
            key={item.imapath} className="  card">
              <img width={266} height={180} src={item.imapath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> {item.projecttitle} </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   <a className="icon-link" href={item.iconlink}> </a>
                   <a className="icon-github" href={item.icongithub}></a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}





{/* 
{[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} height={180} src="./3.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> template 3 Elzero </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   <a className="icon-link" href="https://walaaali782.github.io/temple23/"> </a>
                   <a className="icon-github" href="https://github.com/Walaaali782/temple23"></a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })} 
         
         
   {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} height={180} src="./3.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> template 3 Elzero </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   <a className="icon-link" href="https://walaaali782.github.io/temple23/"> </a>
                   <a className="icon-github" href="https://github.com/Walaaali782/temple23"></a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
          {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} height={180} src="./3.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> template 3 Elzero </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   <a className="icon-link" href="https://walaaali782.github.io/temple23/"> </a>
                   <a className="icon-github" href="https://github.com/Walaaali782/temple23"></a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}      
         
         
         
         
         
         
         
         
         
         
         
         */}



</section>

    </main>
  );
};

export default Main;


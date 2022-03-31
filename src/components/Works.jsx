import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      icon: "assets/cbc.png",
      title: "CBC-ish News App",
      desc: "Used an API to generate a mobile responsive landing page that resembles CBC News website.",
      img: "assets/news-app.png",
    },
    {
      id: 2,
      icon: "assets/csharp.png",
      title: "C# Organizational Console",
      desc: "Interface to view/add employee data.",
      img: "assets/c-organization-console.png",
    },
    {
      id: 3,
      icon: "assets/freshlogo.png",
      title: "Banking App",
      desc: "Simple ASP.Net banking app with user authentication",
      img: "assets/asp-bank-details.png",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>    
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
    </div>
  )
}

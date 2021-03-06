import { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import { featuredPortfolio, webPortfolio, otherPortfolio } from '../data';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "other",
      title: "Other App",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData(featuredPortfolio);

          
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <Link to={`/${d.id}`}>
              <img 
                src={d.img} 
                alt="" 
              />
            </Link>
          <h3>{d.title}</h3>
        </div>
        ))} 
      </div>
    </div>
  )
}

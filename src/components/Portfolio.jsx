import React from 'react'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>News App</li>
        <li>Other App</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
        <div className="item">
          <img src="assets/news-app.png" alt="News App" />
          <h3>News App</h3>
        </div>
      </div>
    </div>
  )
}

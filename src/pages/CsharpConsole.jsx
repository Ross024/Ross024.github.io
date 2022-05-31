import { consoleAppData as data } from "../data";

export default function CsharpConsole() {
  return (
    <div className="project-page">
      <div className="app-header">
        <h1>{data.title}</h1>   
      </div>
      <div className="app-body">
        <div className="left">
          <img src={data.outputImg} alt="" />
          <img src={data.codeImg} alt="" />
        </div>
        <div className="right">
          <div className="right-text-wrapper">
            <p>{data.desc}</p>
            <h3>{data.tech}</h3>
          </div>
          <div className="right-img-wrapper">
            <img src={data.fillerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

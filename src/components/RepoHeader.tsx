import React, { useState } from "react";
import "../index.css";
import { BookMark,Eye, Star, Fork , Code, PullRequest,Issues,Actions,Projects,Wiki,Security,Insights} from "./icons";


export default function RepoHeader() {
  const [watch,setWatch] = useState<number>(0)
  const [star, setStar]= useState<number>(0)
  const [fork, setFork]= useState<number>(0)

  const handleWatch = ()=> {
    setWatch((prev)=> prev+1)
  }
  const handleFork = ()=> {
    setFork((prev)=> prev+1)
  }
  const handleStar = ()=> {
    setStar((prev)=> prev+1)
  }
  
  return (
    <div className="repo-header">
      <div className="link-and-buttons">
        <div className="repo-links">
         <BookMark />
          <a href="/" className="blue-link facebook-link">
            facebook
          </a>
          <p className="slash"> / </p>
          <a href="/" className="blue-link react-link">
            react
          </a>
        </div>
        <div className="button-list">
          <a
            className="button watch gray-hover"
          >
            <div className="button-and-text button-and-text-watch" onClick={handleWatch}>
              <Eye/>
              <div className="button-text watch-text">Watch &darr;</div>
            </div>
            <div className="count count-watch">{watch} </div>
          </a>
          <a className="button fork gray-hover">
            <div className="button-and-text button-and-text-star" onClick={handleStar}>
             <Star />
              <div className="button-text star-text">Star</div>
            </div>
            <div className="count count-star">{star}</div>
          </a>
          <a  className="button fork gray-hover">
            <div className="button-and-text button-and-text-fork" onClick={handleFork}>
              <Fork />
              <div className="button-text fork-text">Fork</div>
            </div>
            <div className="count count-fork">{fork}</div>
          </a>
        </div>
      </div>
      <div className="tabs-row">
        <div className="tabs">
          <a href="/" className="tab code-button">
            <Code />
            <div className="tab-text">Code</div>
          </a>
          <a href="/" className="tab issues-button">
            <Issues />
            <div className="tab-text">Issues 462</div>
          </a>
          <a href="/" className="tab pull-button">
            <PullRequest />
            <div className="tab-text">Pull Requests 106</div>
          </a>
          <a href="/" className="tab actions-button">
           <Actions />
            <div className="tab-text">Actions</div>
          </a>
          <a href="/" className="tab projects-button">
            <Projects />
            <div className="tab-text">Projects</div>
          </a>
          <a href="/" className="tab wiki-button">
            <Wiki />
            <div className="tab-text">Wiki</div>
          </a>
          <a href="/" className="tab security-button">
            <Security />
            <div className="tab-text">Security</div>
          </a>
          <a href="/" className="tab insights-button">
            <Insights />
            <div className="tab-text">Insights</div>
          </a>
        </div>
      </div>
    </div>
  );
};


import React from "react";
import "../index.css";
import moment from "moment";
import { Labels, Open } from "./icons";

interface Props {
  key: number;
  title: string;
  number: number;
  login: string;
  created_at: string;
  // id: number;
  labels:[{
    name: string;
    color: string
  }]
}

export default function Issues (props:Props){
  let then = moment(props.created_at);
  let now = moment();
  let ans = then.from(now);
  return (
    <div className="issue">
      <div className="label-and-issue">
      <div>
      <div className="svg-and-issue">
        <Open />
        <h4 className="issue-title">{props.title.slice(0,100)}...</h4>
        
      </div>
      <p className="issue-creator">
        #{props.number} opened {ans} by {props.login}
      </p>
      </div>
      {props.labels.map((el,ind)=>(
          <div key={ind} className="issue-labels" style={{backgroundColor:`#${el.color}`}}>
             <p className="issue-label-title" style={{fontWeight:'bold'}}>{el.name}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};


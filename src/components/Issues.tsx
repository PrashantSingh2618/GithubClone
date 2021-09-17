import React from "react";
import "../index.css";
import moment from "moment";
import { Open } from "./icons";

interface Props {
  key: number;
  title: string;
  number: number;
  login: string;
  created_at: string;
  // id: number;
}

export default function Issues (props:Props){
  let then = moment(props.created_at);
  let now = moment();
  let ans = then.from(now);
  return (
    <div className="issue">
      <div className="svg-and-issue">
        <Open />
        <h4 className="issue-title">{props.title}</h4>
      </div>
      <p className="issue-creator">
        #{props.number} opened {ans} by {props.login}
      </p>
    </div>
  );
};

